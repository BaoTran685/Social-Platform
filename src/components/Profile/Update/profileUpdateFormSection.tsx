'use client'
import { FormEvent, useState } from "react";
import { ErrorMessageObj, ProfileUpdateItems, ProfileUpdate_ResponseFromServer, UserObj } from "@/components/Types/Profile/Update/update";
import LoadingButton from "@/components/loadingButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { updateProfileUpdate } from "@/app/actions/data/update-data/updateProfileUpdate";
import { cn } from "@/lib/tailwind-merge";
import InputItem  from "@/components/Form/Profile/inputItem";


const ProfileUpdateFormSection = ({ items, info }: { items: ProfileUpdateItems, info: UserObj }) => {
  const router = useRouter();
  const { data: session } = useSession();

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
    if (session === null) {
      return;
    }
    setProcess(true);
    const response: ProfileUpdate_ResponseFromServer = await updateProfileUpdate({ id: session.user.id, ...newInfo });
    setProcess(false);
    setErrorMessage({
      ...errorMessage,
      ...response.errorMessage,
    });
    setProcessMessage(response.message);
    setIsProcessSuccess(response.ok);
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



