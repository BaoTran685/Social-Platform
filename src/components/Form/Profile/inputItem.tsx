import InputBox from "@/components/Form/inputBox";
import TextAreaBox from "@/components/Form/textAreaBox";
import { CreatePost_InputObj } from "@/components/Types/Profile/CreatePost/createPost";
import { EditPost_InputObj } from "@/components/Types/Profile/EditPost/editPost";
import { ProfileUpdate_InputObj } from "@/components/Types/Profile/Update/update";


interface InputItemProps {
  object: ProfileUpdate_InputObj | CreatePost_InputObj | EditPost_InputObj,
  value: string,
  isError: boolean,
  onChange: Function,
  readonly?: boolean,
}
const InputItem = ({ object, onChange, value, isError, readonly }: InputItemProps) => {
  const { label, name, typeInput } = object;
  return (
    <>
      <label
        htmlFor={name}
        className='text-black text-sm font-medium block mb-2'
      >
        {label}
      </label>
      {typeInput === 'input' ? (
        <InputBox {...object} value={value} isError={isError} onChange={onChange} readonly={readonly} />
      ) : typeInput === 'textarea' ? (
        <TextAreaBox {...object} value={value} isError={isError} onChange={onChange} readonly={readonly} />
      ) : (
        null
      )}

    </>
  )
}

export default InputItem;