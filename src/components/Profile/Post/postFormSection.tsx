'use client'
import InputItem from "@/components/Form/Profile/inputItem";
import { CreatePostItems, ErrorMessageObj, UserObj, CreatePost_ResponseFromServer, ObjectKey } from "@/components/Types/Profile/CreatePost/createPost";
import LoadingButton from "@/components/loadingButton";
import { cn } from "@/lib/tailwind-merge";
import { FormEvent, useState } from "react";
import { createPost } from "@/app/actions/data/save-data/Post/createPost";
import { EditPostItems, EditPost_ResponseFromServer } from "@/components/Types/Profile/EditPost/editPost";
import { editPost } from "@/app/actions/data/save-data/Post/editPost";


const PostFormSection = ({ items, postId, authorId }: { items: CreatePostItems | EditPostItems, postId?: string, authorId?: string }) => {

  const { objectKey, initNewInfo, initErrorMessage, field, buttonName, formType } = items;

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setProcess(true);
    let ok: boolean = checkInput({ newInfo, objectKey, setErrorMessage, setProcess });
    if (!ok) {
      return;
    }
    const responseOk: boolean = await processSubmit({ newInfo, postId, authorId, formType, setErrorMessage, setProcessMessage, setIsProcessSuccess })
    setProcess(false);
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
          <LoadingButton type="submit" text={buttonName} isLoading={process} isSuccess={isProcessSuccess} />
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

export default PostFormSection;


interface checkInputProps {
  newInfo: UserObj,
  objectKey: Array<ObjectKey>
  setErrorMessage: Function,
  setProcess: Function,
}
const checkInput = ({ newInfo, objectKey, setErrorMessage, setProcess }: checkInputProps) => {
  const setError = (item: string, message: string) => {
    setErrorMessage((prev: ErrorMessageObj) => ({
      ...prev,
      [item]: message
    }))
  }
  let error = false;
  // check for empty input
  objectKey.forEach(item => {
    if (newInfo[item] === '') {
      setError(item, 'Required Field')
      error = true
    }
  })
  if (error) {
    setProcess(false);
  }
  return error === false;
}


interface processSubmitProps {
  newInfo: UserObj,
  postId?: string,
  authorId?: string,
  formType: string,
  setErrorMessage: Function,
  setProcessMessage: Function,
  setIsProcessSuccess: Function,
}

const processSubmit = async ({ newInfo, postId, authorId, formType, setErrorMessage, setProcessMessage, setIsProcessSuccess }: processSubmitProps) => {
  const setMessage = (processMessge: string, isProcessSuccess: boolean) => {
    setProcessMessage(processMessge)
    setIsProcessSuccess(isProcessSuccess)
  }
  let response: CreatePost_ResponseFromServer | EditPost_ResponseFromServer | null = null
  if (formType === 'createPost') {
    response = await createPost(newInfo);
  } else if (formType === 'editPost' && postId && authorId) {
    response = await editPost({ ...newInfo, postId, authorId })
  }
  if (response) {
    setErrorMessage((prev: ErrorMessageObj) => ({
      ...prev,
      ...response.errorMessage
    }))
    setMessage(response.message, response.ok)
    return response.ok
  }
  return false

}
