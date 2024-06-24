import { Search_DataFromServer } from '@/components/Types/Search/search'
import { getUserSelectFields } from '@/lib/Data/lib'
import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export const getAllUsers = async () => {
  try {
    const users = await prisma.info.findMany()
    return { message: 'success', content: { users }, ok: true }
  } catch (e) {
    console.log('Error in getUser', e)
  }
  return { message: 'fail', content: { users: [] }, ok: false }
}

export const getUser = async ({
  query
}: {
  query: string
}): Promise<Search_DataFromServer> => {
  const userFieldsToExclude: (keyof Prisma.UserSelect)[] = [
    'hashPassword',
    'posts',
    'resetPasswordToken',
    'resetPasswordTokenExpiry',
    'emailVerified',
    'verifyEmailToken'
  ]
  const userSelectFields: Prisma.UserSelect = getUserSelectFields({
    userFieldsToExclude
  })

  try {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            username: {
              contains: query,
              mode: 'insensitive'
            }
          },
          {
            email: {
              contains: query,
              mode: 'insensitive'
            }
          },
          {
            info: {
              name: {
                contains: query,
                mode: 'insensitive'
              }
            }
          }
        ]
      },
      select: userSelectFields
    })
    return { message: 'success', content: { users }, ok: true }
  } catch (e) {
    console.log('Error in getUser', e)
  }
  return { message: 'fail', content: { users: null }, ok: false }
}
