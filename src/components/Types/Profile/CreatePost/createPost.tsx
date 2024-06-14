
export type CreatePost_UserObj = {
  title: string,
  privacy: string,
  content: string,
}
export type Post_Option = {
  value: string,
  label: string,
  color: string,
}
export type CreatePost_InputObj = {
  label: string,
  options?: Post_Option[],
  name: string,
  type: string,
  placeholder: string,
  typeInput: 'input' | 'textarea' | 'select',
}
export type CreatePost_FieldObj = {
  title: CreatePost_InputObj,
  privacy: CreatePost_InputObj,
  content: CreatePost_InputObj,
}
export type CreatePost_ErrorMessageObj = CreatePost_UserObj
export type CreatePost_ObjectKey = 'title' | 'privacy' | 'content'

export type CreatePostItems = {
  objectKey: Array<CreatePost_ObjectKey>
  initNewInfo: CreatePost_UserObj,
  initErrorMessage: CreatePost_ErrorMessageObj,
  field: CreatePost_FieldObj,
  buttonName: string,
  formType: string,
}

export type CreatePost_ResponseFromServer = {
  errorMessage: Object;
  message: string,
  ok: boolean,
}