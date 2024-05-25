

interface Props {
  label: string,
  name: string,
  type: string,
  placeholder: string,
  isInput: boolean,
  
}
const InputBox = ({ items, onChange }: { items: Props, onChange: Function, }) => {
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
        <input
          name={name}
          id={name}
          type={type}
          className='text-sm text-black input--box'
          required
          autoComplete="off"
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />
      ) : (
        <textarea
          name={name}
          id={name}
          className='text-sm text-black input--box resize-none h-20'
          required
          autoComplete="off"
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />
      )}

    </div>
  )
}

export default InputBox;
