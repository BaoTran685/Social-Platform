import { changePassword } from '@/app/actions/users/change-password'
import { resetPassword } from '@/app/actions/users/reset-password'
import {
  ErrorMessageObj,
  Auth_ResponseFromServer,
  UserObj
} from '@/components/Types/Auth/auth'
import { signIn } from 'next-auth/react'

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
