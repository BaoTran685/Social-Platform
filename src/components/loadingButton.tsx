import { Spinner, Tick } from "./Icon/icons"


interface Props {
  type: "button" | "submit" | "reset" | undefined,
  text: string,
  isLoading: boolean,
  isSuccess: boolean
}

const LoadingButton = ({ type, text, isLoading, isSuccess }: Props) => {
  return (
    <button
      type={type}
      className='text-white text-base w-full rounded-lg bg-[#2f7d65] shadow-inner hover:brighter--shadow hover:brightness-110'
      disabled={isLoading}
    >
      <span className='flex items-center justify-center px-6 py-3'>
        {isLoading ? (
          <Spinner />
        ) : (
          isSuccess ? (
            <Tick />
          ) : (
            text
          )
        )}
      </span>
    </button>
  )
}

export default LoadingButton;