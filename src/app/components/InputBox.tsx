
interface Props {
  name: string,
  type: string,
  placeholder: string,
  fillError: boolean,
  value: string,
  onChange: Function,
}
const InputBox = ({name, type, placeholder, fillError, value, onChange}:Props) => {
  let borderColor = fillError === true ? 'border-b-red-600' : 'border-b-[#1E1E24]';
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    onChange(currentValue);
  }
  return (
    <input
      name={name}
      type={type}
      className={`text-sm text-black block w-full bg-inherit border-b-2 ${borderColor} focus:outline-none focus:border-b-[#21A179] transition-colors ease-linear p-2 mt-4 placeholder:text-[#A1A1AA] appearance-none`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e)}
      autoComplete="off"
    />
  )
}

export default InputBox;