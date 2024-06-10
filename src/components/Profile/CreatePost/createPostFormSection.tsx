'use client'
import InputItem from "@/components/Form/Profile/inputItem";
import { CreatePostItems, ErrorMessageObj, UserObj, CreatePost_ResponseFromServer } from "@/components/Types/Profile/CreatePost/createPost";
import LoadingButton from "@/components/loadingButton";
import { cn } from "@/lib/tailwind-merge";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { savePost } from "@/app/actions/data/save-data/savePost";



const CreatePostFormSection = ({ items }: { items: CreatePostItems }) => {
  const { data: session } = useSession();

  const { objectKey, initNewInfo, initErrorMessage, field } = items;

  const [newInfo, setNewInfo] = useState<UserObj>(initNewInfo);
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

  const handleSubmit = async  (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (session === null) {
      return;
    }
    setProcess(true);
    const response: CreatePost_ResponseFromServer = await savePost({ id: session.user.id, ...newInfo });
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
          <InputItem object={field.title} value={newInfo.title} isError={Boolean(errorMessage.title)} onChange={handleChange} />
          {Boolean(errorMessage.title) && (
            <div className="text-sm font-medium text-red-600 pt-1">{errorMessage.title}</div>
          )}
        </div>
        <div>
          <InputItem object={field.date} value={newInfo.date} isError={Boolean(errorMessage.date)} onChange={() => { }} readonly={true} />
          {Boolean(errorMessage.date) && (
            <div className="text-sm font-medium text-red-600 pt-1">{errorMessage.date}</div>
          )}
        </div>
      </div>
      <div className="flex-grow flex flex-col space-y-6">
        <InputItem object={field.content} value={newInfo.content} isError={Boolean(errorMessage.content)} onChange={handleChange} />
        {Boolean(errorMessage.content) && (
          <div className="text-sm font-medium text-red-600 pt-1">{errorMessage.content}</div>
        )}
        <>
          <LoadingButton type="submit" text="Post" isLoading={process} isSuccess={isProcessSuccess} />
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

export default CreatePostFormSection;