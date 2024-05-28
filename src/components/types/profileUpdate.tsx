
export type UserObj = {
  userid: string,
  name: string,
  description: string,
}
export type FillErrorObj = {
  userid: boolean,
  name: boolean,
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
  userid: InputObj,
  name: InputObj,
  description: InputObj,
}
export type ObjectKey = 'userid' | 'name' | 'description'

export type ProfileUpdateItems = {
  objectKey: Array<ObjectKey>
  initNewInfo: UserObj,
  initFillError: FillErrorObj,
  field: FieldObj,
  endPoint: string,
}