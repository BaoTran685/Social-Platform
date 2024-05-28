'use client'
import { FormEvent, useEffect, useState } from "react";
import { InputObj, ProfileUpdateItems } from "@/components/types/profileUpdate";
import LoadingButton from "@/components/loadingButton";
import InputBox from "@/components/Form/inputBox";
import TextAreaBox from "@/components/Form/textAreaBox";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const UpdateFormSection = ({ items }: { items: ProfileUpdateItems }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const { objectKey, initNewInfo, initFillError, field, endPoint } = items;

  const [newInfo, setNewInfo] = useState(initNewInfo);
  const [fillError, setFillError] = useState(initFillError);
  const [process, setProcess] = useState(false);
  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    setNewInfo({
      ...newInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let error = 0;
    objectKey.map((item) => {
      if (fillError[item] === false && newInfo[item] === '') {
        setFillError((prev) => ({
          ...prev,
          [item]: true,
        }));
        error = 1;
      }
    });
    if (error === 1 || session === null) {
      return;
    }
    console.log(newInfo);
    setProcess(true);

    console.log("MY END POINT", endPoint);
    const response = await fetch(endPoint, {
      method: 'POST',
      body: JSON.stringify({
        id: session.user.id,
        ...newInfo,
      }),
    });
    console.log(response);
    setProcess(false);
    if (response?.ok === true) {
      router.push('/profile');
      router.refresh();
    }
  }
  useEffect(() => {
    objectKey.forEach((item) => {
      if (fillError[item] === true && newInfo[item] !== '') {
        setFillError((prev) => ({
          ...prev,
          [item]: false
        }))
      }
    })
  })
  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <div className="grid grid-cols-2 gap-4">
        <UpdateInputItem object={field.userid} value={newInfo.userid} fillError={fillError.userid} onChange={handleChange} />
        <UpdateInputItem object={field.name} value={newInfo.name} fillError={fillError.name} onChange={handleChange} />
      </div>
      <UpdateInputItem object={field.description} value={newInfo.description} fillError={fillError.description} onChange={handleChange} />
      <LoadingButton type="submit" text="Update" isLoading={process} />
    </form>
  )
}

export default UpdateFormSection;


const UpdateInputItem = ({ object, onChange, value, fillError }: { object: InputObj, value: string, fillError: boolean, onChange: Function, }) => {
  const { label, name, type, placeholder, isInput } = object;
  return (
    <div className='mb-6'>
      <label
        htmlFor={name}
        className='text-black block mb-2 text-sm font-medium'
      >
        {label}
      </label>
      {isInput === true ? (
        <InputBox name={name} type={type} placeholder={placeholder} value={value} fillError={fillError} onChange={onChange} />
      ) : (
        <TextAreaBox name={name} type={type} placeholder={placeholder} value={value} fillError={fillError} onChange={onChange} />
      )}

    </div>
  )
}
