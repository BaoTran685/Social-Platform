

interface Props {
  name: string,
  type: string,
  placeholder: string
}
const InputBox = ({name, type, placeholder}:Props) => {
  return (
    <input
      name={name}
      type={type}
      className='text-sm text-black rounded-lg block w-full bg-[white] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#33353F] placeholder-[#9CA2A9] p-2.5 appearance-none'
      required
      placeholder={placeholder}
    />
  )
}

export default InputBox;