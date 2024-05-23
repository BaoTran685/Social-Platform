import { Spinner } from "./Icon/Icons"


interface Props {
  type: "button" | "submit" | "reset" | undefined,
  text: string,
  isLoading: Boolean,
}

const LoadingButton = ({ type, text, isLoading }: Props) => {
  return (
    <button
      type={type}
      className='text-white w-full rounded-lg bg-[#21A179] shadow-inner transition-transform ease-in duration-300 hover:scale-105'
    >
      <span className='flex items-center justify-center px-6 py-3'>
        {isLoading === true ? (
          <Spinner />
        ) : (
          text
        )}
      </span>
    </button>
  )
}

export default LoadingButton;