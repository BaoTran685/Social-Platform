import { Post_Option } from "../CreatePost/createPost"

export type ProfileUpdate_UserObj = {
  name: string,
  email: string,
  description: string,
}
export type ProfileUpdate_InputObj = {
  label: string,
  options?: Post_Option[],
  name: string,
  type: string,
  placeholder: string,
  typeInput: 'input' | 'textarea' | 'select',
}
export type ProfileUpdate_FieldObj = {
  name: ProfileUpdate_InputObj,
  email: ProfileUpdate_InputObj,
  description: ProfileUpdate_InputObj,
}
export type ProfileUpdate_ErrorMessageObj = ProfileUpdate_UserObj
export type ProfileUpdate_ObjectKey = 'name' | 'email' | 'description'

export type ProfileUpdateItems = {
  objectKey: Array<ProfileUpdate_ObjectKey>
  initNewInfo: ProfileUpdate_UserObj,
  initErrorMessage: ProfileUpdate_ErrorMessageObj,
  field: ProfileUpdate_FieldObj,
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