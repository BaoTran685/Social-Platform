'use client'
import { FormEvent, useState } from "react";
import { ProfileUpdate_ErrorMessageObj, ProfileUpdate_ObjectKey, ProfileUpdateItems, ProfileUpdate_ResponseFromServer, ProfileUpdate_UserObj } from "@/components/Types/Profile/Update/update";
import LoadingButton from "@/components/loadingButton";
import { useRouter } from "next/navigation";
import { updateProfileUpdate } from "@/app/actions/data/save-data/updateProfileUpdate";
import { cn } from "@/lib/tailwind-merge";
import InputItem from "@/components/Form/inputItem";
import { validateEmail, trimText } from "@/lib/lib";
import { CheckCircleIcon } from "@heroicons/react/24/outline";


const ProfileUpdateFormSection = ({ items, info, emailVerified }: { items: ProfileUpdateItems, info: ProfileUpdate_UserObj, emailVerified: boolean }) => {
  const router = useRouter();

  const { objectKey, initErrorMessage, field } = items;

  // data from the db
  const [newInfo, setNewInfo] = useState<ProfileUpdate_UserObj>(info);
  const [errorMessage, setErrorMessage] = useState<ProfileUpdate_ErrorMessageObj>(initErrorMessage);

  const [processMessage, setProcessMessage] = useState<string>('');
  const [isProcessSuccess, setIsProcessSuccess] = useState<boolean>(false);

  const [process, setProcess] = useState<boolean>(false);

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    setNewInfo({
      ...newInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    setErrorMessage({
      ...errorMessage,
      [event.currentTarget.name]: '',
    })
    setProcessMessage('');
    setIsProcessSuccess(false);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setProcess(true);
    const trimInfo = trimInput({ newInfo, objectKey });
    setNewInfo(trimInfo);
    const ok: boolean = checkInput({ newInfo: trimInfo, setErrorMessage, setProcess })
    if (!ok) {
      return;
    }
    const responseOk: boolean = await processSubmit({ newInfo: trimInfo, dbInfo: info, objectKey, setErrorMessage, setProcessMessage, setIsProcessSuccess })
    setProcess(false);
  }
  return (
    <form className="flex-grow flex flex-col space-y-6" onSubmit={(e) => handleSubmit(e)} autoComplete="off">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <InputItem object={field.name} value={newInfo.name} isError={Boolean(errorMessage.name)} onChange={handleChange} />
          {Boolean(errorMessage.name) && (
            <div className="text-sm font-medium text-red-600 pt-1">{errorMessage.name}</div>
          )}
        </div>
        <div className="relative">
          <InputItem object={field.email} value={newInfo.email} isError={Boolean(errorMessage.email)} onChange={handleChange} />
          {Boolean(errorMessage.email) && (
            <div className="text-sm font-medium text-red-600 pt-1">{errorMessage.email}</div>
          )}
          {emailVerified && (
            <div className="absolute top-0 right-0">
              <CheckCircleIcon className="text-[#21A179] w-7 h-7" />
            </div>
          )}
        </div>
      </div>
      <div className="flex-grow flex flex-col space-y-6">
        <InputItem object={field.description} value={newInfo.description} isError={Boolean(errorMessage.description)} onChange={handleChange} />
        {Boolean(errorMessage.description) && (
          <div className="text-sm font-medium text-red-600 pt-1">{errorMessage.description}</div>
        )}
        <>
          <LoadingButton type="submit" text="Update" isLoading={process} isSuccess={isProcessSuccess} />
          {Boolean(processMessage) && (
            <div className={cn('text-sm font-medium mt-2', {
              'text-[#21A179]': isProcessSuccess,
              'text-red-600': !isProcessSuccess,
            })}>{processMessage}</div>
          )}
        </>
      </div>

    </form>
  )
}

export default ProfileUpdateFormSection;

interface trimInputProps {
  newInfo: ProfileUpdate_UserObj,
  objectKey: Array<ProfileUpdate_ObjectKey>
}
const trimInput = ({ newInfo, objectKey }: trimInputProps) => {
  const tempInfo = { ...newInfo }
  objectKey.forEach((item) => {
    tempInfo[item] = trimText({ text: newInfo[item] })
  })
  return tempInfo
}

interface checkInputProps {
  newInfo: ProfileUpdate_UserObj,
  setErrorMessage: Function,
  setProcess: Function,
}
const checkInput = ({ newInfo, setErrorMessage, setProcess }: checkInputProps) => {
  const setError = (item: string, message: string) => {
    setErrorMessage((prev: ProfileUpdate_ErrorMessageObj) => ({
      ...prev,
      [item]: message
    }))
  }
  if (newInfo.email && !validateEmail(newInfo.email)) {
    setError('email', 'Invalid Email');
    setProcess(false)
    return false;
  }
  return true;
}

interface processSubmitProps {
  newInfo: ProfileUpdate_UserObj,
  dbInfo: ProfileUpdate_UserObj,
  objectKey: Array<ProfileUpdate_ObjectKey>,
  setErrorMessage: Function,
  setProcessMessage: Function,
  setIsProcessSuccess: Function,
}
type PartialUserObj = {
  email: string,
  name?: string,
  description?: string,
}
const processSubmit = async ({ newInfo, dbInfo, objectKey, setErrorMessage, setProcessMessage, setIsProcessSuccess }: processSubmitProps) => {
  let differenceInfo: PartialUserObj = { email: newInfo.email }
  objectKey.forEach((item) => {
    if (dbInfo[item] !== newInfo[item]) {
      differenceInfo[item] = newInfo[item];
    }
  })
  const response: ProfileUpdate_ResponseFromServer = await updateProfileUpdate(differenceInfo);
  setErrorMessage((prev: ProfileUpdate_ErrorMessageObj) => ({
    ...prev,
    ...response.errorMessage
  }))
  setProcessMessage(response.message);
  setIsProcessSuccess(response.ok);
  return response.ok;
}