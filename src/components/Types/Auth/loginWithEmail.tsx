export type LoginWithEmail_InputObj = {
  name: 'email' | 'password',
  type: string,
  placeholder: string,
}
export type LoginWithEmail_UserObj = {
  email: string,
  password: string,
}
export type LoginWithEmail_IsErrorObj = {
  email: boolean,
  password: boolean,
}
export type LoginWithEmail_ErrorMessageObj = LoginWithEmail_UserObj
export type LoginWithEmail_FieldObj = {
  email: LoginWithEmail_InputObj,
  password: LoginWithEmail_InputObj,
}
export type LoginWithEmail_ObjectKey = 'email' | 'password' 

export type LoginWithEmail_Items = {
  objectKey: Array<LoginWithEmail_ObjectKey>,
  initUser: LoginWithEmail_UserObj,
  initIsError: LoginWithEmail_IsErrorObj,
  initErrorMessage: LoginWithEmail_ErrorMessageObj,
  field: LoginWithEmail_FieldObj,
  formType: string,
  endPoint: null,
  buttonName: string,
  callback: string,
}

