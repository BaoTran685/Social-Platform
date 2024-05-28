export type InputObj = {
  name: 'email' | 'password' |'name',
  type: string,
  placeholder: string,
}
export type UserObj = {
  email: string,
  name?: string,
  password: string,
}
export type FillErrorObj = {
  email: boolean,
  name?: boolean,
  password: boolean,
}
export type ObjectKey = 'email' | 'password' | 'name'


export type LoginRegisterItem = {
  objectKey: Array<ObjectKey>,
  initUser: UserObj,
  initFillError: FillErrorObj,
  field: Array<InputObj>,
  formType: string,
  endPoint: string,
  buttonName: string,
  callback: string,
}