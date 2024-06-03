import InputBox from "@/components/Form/inputBox";
import TextAreaBox from "@/components/Form/textAreaBox";
import { InputObj } from "@/components/Types/Profile/profileUpdate";


const UpdateInputItem = ({ object, onChange, value, isError }: { object: InputObj, value: string, isError: boolean, onChange: Function, }) => {
  const { label, name, type, placeholder, isInput } = object;
  return (
    <>
      <label
        htmlFor={name}
        className='text-black block mb-2 text-sm font-medium'
      >
        {label}
      </label>
      {isInput === true ? (
        <InputBox name={name} type={type} placeholder={placeholder} value={value} isError={isError} onChange={onChange} />
      ) : (
        <TextAreaBox name={name} type={type} placeholder={placeholder} value={value} isError={isError} onChange={onChange} />
      )}

    </>
  )
}

export default UpdateInputItem;