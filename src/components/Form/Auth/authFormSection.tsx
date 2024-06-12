'use client'

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/loadingButton";
import { InputItem, InputItemPassword } from "./inputItem";
import { Auth_ResponseFromServer, ErrorMessageObj, Items, ObjectKey, UserObj } from "@/components/Types/Auth/auth";
import { cn } from "@/lib/tailwind-merge";
import { validateEmail } from "@/lib/lib";
import { signIn } from "next-auth/react";
import { resetPassword } from "@/app/actions/users/reset-password";
import { changePassword } from "@/app/actions/users/change-password";


interface FormSectionProps {
  items: Items,
  resetPasswordToken?: string,
};

const AuthFormSection = ({ items, resetPasswordToken }: FormSectionProps) => {
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
    let ok: boolean = checkInput({ user, objectKey, formType, setErrorMessage, setProcess, });
    console.log('ok', ok);
    if (!ok) {
      return;
    }
    let responseOk: boolean = await processSubmit({ user, resetPasswordToken, formType, endPoint, setErrorMessage, setProcessMessage, setIsProcessSuccess, });
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

export default AuthFormSection;

interface checkInputProps {
  user: UserObj
  objectKey: Array<ObjectKey>
  formType: string
  setErrorMessage: Function
  setProcess: Function
}

export const checkInput = ({
  user,
  objectKey,
  formType,
  setErrorMessage,
  setProcess
}: checkInputProps) => {
  let error = false
  // check for empty input
  objectKey.forEach(item => {
    if ((user as any)[item] === '') {
      setError(setErrorMessage, item, 'Required Field')
      error = true
    }
  })
  if (formType === 'changePassword') {
    if ((user as any).password !== (user as any).confirmPassword) {
      // unmatched password
      setError(setErrorMessage, 'password', 'Unmatched Password')
      setError(setErrorMessage, 'confirmPassword', 'Unmatched Password')
      error = true
    }
  }
  if (formType === 'register') {
    if (validateEmail((user as any).username)) {
      // user is using an username which has the structure of an email
      setError(setErrorMessage, 'username', 'Invalid Username')
      error = true
    }
  }
  if (error) {
    setProcess(false);
  }
  return error === false
}

const setError = (setErrorMessage: Function, item: string, message: string) => {
  setErrorMessage((prev: ErrorMessageObj) => ({
    ...prev,
    [item]: message
  }))
}

interface processSubmitProps {
  user: UserObj
  resetPasswordToken?: string
  formType: string
  endPoint: string | null
  setErrorMessage: Function
  setProcessMessage: Function
  setIsProcessSuccess: Function
}
export const processSubmit = async ({
  user,
  resetPasswordToken,
  formType,
  endPoint,
  setErrorMessage,
  setProcessMessage,
  setIsProcessSuccess
}: processSubmitProps) => {
  const setMessage = (processMessge: string, isProcessSuccess: boolean) => {
    setProcessMessage(processMessge)
    setIsProcessSuccess(isProcessSuccess)
  }

  let ok = false
  if (formType === 'register' && endPoint) {
    ok = await handleRegister(user, endPoint, setMessage, setErrorMessage)
  } else if (formType === 'login') {
    ok = await handleLogin(user, setMessage, setErrorMessage)
  } else if (formType === 'forgotPassword') {
    ok = await handleForgotPassword(user, setMessage, setErrorMessage)
  } else if (formType === 'changePassword' && resetPasswordToken) {
    ok = await handleChangePassword(user, resetPasswordToken, setMessage, setErrorMessage)
  }
  return ok
}

const handleRegister = async (
  user: UserObj,
  endPoint: string,
  setMessage: Function,
  setErrorMessage: Function
) => {
  const response: Auth_ResponseFromServer = await fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify(user)
  }).then(data => {
    return data.json()
  })
  setErrorMessage((prev: ErrorMessageObj) => ({
    ...prev,
    ...response.errorMessage
  }))
  setMessage(response.message, response.ok)
  return response.ok
}

const handleLogin = async (user: UserObj, setMessage: Function, setErrorMessage: Function) => {
  const response = await signIn('credentials', {
    ...user,
    redirect: false
  })
  if (response?.ok) {
    setMessage('Successfully Login', true)
    return true
  } else {
    // invalid credentials
    setErrorMessage((prev: ErrorMessageObj) => ({
      ...prev,
      username: 'Invalid Username or Password',
      password: 'Invalid Username or Password',
    }))
    return false
  }
}

const handleForgotPassword = async (
  user: UserObj,
  setMessage: Function,
  setErrorMessage: Function
) => {
  const response: Auth_ResponseFromServer = await resetPassword({
    email: (user as any).email
  })
  setErrorMessage((prev: ErrorMessageObj) => ({
    ...prev,
    ...response.errorMessage
  }))
  setMessage(response.message, response.ok)
  return response.ok
}

const handleChangePassword = async (
  user: UserObj,
  resetPasswordToken: string,
  setMessage: Function,
  setErrorMessage: Function
) => {
  const response: Auth_ResponseFromServer = await changePassword({
    resetPasswordToken: resetPasswordToken,
    password: (user as any).password
  })
  setErrorMessage((prev: ErrorMessageObj) => ({
    ...prev,
    ...response.errorMessage
  }))
  setMessage(response.message, response.ok)
  return response.ok
}