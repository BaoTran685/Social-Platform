import { Post_Option } from "../../Post/CreatePost/createPost"

export type EditPost_UserObj = {
  title: string,
  privacy: string,
  content: string,
}
export type EditPost_InputObj = {
  label: string,
  options?: Post_Option[],
  name: string,
  type: string,
  placeholder: string,
  typeInput: 'input' | 'textarea' | 'select',
}
export type EditPost_FieldObj = {
  title: EditPost_InputObj,
  privacy: EditPost_InputObj,
  content: EditPost_InputObj,
}
export type EditPost_ErrorMessageObj = EditPost_UserObj
export type EditPost_ObjectKey = 'title' | 'privacy' | 'content'

export type EditPostItems = {
  objectKey: Array<EditPost_ObjectKey>
  initNewInfo: EditPost_UserObj,
  initErrorMessage: EditPost_ErrorMessageObj,
  field: EditPost_FieldObj,
  buttonName: string,
  formType: string,
}

export type EditPost_ResponseFromServer = {
  errorMessage: Object;
  message: string,
  ok: boolean,
}