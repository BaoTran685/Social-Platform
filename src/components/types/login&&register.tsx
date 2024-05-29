export type InputObj = {
  name: 'username' | 'password' |'name',
  type: string,
  placeholder: string,
}
export type UserObj = {
  username: string,
  name?: string,
  password: string,
}
export type IsErrorObj = {
  username: boolean,
  name?: boolean,
  password: boolean,
}
export type ErrorMessageObj = UserObj
export type FieldObj = {
  username: InputObj,
  name?: InputObj,
  password: InputObj,
}
export type ObjectKey = 'username' | 'password' | 'name'

export type LoginRegisterItem = {
  objectKey: Array<ObjectKey>,
  initUser: UserObj,
  initIsError: IsErrorObj,
  initErrorMessage: ErrorMessageObj,
  field: FieldObj,
  formType: string,
  endPoint: string,
  buttonName: string,
  callback: string,
}