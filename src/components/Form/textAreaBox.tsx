import { cn } from "@/lib/tailwind-merge"

interface Props {
  name: string,
  type: string,
  placeholder: string,
  fillError: boolean,
  onChange: Function,
}

const TextAreaBox = ({ name, type, placeholder, fillError, onChange }: Props) => {
  return (
    <textarea
      name={name}
      id={name}
      className={cn('text-sm text-black input--box border-2 resize-none h-20', {
        'border-red-600': fillError === true,
        'border-[#A1A1AA]': fillError === false,
      })}
      required
      autoComplete="off"
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  )
}

export default TextAreaBox;