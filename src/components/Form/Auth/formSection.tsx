'use client'

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "../../loadingButton";
import { InputItem, InputItemPassword } from "../inputItem";
import { ErrorMessageObj, Items, UserObj } from "../../Types/Auth/auth";
import { processSubmit } from "./HandleSubmit/process-submit";
import { checkInput } from "./HandleSubmit/check-input";
import { cn } from "@/lib/tailwind-merge";


interface FormSectionProps {
  items: Items,
  resetPasswordToken?: string,
};

const FormSection = ({ items, resetPasswordToken }: FormSectionProps) => {
  const { objectKey, initUser, initErrorMessage, field, formType, endPoint, buttonName, callback } = items;

  const router = useRouter();
  const [user, setUser] = useState<UserObj>(initUser);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageObj>(initErrorMessage);

  const [processMessage, setProcessMessage] = useState<string>('');
  const [isProcessSuccess, setIsProcessSuccess] = useState<boolean>(false);

  const [process, setProcess] = useState(false);

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    setUser({
      ...user,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    setErrorMessage({
      ...errorMessage,
      [event.currentTarget.name]: '',
    });
    setProcessMessage('');
    setIsProcessSuccess(false);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcess(true);
    // check for empty input
    let ok:boolean = checkInput({ user, objectKey, formType, setErrorMessage, setProcess,  });
    console.log('ok', ok);
    if (!ok) {
      setProcess(false);
      return;
    }
    let responseOk:boolean = await processSubmit({ user, resetPasswordToken, formType, endPoint, setErrorMessage, setProcessMessage, setIsProcessSuccess, });
    setProcess(false);
    if (responseOk && callback) {
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
              <InputItemPassword object={(field as any)[item]} value={(user as any)[item]} isError={Boolean((errorMessage as any)[item])} handleChange={handleChange} />
            ) : (
              <InputItem object={(field as any)[item]} value={(user as any)[item]} isError={Boolean((errorMessage as any)[item])} handleChange={handleChange} />
            )}
            {Boolean((errorMessage as any)[item]) && (
              <div className="text-sm font-medium text-red-600 pt-1">{(errorMessage as any)[item]}</div>
            )}
          </div>
        )
      }
      )}
      <LoadingButton type="submit" text={buttonName} isLoading={process} isSuccess={isProcessSuccess} />
      {Boolean(processMessage) && (
        <div className={cn('text-sm font-medium', {
          'text-[#21A179]': isProcessSuccess,
          'text-red-600': !isProcessSuccess,
        })}>{processMessage}</div>
      )}
    </form>
  )
}

export default FormSection;



