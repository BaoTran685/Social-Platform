'use client'

import { FormEvent } from "react";

const FormSection = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: formData.get('username'),
        name: formData.get('name'),
        password: formData.get('password'),
      }),
    })
    console.log(response);
  }
  return (
    <form className="flex flex-col align-center justify-center space-y-8" onSubmit={(e) => handleSubmit(e)}>
      <input
        name='username'
        id='username'
        type='text'
        className='text-sm text-black rounded-lg block w-full bg-[white] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#33353F] placeholder-[#9CA2A9] p-2.5 appearance-none'
        required
        placeholder='username'
      />
      <input
        name='name'
        id='name'
        type='text'
        className='text-sm text-black rounded-lg block w-full bg-[white] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#33353F] placeholder-[#9CA2A9] p-2.5 appearance-none'
        required
        placeholder='name'
      />
      <input
        name='password'
        id='password'
        type='password'
        className='text-sm text-black rounded-lg block w-full bg-[white] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#33353F] placeholder-[#9CA2A9] p-2.5 appearance-none'
        required
        placeholder='password'
      />
      <button
        type='submit'
        className='text-white w-full rounded-lg bg-[#ec5e06] shadow-inner transition-transform ease-in duration-300 hover:scale-105'
      >
        <span className='block rounded-full px-6 py-3'>Register</span>
      </button>
    </form>
  )
}

export default FormSection;