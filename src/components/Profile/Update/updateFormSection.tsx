'use client'
import { FormEvent, useState } from "react";
import { ProfileUpdateItems } from "@/components/types/profileUpdate";
import LoadingButton from "@/components/loadingButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ProfileObj } from "@/components/types/profile";
import UpdateInputItem from "./updateInputItem";


const UpdateFormSection = ({ items, profile }: { items: ProfileUpdateItems, profile: ProfileObj }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const { objectKey, initIsError, initErrorMessage, field, endPoint } = items;
  // data from the db
  const { name, email, description } = profile;

  const [newInfo, setNewInfo] = useState({ name, email, description });
  const [isError, setIsError] = useState(initIsError);
  const [errorMessage, setErrorMessage] = useState(initErrorMessage);
  const [process, setProcess] = useState(false);

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    setNewInfo({
      ...newInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    setIsError({
      ...isError,
      [event.currentTarget.name]: false,
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (session === null) {
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
    if (response?.ok === false) {
      console.log('error');
    } else {
      router.push('/profile');
      router.refresh();
    }
  }
  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <UpdateInputItem object={field.name} value={newInfo.name} isError={isError.name} onChange={handleChange} />
          {isError.name && (
            <div className="text-sm font-medium text-red-600 pt-1">{errorMessage.name}</div>
          )}
        </div>
        <div>
          <UpdateInputItem object={field.email} value={newInfo.email} isError={isError.email} onChange={handleChange} />
          {isError.email && (
            <div className="text-sm font-medium text-red-600 pt-1">{errorMessage.email}</div>
          )}
        </div>
      </div>
      <div>
        <UpdateInputItem object={field.description} value={newInfo.description} isError={isError.description} onChange={handleChange} />
        {isError.description && (
          <div className="text-sm font-medium text-red-600 pt-1">{errorMessage.description}</div>
        )}
      </div>
      <LoadingButton type="submit" text="Update" isLoading={process} />
    </form>
  )
}

export default UpdateFormSection;



