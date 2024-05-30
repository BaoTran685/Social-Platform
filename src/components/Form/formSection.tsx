'use client'

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "../loadingButton";
import { InputItem, InputItemPassword } from "./inputItem";
import { ErrorMessageObj, IsErrorObj, Items, ObjectKey, UserObj } from "../types/auth/auth";
import { resetPassword } from "@/app/actions/users/reset-password";

interface FormSectionProps {
  items: Items,
};

const processSubmit = async (formType: string, endPoint: string, user: UserObj, setIsError: Function, setErrorMessage: Function, ) => {
  let response;

  console.log("MY END POINT", endPoint);
  if (formType === 'register') {
    response = await fetch(endPoint, {
      method: 'POST',
      body: JSON.stringify(user),
    });
    if (response?.ok === false) {
      // used username -> invalid
      setIsError((prev: IsErrorObj) => ({
        ...prev,
        username: true,
      }));
      setErrorMessage((prev: ErrorMessageObj) => ({
        ...prev,
        username: 'Invalid Username',
      }));
    }
  }
  else if (formType === 'login') {
    response = await signIn('credentials', {
      ...user,
      redirect: false,
    });
    if (response?.ok === false) {
      // invalid credentials
      setIsError((prev: IsErrorObj) => ({
        ...prev,
        username: true,
        password: true,
      }));
      setErrorMessage((prev: ErrorMessageObj) => ({
        ...prev,
        username: 'Invalid Username',
        password: 'Invalid Password',
      }));
    }
  } else if (formType === 'forgotPassword') {
    response = await resetPassword((user as any).email)
  }

  console.log(response);
  return response;
}
const FormSection = ({ items }: FormSectionProps) => {
  const { objectKey, initUser, initIsError, initErrorMessage, field, formType, endPoint, buttonName, callback } = items;

  const router = useRouter();
  const [user, setUser] = useState(initUser);
  const [isError, setIsError] = useState(initIsError);
  const [errorMessage, setErrorMessage] = useState(initErrorMessage);

  const [process, setProcess] = useState(false);

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    setUser({
      ...user,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    setIsError({
      ...isError,
      [event.currentTarget.name]: false,
    });
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcess(true);
    // check for empty input
    let ok = checkInput(user, setIsError, setErrorMessage, setProcess, objectKey);
    console.log('ok', ok);
    if (ok === false) {
      setProcess(false);
      return;
    }
    let response = await processSubmit(formType, endPoint, user, setIsError, setErrorMessage);
    setProcess(false);
    if (response?.ok === true && callback) {
      router.push(callback);
      router.refresh();
    }
  }

  return (
    <form className="flex flex-col align-center justify-center space-y-4 mt-6" onSubmit={(e) => handleSubmit(e)}>
      {objectKey.map((item, index) => {
        return (
          <div key={index}>
            {item === "password" ? (
              <InputItemPassword object={(field as any)[item]} value={(user as any)[item]} isError={(isError as any)[item]} handleChange={handleChange} />
            ) : (
              <InputItem object={(field as any)[item]} value={(user as any)[item]} isError={(isError as any)[item]} handleChange={handleChange} />
            )}
            {(isError as any)[item] && (
              <div className="text-sm font-medium text-red-600 pt-1">{(errorMessage as any)[item]}</div>
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

export const checkInput = (user: UserObj, setIsError: Function, setErrorMessage: Function, setProcess: Function, objectKey: Array<ObjectKey>) => {
  let error = false;
  // check for empty input
  objectKey.forEach((item) => {
    if ((user as any)[item] === '') {
      setIsError((prev: IsErrorObj) => ({
        ...prev,
        [item]: true,
      }));
      setErrorMessage((prev: ErrorMessageObj) => ({
        ...prev,
        [item]: 'Required Field',
      }));
      error = true;
      setProcess(false);
    }
  });
  return error === false;
}