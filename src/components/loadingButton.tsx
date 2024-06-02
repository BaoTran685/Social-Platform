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
      className='text-white w-full rounded-lg bg-[#21A179] shadow-inner transition-transform ease-in duration-300 hover:scale-105'
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