import { ChangePassword_ErrorMessageObj, ChangePassword_InputObj, ChangePassword_IsErrorObj, ChangePassword_Items, ChangePassword_ObjectKey, ChangePassword_UserObj } from "./changePassword";
import { ForgotPassword_ErrorMessageObj, ForgotPassword_InputObj, ForgotPassword_IsErrorObj, ForgotPassword_Items, ForgotPassword_ObjectKey, ForgotPassword_UserObj } from "./forgotPassword";
import { Login_ErrorMessageObj, Login_InputObj, Login_IsErrorObj, Login_Items, Login_ObjectKey, Login_UserObj } from "./login";
import { LoginWithEmail_ErrorMessageObj, LoginWithEmail_InputObj, LoginWithEmail_IsErrorObj, LoginWithEmail_Items, LoginWithEmail_ObjectKey, LoginWithEmail_UserObj } from "./loginWithEmail";
import { Register_ErrorMessageObj, Register_InputObj, Register_IsErrorObj, Register_Items, Register_ObjectKey, Register_UserObj } from "./register";

export type InputObj = Login_InputObj | Register_InputObj | ForgotPassword_InputObj | ChangePassword_InputObj | LoginWithEmail_InputObj;
export type UserObj = Login_UserObj | Register_UserObj | ForgotPassword_UserObj | ChangePassword_UserObj | LoginWithEmail_UserObj;
export type IsErrorObj = Login_IsErrorObj | Register_IsErrorObj | ForgotPassword_IsErrorObj | ChangePassword_IsErrorObj | LoginWithEmail_IsErrorObj;
export type ErrorMessageObj = Login_ErrorMessageObj | Register_ErrorMessageObj | ForgotPassword_ErrorMessageObj | ChangePassword_ErrorMessageObj | LoginWithEmail_ErrorMessageObj;
export type ObjectKey = Login_ObjectKey | Register_ObjectKey | ForgotPassword_ObjectKey | ChangePassword_ObjectKey | LoginWithEmail_ObjectKey;
export type Items = Login_Items | Register_Items | ForgotPassword_Items | ChangePassword_Items | LoginWithEmail_Items;

export type LinkObj = {
  name: string,
  path: string,
}