import { Info, Number } from "@prisma/client"

export type Profile_ContentObj = {
  id: string,
  username: string,
  info: Info | null,
  number: Number | null,
}


export type Profile_DataFromServer = {
  message: string,
  content: { user: Profile_ContentObj | null},
  ok: boolean
}