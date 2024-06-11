export type UserObj = {
  name: string,
  email: string,
  description: string,
}
export type InputObj = {
  label: string,
  name: string,
  type: string,
  placeholder: string,
  isInput: boolean,
}
export type FieldObj = {
  name: InputObj,
  email: InputObj,
  description: InputObj,
}
export type ErrorMessageObj = UserObj
export type ObjectKey = 'name' | 'email' | 'description'

export type ProfileUpdateItems = {
  objectKey: Array<ObjectKey>
  initNewInfo: UserObj,
  initErrorMessage: ErrorMessageObj,
  field: FieldObj,
  endPoint: string,
}

export type ProfileUpdate_ResponseFromServer = {
  errorMessage: Object;
  message: string,
  ok: boolean,
}

export type ProfileUpdate_DataFromServer = {
  message: string,
  content: {
    username: string,
    name: string,
    email: string,
    description: string,
  },
  ok: boolean,
}