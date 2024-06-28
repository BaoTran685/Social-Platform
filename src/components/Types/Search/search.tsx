import { Info, Number, Post } from "@prisma/client"


export type Search_ContentObj = {
  id: string,
  username: string,
  info: Info | null,
  number: Number | null,
  email: string,
}
export type Search_DataFromServer = {
  message: string,
  content: { users: Array<Search_ContentObj> | null },
  ok: boolean,
}

export type Search_UserObj = {
  id: string,
  username: string,
  info: Info | null,
  number: Number | null,
}

export type Search_UserFromServer = {
  message: string,
  content: { users: Search_UserObj | null },
  ok: boolean,
}