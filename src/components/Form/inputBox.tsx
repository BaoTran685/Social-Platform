import { cn } from "@/lib/tailwind-merge";

interface Props {
  name: string,
  type: string,
  value: string,
  placeholder: string,
  fillError: boolean,
  onChange: Function,
}
const InputBox = ({ name, type, placeholder, value, fillError, onChange }: Props) => {
  return (
    <input
      name={name}
      type={type}
      className={cn(`text-sm text-black input--line`, {
        'border-b-red-600': fillError === true,
        'border-b-[#A1A1AA]': fillError === false,
      })}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
      autoComplete="off"
    />
  )
}

export default InputBox;