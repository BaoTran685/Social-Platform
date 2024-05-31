export type UserObj = {
  name: string,
  email: string,
  description: string,
}
export type FillErrorObj = {
  name: boolean,
  email: boolean,
  description: boolean,
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
  initIsError: FillErrorObj,
  initErrorMessage: ErrorMessageObj,
  field: FieldObj,
  endPoint: string,
}