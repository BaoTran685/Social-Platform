export type Login_InputObj = {
  name: 'username' | 'password',
  type: string,
  placeholder: string,
}
export type Login_UserObj = {
  username: string,
  password: string,
}
export type Login_ErrorMessageObj = Login_UserObj
export type Login_FieldObj = {
  username: Login_InputObj,
  password: Login_InputObj,
}
export type Login_ObjectKey = 'username' | 'password' 

export type Login_Items = {
  objectKey: Array<Login_ObjectKey>,
  initUser: Login_UserObj,
  initErrorMessage: Login_ErrorMessageObj,
  field: Login_FieldObj,
  formType: string,
  endPoint: null,
  buttonName: string,
  callback: string,
}