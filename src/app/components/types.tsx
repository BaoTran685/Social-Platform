
export type Obj = {
  name: string,
  type: string,
  placeholder: string,
}
export type LoginRegisterItem = {
  arr: Array<string>,
  field: Array<Obj>,
  formType: string,
  endPoint: string,
  buttonName: string,
}
export type SideNavItem = {
  title: string,
  path: string,
  icon: JSX.Element,
}

export type DataContent = {
  userid: string,
  name: string,
  number_post: string,
  number_following: string,
  number_follower: string,
  description: string,
}