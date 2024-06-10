import InputBox from "@/components/Form/inputBox";
import TextAreaBox from "@/components/Form/textAreaBox";
import { InputObj } from "@/components/Types/Profile/Update/update";


interface InputItemProps {
  object: InputObj,
  value: string,
  isError: boolean,
  onChange: Function,
  readonly?: boolean,
}
const InputItem = ({ object, onChange, value, isError, readonly }: InputItemProps) => {
  const { label, name, type, placeholder, isInput } = object;
  return (
    <>
      <label
        htmlFor={name}
        className='text-black text-sm font-medium block mb-2'
      >
        {label}
      </label>
      {isInput === true ? (
        <InputBox name={name} type={type} placeholder={placeholder} value={value} isError={isError} onChange={onChange} readonly={readonly} />
      ) : (
        <TextAreaBox name={name} type={type} placeholder={placeholder} value={value} isError={isError} onChange={onChange} readonly={readonly} />
      )}

    </>
  )
}

export default InputItem;