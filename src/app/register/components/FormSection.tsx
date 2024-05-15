'use client'

import EyeClose from "@/app/components/EyeClose";
import EyeOpen from "@/app/components/EyeOpen";
import InputBox from "@/app/components/InputBox";
import { FormEvent, useEffect, useState } from "react";

const FormSection = () => {
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

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [usernameFillError, setUsernameFillError] = useState(false);
  const [nameFillError, setNameFillError] = useState(false);
  const [passwordFillError, setPasswordFillError] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let error = 0;
    if (username === '') {
      setUsernameFillError(true);
      error = 1;
    }
    if (name === '') {
      setNameFillError(true);
      error = 1;
    }
    if (password === '') {
      setPasswordFillError(true);
      error = 1;
    }
    if (error === 1) {
      return;
    }
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        name: name,
        password: password,
      }),
    })
    console.log(response);
  }

  useEffect(() => {
    if (usernameFillError === true && username !== '') {
      setUsernameFillError(false);
    }
    if (nameFillError === true && name !== '') {
      setNameFillError(false);
    }
    if (passwordFillError === true && password !== '') {
      setPasswordFillError(false);
    }
  })
  return (
    <form className="flex flex-col align-center justify-center mt-6" onSubmit={(e) => handleSubmit(e)}>
      <InputBox name="username" type="text" placeholder="Username" fillError={usernameFillError} value={username} onChange={setUsername} />
      {usernameFillError && (
        <div className="text-sm font-medium text-red-600 pt-1">Required field</div>
      )}
      <InputBox name="name" type="text" placeholder="Name" fillError={nameFillError} value={name} onChange={setName} />
      {nameFillError && (
        <div className="text-sm font-medium text-red-600 pt-1">Required field</div>
      )}
      <div className="relative">
        <InputBox name="password" type={passwordType} placeholder="Password" fillError={passwordFillError} value={password} onChange={setPassword} />
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
      {passwordFillError && (
        <div className="text-sm font-medium text-red-600 pt-1">Required field</div>
      )}
      <button
        type='submit'
        className='text-white w-full rounded-lg bg-[#21A179] shadow-inner transition-transform ease-in duration-300 hover:scale-105 mt-6'
      >
        <span className='block rounded-full px-6 py-3'>Sign In</span>
      </button>
    </form>
  )
}

export default FormSection;