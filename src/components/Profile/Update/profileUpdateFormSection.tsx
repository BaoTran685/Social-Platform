'use client'
import { FormEvent, useState } from "react";
import { ErrorMessageObj, ObjectKey, ProfileUpdateItems, ProfileUpdate_ResponseFromServer, UserObj } from "@/components/Types/Profile/Update/update";
import LoadingButton from "@/components/loadingButton";
import { useRouter } from "next/navigation";
import { updateProfileUpdate } from "@/app/actions/data/save-data/updateProfileUpdate";
import { cn } from "@/lib/tailwind-merge";
import InputItem from "@/components/Form/Profile/inputItem";
import { validateEmail } from "@/lib/lib";
import { trimText } from "@/lib/lib";


const ProfileUpdateFormSection = ({ items, info }: { items: ProfileUpdateItems, info: UserObj }) => {
  const router = useRouter();

  const { objectKey, initErrorMessage, field } = items;

  // data from the db
  const [newInfo, setNewInfo] = useState<UserObj>(info);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageObj>(initErrorMessage);

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
    const info = trimInput({ newInfo, objectKey });
    setNewInfo(info);
    const ok: boolean = checkInput({ newInfo: info, setErrorMessage, setProcess })
    if (!ok) {
      return;
    }
    const responseOk: boolean = await processSubmit({ newInfo: info, setErrorMessage, setProcessMessage, setIsProcessSuccess })
    setProcess(false);
  }
  return (
    <form className="flex-grow flex flex-col space-y-6" onSubmit={(e) => handleSubmit(e)} autoComplete="off">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <InputItem object={field.name} value={newInfo.name} isError={Boolean(errorMessage.name)} onChange={handleChange} />
          {Boolean(errorMessage.name) && (
            <div className="text-sm font-medium text-red-600 pt-1">{errorMessage.name}</div>
          )}
        </div>
        <div>
          <InputItem object={field.email} value={newInfo.email} isError={Boolean(errorMessage.email)} onChange={handleChange} />
          {Boolean(errorMessage.email) && (
            <div className="text-sm font-medium text-red-600 pt-1">{errorMessage.email}</div>
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
  newInfo: UserObj,
  objectKey: Array<ObjectKey>
}
const trimInput = ({ newInfo, objectKey }: trimInputProps) => {
  const tempInfo = { ...newInfo }
  objectKey.forEach((item) => {
    tempInfo[item] = trimText({ text: newInfo[item] })
  })
  return tempInfo
}

interface checkInputProps {
  newInfo: UserObj,
  setErrorMessage: Function,
  setProcess: Function,
}
const checkInput = ({ newInfo, setErrorMessage, setProcess }: checkInputProps) => {
  const setError = (item: string, message: string) => {
    setErrorMessage((prev: ErrorMessageObj) => ({
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
  newInfo: UserObj,
  setErrorMessage: Function,
  setProcessMessage: Function,
  setIsProcessSuccess: Function,
}
const processSubmit = async ({ newInfo, setErrorMessage, setProcessMessage, setIsProcessSuccess }: processSubmitProps) => {
  const response: ProfileUpdate_ResponseFromServer = await updateProfileUpdate(newInfo);
  setErrorMessage((prev: ErrorMessageObj) => ({
    ...prev,
    ...response.errorMessage
  }))
  setProcessMessage(response.message);
  setIsProcessSuccess(response.ok);
  return response.ok;
}