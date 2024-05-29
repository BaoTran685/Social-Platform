import InputBox from "@/components/Form/inputBox";
import TextAreaBox from "@/components/Form/textAreaBox";
import { InputObj } from "@/components/types/profileUpdate";


const UpdateInputItem = ({ object, onChange, value, isError }: { object: InputObj, value: string, isError: boolean, onChange: Function, }) => {
  const { label, name, type, placeholder, isInput } = object;
  return (
    <div className='mb-6'>
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

    </div>
  )
}

export default UpdateInputItem;