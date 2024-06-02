'use client'

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "../loadingButton";
import { InputItem, InputItemPassword } from "./inputItem";
import { Items } from "../Types/Auth/auth";
import { processSubmit } from "./HandleSubmit/process-submit";
import { checkInput } from "./HandleSubmit/check-input";


interface FormSectionProps {
  items: Items,
  resetPasswordToken?: string,
};

const FormSection = ({ items, resetPasswordToken }: FormSectionProps) => {
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
    let ok = checkInput(user, setIsError, setErrorMessage, setProcess, objectKey, formType);
    console.log('ok', ok);
    if (ok === false) {
      setProcess(false);
      return;
    }
    let response = await processSubmit(formType, endPoint, user, resetPasswordToken, setIsError, setErrorMessage);
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
            {(item === "password" || item === 'confirmPassword') ? (
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



