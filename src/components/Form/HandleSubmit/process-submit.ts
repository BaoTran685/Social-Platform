import { changePassword } from '@/app/actions/users/change-password'
import { resetPassword } from '@/app/actions/users/reset-password'
import {
  ErrorMessageObj,
  IsErrorObj,
  UserObj
} from '@/components/Types/Auth/auth'
import { signIn } from 'next-auth/react'

interface processSubmitProps {
  formType: string
  endPoint: string | null
  user: UserObj
  resetPasswordToken?: string
  setIsError: Function
  setErrorMessage: Function
  setProcessMessage: Function
  setIsProcessSuccess: Function
  setIsProcessMessage: Function
}
export const processSubmit = async ({
  formType,
  endPoint,
  user,
  resetPasswordToken,
  setIsError,
  setErrorMessage,
  setProcessMessage,
  setIsProcessSuccess,
  setIsProcessMessage
}: processSubmitProps) => {

  const setMessage = (
    processMessge: string,
    isProcessSuccess: boolean
  ) => {
    setProcessMessage(processMessge)
    setIsProcessSuccess(isProcessSuccess)
    setIsProcessMessage(true)
  }

  let response = null

  console.log('MY END POINT', endPoint)
  if (formType === 'register' && endPoint) {
    response = await fetch(endPoint, {
      method: 'POST',
      body: JSON.stringify(user)
    })
    if (response?.ok) {
      setMessage('Successfully Register', true);
    } else {
      // used username -> invalid
      setIsError((prev: IsErrorObj) => ({
        ...prev,
        username: true
      }))
      setErrorMessage((prev: ErrorMessageObj) => ({
        ...prev,
        username: 'Used Username'
      }))
    }
  } else if (formType === 'login') {
    response = await signIn('credentials', {
      ...user,
      redirect: false
    })
    if (response?.ok) {
      setMessage('Successfully Login', true);
    } else {
      // invalid credentials
      setIsError((prev: IsErrorObj) => ({
        ...prev,
        username: true,
        password: true
      }))
      setMessage('Invalid Username or Password', false)
    }
  } else if (formType === 'forgotPassword') {
    response = await resetPassword({ email: (user as any).email })
    if (response) {
      setMessage(response.message, response.ok);
    }
  } else if (formType === 'changePassword' && resetPasswordToken) {
    response = await changePassword({
      resetPasswordToken: resetPasswordToken,
      password: (user as any).password
    })
    if (response) {
      setMessage(response.message, response.ok);
    }
  }

  console.log('Response', response)
  return response
}
