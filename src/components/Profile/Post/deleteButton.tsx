'use client'

import removePost from "@/app/actions/data/save-data/post/removePost";
import { Spinner, Tick } from "@/components/Icon/icons";
import { cn } from "@/lib/tailwind-merge";
import { useState } from "react";

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined,
  text: string,
  postId: string,
  authorId: string,
}
const DeleteButton = ({ type, text, postId, authorId, }: Props) => {
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
    <div className="flex flex-col space-y-1">
      <button
        type={type}
        className="text-white text--sub--content min-w-36 rounded-lg bg-red-700 shadow-inner hover:brighter--shadow hover:brightness-110 px-3 py-1"
        onClick={handleClick}
        disabled={isLoading}>
        <span className="flex items-center justify-center h-7">
          {isLoading ? (
            <Spinner />
          ) : (
            isProcessSuccess ? (
              <Tick />
            ) : (
              text
            ))
          }
        </span>
      </button>
      {Boolean(processMessage) && (
        <div className={cn('text-sm font-medium mt-2', {
          'text-[#21A179]': isProcessSuccess,
          'text-red-600': !isProcessSuccess,
        })}>{processMessage}</div>
      )}
    </div>
  )
}

export default DeleteButton;