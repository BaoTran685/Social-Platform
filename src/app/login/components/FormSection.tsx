'use client'

import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import InputBox from "./InputBox";

const FormSection = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirect: false,
    });
    console.log(response);
  };

  return (
    <form className="flex flex-col align-center justify-center space-y-8" onSubmit={(e) => handleSubmit(e)}>
      <InputBox name="username" type="text" placeholder="Username" />
      <InputBox name="password" type="password" placeholder="Password" />
      <button
        type='submit'
        className='text-white w-full rounded-lg bg-[#ec5e06] shadow-inner transition-transform ease-in duration-300 hover:scale-105'
      >
        <span className='block rounded-full px-6 py-3'>Sign In</span>
      </button>
    </form>
  )
}

export default FormSection;