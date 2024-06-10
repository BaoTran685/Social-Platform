import { cn } from "@/lib/tailwind-merge"

interface Props {
  name: string,
  type: string,
  placeholder: string,
  value: string,
  isError: boolean,
  onChange: Function,
  readonly?: boolean,
}

const TextAreaBox = ({ name, type, placeholder, value, isError, onChange, readonly }: Props) => {
  return (
    <textarea
      name={name}
      className={cn('h-full text--content text-black bg-notebook bg-scroll leading-notebook input--box border-2 px-2', {
        'border-red-600': isError === true,
        'border-[#A1A1AA]': isError === false,
      })}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      autoComplete='off'
      autoCorrect='off'
      spellCheck='false'
      readOnly={readonly}
    />
  )
}

export default TextAreaBox;