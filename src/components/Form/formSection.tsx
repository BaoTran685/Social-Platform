'use client'

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { ErrorMessageObj, IsErrorObj, LoginRegisterItem, ObjectKey, UserObj } from "@/components/types/login&&register";
import { useRouter } from "next/navigation";
import LoadingButton from "../loadingButton";
import { InputItem, InputItemPassword } from "./inputItem";

const FormSection = ({ items }: { items: LoginRegisterItem }) => {
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
    let ok = await checkInput(user, isError, setIsError, setErrorMessage, setProcess, objectKey, formType);
    console.log('ok', ok);
    if (ok === false) {
      setProcess(false);
      return;
    }
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
    }

    console.log(response);
    setProcess(false);
    if (response?.ok === true) {
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
              <InputItemPassword object={field[item]} value={user[item]} isError={isError[item]} handleChange={handleChange} />
            ) : (
              <InputItem object={(field as any)[item]} value={(user as any)[item]} isError={(isError as any)[item]} handleChange={handleChange} />
            )}
            {isError[item] && (
              <div className="text-sm font-medium text-red-600 pt-1">{errorMessage[item]}</div>
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

export const checkInput = async (user: UserObj, isError: IsErrorObj, setIsError: Function, setErrorMessage: Function, setProcess: Function, objectKey: Array<ObjectKey>, formType: string,) => {
  let error = false;
  // check for empty input
  objectKey.forEach((item) => {
    if (user[item] === '') {
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