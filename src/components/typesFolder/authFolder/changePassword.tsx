export type ChangePassword_InputObj = {
  name: 'password' | 'confirmPassword',
  type: string,
  placeholder: string,
}
export type ChangePassword_UserObj = {
  password: string,
  confirmPassword: string,
}
export type ChangePassword_IsErrorObj = {
  password: boolean,
  confirmPassword: boolean,
}
export type ChangePassword_ErrorMessageObj = ChangePassword_UserObj
export type ChangePassword_FieldObj = {
  password: ChangePassword_InputObj,
  confirmPassword: ChangePassword_InputObj,
}
export type ChangePassword_ObjectKey = 'password' | 'confirmPassword'

export type ChangePassword_Items = {
  objectKey: Array<ChangePassword_ObjectKey>
  initUser: ChangePassword_UserObj,
  initIsError: ChangePassword_IsErrorObj,
  initErrorMessage: ChangePassword_ErrorMessageObj,
  field: ChangePassword_FieldObj,
  formType: string,
  endPoint: null,
  buttonName: string,
  callback: null,
}
