import { useState } from "react";
import InputBox from "./inputBox"
import { EyeClose, EyeOpen } from "@/components/Icon/icons";
import { InputObj } from "../Types/Auth/auth";


export const InputItem = ({ object, value, isError, handleChange }: { object: InputObj, value: string, isError: boolean, handleChange: Function }) => {
  return (
    <InputBox name={object.name} type={object.type} placeholder={object.placeholder} value={value} isError={isError} onChange={handleChange} />
  )
}

export const InputItemPassword = ({ object, value, isError, handleChange }: { object: InputObj, value:string, isError: boolean, handleChange: Function }) => {
  const [eyeOpen, setEyeOpen] = useState(true);
  const [passwordType, setPasswordType] = useState('password');
  const handleEye = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password')
    }
    setEyeOpen(!eyeOpen);
  }
  return (
    <div className="relative">
      <InputBox name={object.name} type={passwordType} placeholder={object.placeholder} value={value} isError={isError} onChange={handleChange} />
      <button className="absolute bottom-2 right-1 w-fit h-fit flex items-center justify-center cursor-pointer" type="button" onClick={() => handleEye()}>
        {eyeOpen ? (
          <div className="flex items-center justify-center w-fit h-fit rounded-md text-[#A1A1AA]">
            <EyeOpen />
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-md text-[#21A179]">
            <EyeClose />
          </div>
        )}
      </button>
    </div>
  )
}