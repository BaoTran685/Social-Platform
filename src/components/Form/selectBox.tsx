import { cn } from "@/lib/tailwind-merge";
import Select, { StylesConfig } from "react-select";
import { } from "../Types/Profile/Update/update";
import { Post_Option } from "../Types/Profile/CreatePost/createPost";
import { SingleValue } from "react-select";
import chroma from "chroma-js";

interface Props {
  name: string,
  options?: Post_Option[],
  type: string,
  value: SingleValue<Post_Option>,
  placeholder: string,
  isError: boolean,
  onChange: (selectedOption: SingleValue<Post_Option>) => void,
}

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 11,
    width: 11,
  },
});
type Color = chroma.Color;
const colourStyles: StylesConfig<Post_Option> = {
  control: (styles, { isFocused }) => ({
    ...styles, backgroundColor: 'white', borderWidth: '2px', ':hover': { borderColor: '#1E1E24' }, borderColor: isFocused ? '#1E1E24' : '#A1A1AA', outline: 'none', borderRadius: '0.5rem', boxShadow: '',
  }),
  option: (styles, { data, isFocused, isSelected }) => {
    const color: Color = chroma(data.color);
    return {
      ...styles,
      borderRadius: '0.5rem',
      backgroundColor: isSelected
        ? data.color
        : isFocused
          ? color.alpha(0.1).css()
          : undefined,
      color: isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: isSelected
          ? data.color
          : color.alpha(0.3).css(),
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot(), }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};
const SelectBox: React.FC<Props> = ({ name, options, type, placeholder, value, isError, onChange }) => {
  return (
    options && (
      <Select
        instanceId={name}
        options={options}
        styles={colourStyles}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)} isMulti={false} />)
  )
}

export default SelectBox;

// block w-full bg-[#f4f4f5] rounded-lg focus:outline-none focus:border-[#1E1E24] transition-colors ease-linear
{/* <select
        name={name}
        className={cn(`text-center text--content text-black input--select border-2 p-2`, {
          'border-red-600': isError === true,
          'border-[#c2c2c2]': isError === false
        })}
        value={value}
        onChange={(e) => onChange(e)}
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select> */}

