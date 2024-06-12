export type UserObj = {
  title: string,
  date: string,
  content: string,
}
export type InputObj = {
  label: string,
  name: string,
  type: string,
  placeholder: string,
  isInput: boolean,
}
export type FieldObj = {
  title: InputObj,
  date: InputObj,
  content: InputObj,
}
export type ErrorMessageObj = UserObj
export type ObjectKey = 'title' | 'date' | 'content'

export type EditPostItems = {
  objectKey: Array<ObjectKey>
  initNewInfo: UserObj,
  initErrorMessage: ErrorMessageObj,
  field: FieldObj,
  buttonName: string,
  formType: string,
}

export type EditPost_ResponseFromServer = {
  errorMessage: Object;
  message: string,
  ok: boolean,
}