import { ErrorMessageObj, IsErrorObj, ObjectKey, UserObj } from "@/components/Types/Auth/auth";
import { validateEmail } from "@/lib/validateEmail";


const setError = (setIsError: Function, setErrorMessage: Function, item: string, message: string) => {
  setIsError((prev: IsErrorObj) => ({
    ...prev,
    [item]: true,
  }));
  setErrorMessage((prev: ErrorMessageObj) => ({
    ...prev,
    [item]: message,
  }));
}

export const checkInput = (user: UserObj, setIsError: Function, setErrorMessage: Function, setProcess: Function, objectKey: Array<ObjectKey>, formType: string,) => {
  let error = false;
  // check for empty input
  objectKey.forEach((item) => {
    if ((user as any)[item] === '') {
      setError(setIsError, setErrorMessage, item, 'Required Field')
      error = true;
      setProcess(false);
    }
  });
  if (formType === 'changePassword') {
    if ((user as any).password !== (user as any).confirmPassword) {
      // unmatched password
      setError(setIsError, setErrorMessage, 'password', 'Unmatched Password')
      setError(setIsError, setErrorMessage, 'confirmPassword', 'Unmatched Password')
      error = true;
    }
  }
  if (formType === 'register') {
    if (validateEmail((user as any).username)) {
      // user is using an username similar to an email
      setError(setIsError, setErrorMessage, 'username', 'Invalid Username')
      error = true;
    }
  }
  return error === false;
}