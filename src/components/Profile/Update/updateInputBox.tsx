import TextAreaBox from "@/components/Form/textAreaBox";
import InputBox from "@/components/Form/inputBox";

interface Props {
  label: string,
  name: string,
  type: string,
  placeholder: string,
  isInput: boolean,
  
}
const UpdateInputBox = ({ items, onChange, fillError }: { items: Props, onChange: Function, fillError: boolean}) => {
  const { label, name, type, placeholder, isInput } = items;
  return (
    <div className='mb-6'>
      <label
        htmlFor={name}
        className='text-black block mb-2 text-sm font-medium'
      >
        {label}
      </label>
      {isInput === true ? (
        <InputBox name={name} type={type} placeholder={placeholder} fillError={fillError} onChange={onChange} />
      ) : (
        <TextAreaBox name={name} type={type} placeholder={placeholder} fillError={fillError} onChange={onChange}/>
      )}

    </div>
  )
}

export default UpdateInputBox;
