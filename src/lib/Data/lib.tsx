import { USER_MODEL_ARRAY,POST_MODEL_ARRAY } from "@/components/Constants/Prisma/data";
import { Prisma } from "@prisma/client";



export const getUserSelectFields = ({ userFieldsToExclude }: { userFieldsToExclude: (keyof Prisma.UserSelect)[] }) => {
  const userSelectFields: Prisma.UserSelect = USER_MODEL_ARRAY.reduce(
    (acc, field) => {
      if (!userFieldsToExclude.includes(field)) {
        acc[field] = true
      }
      return acc
    },
    {} as Prisma.UserSelect
  )
  return userSelectFields
}

