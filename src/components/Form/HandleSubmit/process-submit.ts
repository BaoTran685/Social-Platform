import { changePassword } from "@/app/actions/users/change-password";
import { resetPassword } from "@/app/actions/users/reset-password";
import { ErrorMessageObj, IsErrorObj, UserObj } from "@/components/Types/Auth/auth";
import { signIn } from "next-auth/react";


export const processSubmit = async (formType: string, endPoint: string | null, user: UserObj, resetPasswordToken: string | undefined, setIsError: Function, setErrorMessage: Function,) => {
  let response;

  console.log("MY END POINT", endPoint);
  if (formType === 'register' && endPoint) {
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
  else if (formType === 'forgotPassword') {
    response = await resetPassword({ email: (user as any).email })
  }
  else if (formType === 'changePassword' && resetPasswordToken) {
    response = await changePassword({ resetPasswordToken: resetPasswordToken, password: (user as any).password });
  }

  console.log(response);
  return response;
}