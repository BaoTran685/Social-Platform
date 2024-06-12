import {
  ErrorMessageObj,
  ObjectKey,
  UserObj
} from '@/components/Types/Auth/auth'
import { validateEmail } from '@/lib/lib'

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
      // user is using an username similar to an email
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
