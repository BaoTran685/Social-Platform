import { ChangePassword_ErrorMessageObj, ChangePassword_InputObj, ChangePassword_Items, ChangePassword_ObjectKey, ChangePassword_UserObj } from "./changePassword";
import { ForgotPassword_ErrorMessageObj, ForgotPassword_InputObj, ForgotPassword_Items, ForgotPassword_ObjectKey, ForgotPassword_UserObj } from "./forgotPassword";
import { Login_ErrorMessageObj, Login_InputObj, Login_Items, Login_ObjectKey, Login_UserObj } from "./login";
import { Register_ErrorMessageObj, Register_InputObj, Register_Items, Register_ObjectKey, Register_UserObj } from "./register";

export type InputObj = Login_InputObj | Register_InputObj | ForgotPassword_InputObj | ChangePassword_InputObj;
export type UserObj = Login_UserObj | Register_UserObj | ForgotPassword_UserObj | ChangePassword_UserObj;
export type ErrorMessageObj = Login_ErrorMessageObj | Register_ErrorMessageObj | ForgotPassword_ErrorMessageObj | ChangePassword_ErrorMessageObj;
export type ObjectKey = Login_ObjectKey | Register_ObjectKey | ForgotPassword_ObjectKey | ChangePassword_ObjectKey;
export type Items = Login_Items | Register_Items | ForgotPassword_Items | ChangePassword_Items;

export type LinkObj = {
  name: string,
  path: string,
}

export type Auth_ResponseFromServer = {
  message: string,
  errorMessage: Object,
  ok: boolean,
}