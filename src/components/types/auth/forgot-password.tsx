export type ForgotPassword_InputObj = {
  name: 'email',
  type: string,
  placeholder: string,
}
export type ForgotPassword_UserObj = {
  email: string,
}
export type ForgotPassword_IsErrorObj = {
  email: boolean,
}
export type ForgotPassword_ErrorMessageObj = ForgotPassword_UserObj
export type ForgotPassword_FieldObj = {
  email: ForgotPassword_InputObj,
}
export type ForgotPassword_ObjectKey = 'email'

export type ForgotPassword_Items = {
  objectKey: Array<ForgotPassword_ObjectKey>
  initUser: ForgotPassword_UserObj,
  initIsError: ForgotPassword_IsErrorObj,
  initErrorMessage: ForgotPassword_ErrorMessageObj,
  field: ForgotPassword_FieldObj,
  formType: string,
  endPoint: null,
  buttonName: string,
  callback: null,
}