'use client'

import { EyeClose, EyeOpen } from "@/app/components/Icon/Icons";
import InputBox from "@/app/components/Form/InputBox";
import { signIn } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";

import { Obj, LoginRegisterItem } from "../types";
import { useRouter } from "next/navigation";
import LoadingButton from "../LoadingButton";

const FormSection = ({ items }: { items: LoginRegisterItem }) => {
  const router = useRouter();


  const { arr, field, formType, endPoint, buttonName } = items;
  let initUser = {}
  let initUserFillError = {}
  arr.forEach((item) => {
    (initUser as any)[item] = '';
    (initUserFillError as any)[item] = false;
  })
  const [user, setUser] = useState(initUser);
  const [userFillError, setUserFillError] = useState(initUserFillError);
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
    setProcess(true);
    if (formType === 'register') {
      const response = await fetch(endPoint, {
        method: 'POST',
        body: JSON.stringify(user),
      });
      console.log(response);
      setProcess(false);
      if (response?.ok === true) {
        router.push('/login');
        router.refresh();
      }
      
    } else if (formType === 'login') {
      const response = await signIn('credentials', {
        username: (user as any).username,
        password: (user as any).password,
        redirect: false,
      });
      console.log(response);
      setProcess(false);
      if (response?.ok === true) {
        router.push('/profile');
        router.refresh();
      }
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
      {field.map((object, index) => (
        <InputItem key={index} object={object} fillError={(userFillError as any)[object.name]} handleChange={handleChange} />
      )
      )}
      <LoadingButton type="submit" text={buttonName} isLoading={process}/>
    </form>
  )
}

export default FormSection;

const InputItem = ({ object, fillError, handleChange }: { object: Obj, fillError: boolean, handleChange: Function }) => {
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
    <div>
      {object.name === "password" ? (
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
      ) : (
        <InputBox name={object.name} type={object.type} placeholder={object.placeholder} fillError={fillError} onChange={handleChange} />
      )}
      {fillError && (
        <div className="text-sm font-medium text-red-600 pt-1">Required field</div>
      )}
    </div>
  )
}