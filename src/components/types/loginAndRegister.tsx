export type InputObj = {
  name: string,
  type: string,
  placeholder: string,
}


export type LoginRegisterObj = {
  username: string,
  name?: string,
  password: string,
}
export type LoginRegisterErrorObj = {
  username: boolean,
  name?: boolean,
  password: boolean,
}
export type LoginRegisterItem = {
  arr: Array<string>,
  userInfo: LoginRegisterObj,
  fillError: LoginRegisterErrorObj,
  field: Array<InputObj>,
  formType: string,
  endPoint: string,
  buttonName: string,
  callback: string,
}

