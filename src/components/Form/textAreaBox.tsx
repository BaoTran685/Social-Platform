import { cn } from "@/lib/tailwind-merge"

interface Props {
  name: string,
  type: string,
  placeholder: string,
  value: string,
  fillError: boolean,
  onChange: Function,
}

const TextAreaBox = ({ name, type, placeholder, value, fillError, onChange }: Props) => {
  return (
    <textarea
      name={name}
      className={cn('text-sm text-black input--box border-2 resize-none h-20', {
        'border-red-600': fillError === true,
        'border-[#A1A1AA]': fillError === false,
      })}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      autoComplete="off"
    />
  )
}

export default TextAreaBox;