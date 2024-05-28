'use client'

import { EyeClose, EyeOpen } from "@/components/Icon/icons";
import InputBox from "@/components/Form/inputBox";
import { signIn } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";
import { InputObj, LoginRegisterItem } from "@/components/types/login&&register";
import { useRouter } from "next/navigation";
import LoadingButton from "../loadingButton";

const FormSection = ({ items }: { items: LoginRegisterItem }) => {
  const { objectKey, initUser, initFillError, field, formType, endPoint, buttonName, callback } = items;

  const router = useRouter();
  const [user, setUser] = useState(initUser);
  const [fillError, setFillError] = useState(initFillError);
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
    objectKey.forEach((item) => {
      if (fillError[item] === false && user[item] === '') {
        setFillError((prev) => ({
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
    console.log("MY END POINT", endPoint);
    if (formType === 'register') {
      response = await fetch(endPoint, {
        method: 'POST',
        body: JSON.stringify(user),
      });
    }
    response = await signIn('credentials', {
      email: user.email,
      password: user.password,
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
    objectKey.forEach((item) => {
      if (fillError[item] === true && user[item] !== '') {
        setFillError((prev) => ({
          ...prev,
          [item]: false
        }))
      }
    })
  })
  return (
    <form className="flex flex-col align-center justify-center space-y-4 mt-6" onSubmit={(e) => handleSubmit(e)}>
      {objectKey.map((item, index) => {
        return (
          <div key={index}>
            {item === "password" ? (
              <InputItemPassword object={field[item]} value={user[item]} fillError={fillError[item]} handleChange={handleChange} />
            ) : (
              <InputItem object={(field as any)[item]} value={(user as any)[item]} fillError={(fillError as any)[item]} handleChange={handleChange} />
            )}
            {fillError[item] && (
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




const InputItem = ({ object, value, fillError, handleChange }: { object: InputObj, value: string, fillError: boolean, handleChange: Function }) => {
  return (
    <InputBox name={object.name} type={object.type} placeholder={object.placeholder} value={value} fillError={fillError} onChange={handleChange} />
  )
}

const InputItemPassword = ({ object, value, fillError, handleChange }: { object: InputObj, value:string, fillError: boolean, handleChange: Function }) => {
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
      <InputBox name={object.name} type={passwordType} placeholder={object.placeholder} value={value} fillError={fillError} onChange={handleChange} />
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