'use client'

import { EyeClose, EyeOpen } from "@/components/Icon/icons";
import InputBox from "@/components/Form/inputBox";
import { signIn } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";
import { InputObj, LoginRegisterItem } from "../types/loginAndRegister";
import { useRouter } from "next/navigation";
import LoadingButton from "../loadingButton";

const FormSection = ({ items }: { items: LoginRegisterItem }) => {
  const { arr, userInfo, fillError, field, formType, endPoint, buttonName, callback } = items;

  const router = useRouter();
  const [user, setUser] = useState(userInfo);
  const [userFillError, setUserFillError] = useState(fillError);
  const [process, setProcess] = useState(false);

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    setUser({
      ...user,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let error = 0;
    arr.forEach((item) => {
      if ((userFillError as any)[item] === false && (user as any)[item] === '') {
        setUserFillError((prev) => ({
          ...prev,
          [item]: true
        }));
        error = 1;
      }
    })
    if (error === 1) {
      return;
    }
    let response;
    setProcess(true);
    if (formType === 'register') {
      response = await fetch(endPoint, {
        method: 'POST',
        body: JSON.stringify(user),
      });
    }
    response = await signIn('credentials', {
      username: (user as any).username,
      password: (user as any).password,
      redirect: false,
    });
    console.log(response);
    setProcess(false);
    if (response?.ok === true) {
      router.push(callback);
      router.refresh();
    }
  }

  useEffect(() => {
    arr.forEach((item) => {
      if ((userFillError as any)[item] === true && (user as any)[item] !== '') {
        setUserFillError((prev) => ({
          ...prev,
          [item]: false
        }))
      }
    })
  })
  return (
    <form className="flex flex-col align-center justify-center space-y-4 mt-6" onSubmit={(e) => handleSubmit(e)}>
      {field.map((object, index) => {
        return (
          <div key={index}>
            {object.name === "password" ? (
              <InputItemPassword  object={object} fillError={(userFillError as any)[object.name]} handleChange={handleChange} />
            ) : (
              <InputItem object={object} fillError={(userFillError as any)[object.name]} handleChange={handleChange} />
            )}
            {(userFillError as any)[object.name] && (
              <div className="text-sm font-medium text-red-600 pt-1">Required field</div>
            )}
          </div>
        )
      }
      )}
      <LoadingButton type="submit" text={buttonName} isLoading={process} />
    </form>
  )
}

export default FormSection;


const InputItem = ({ object, fillError, handleChange }: { object: InputObj, fillError: boolean, handleChange: Function }) => {
  return (
    <InputBox name={object.name} type={object.type} placeholder={object.placeholder} fillError={fillError} onChange={handleChange} />
  )
}

const InputItemPassword = ({ object, fillError, handleChange }: { object: InputObj, fillError: boolean, handleChange: Function }) => {
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
      <InputBox name={object.name} type={passwordType} placeholder={object.placeholder} fillError={fillError} onChange={handleChange} />
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