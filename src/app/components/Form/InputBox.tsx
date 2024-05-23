
interface Props {
  name: string,
  type: string,
  placeholder: string,
  fillError: boolean,
  onChange: Function,
}
const InputBox = ({name, type, placeholder, fillError, onChange}:Props) => {
  let borderColor = fillError === true ? 'border-b-red-600' : 'border-b-[#1E1E24]';
  return (
    <input
      name={name}
      type={type}
      className={`text-sm text-black block w-full bg-inherit border-b-2 ${borderColor} focus:outline-none focus:border-b-[#21A179] transition-colors ease-linear p-2 placeholder:text-[#A1A1AA] appearance-none`}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      autoComplete="off"
    />
  )
}

export default InputBox;