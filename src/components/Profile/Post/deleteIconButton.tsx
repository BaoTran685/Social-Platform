'use client'
import { removePost } from "@/app/actions/data/save-data/post/removePost";
import { Spinner } from "@/components/Icon/icons";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


interface Props {
  type: 'button' | 'submit' | 'reset' | undefined,
  children: JSX.Element,
  postId: string,
  authorId: string,
}

const DeleteIconButton = ({ type, children, postId, authorId, }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [processMessage, setProcessMessage] = useState<string>('')
  const [isProcessSuccess, setIsProcessSuccess] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const response = await removePost({ postId, authorId })
    setIsLoading(false);
    setProcessMessage(response.message)
    setIsProcessSuccess(response.ok)
  }
  return (
    <button
      type={type}
      onClick={handleClick}
      className="block w-fit h-fit bg-[#dc2626] shadow-inner rounded-lg p-1.5"
    >
      <span className="flex items-center justify-center text-white">
        {isLoading ? (
          <Spinner />
        ) : (
          isProcessSuccess ? (
            <CheckIcon className="size-6" />
          ) : (
            children
          ))
        }
      </span>
    </button>
  )
}

export default DeleteIconButton;