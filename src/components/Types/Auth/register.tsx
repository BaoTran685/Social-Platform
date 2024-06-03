export type Register_InputObj = {
  name: 'username' | 'password' | 'name',
  type: string,
  placeholder: string,
}
export type Register_UserObj = {
  username: string,
  name: string,
  password: string,
}
export type Register_ErrorMessageObj = Register_UserObj
export type Register_FieldObj = {
  username: Register_InputObj,
  name: Register_InputObj,
  password: Register_InputObj,
}
export type Register_ObjectKey = 'username' | 'password' | 'name'

export type Register_Items = {
  objectKey: Array<Register_ObjectKey>,
  initUser: Register_UserObj,
  initErrorMessage: Register_ErrorMessageObj,
  field: Register_FieldObj,
  formType: string,
  endPoint: string,
  buttonName: string,
  callback: string,
}
