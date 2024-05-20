
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
}
export type SideNavItem = {
  title: string,
  path: string,
  icon: JSX.Element,
}