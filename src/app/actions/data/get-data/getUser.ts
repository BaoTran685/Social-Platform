import { Search_DataFromServer, Search_UserFromServer, Search_ContentObj

 } from '@/components/Types/Search/search'
import { getUserSelectFields} from '@/lib/Data/lib'
import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'

export const getUsername = async () => {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  try {
    if (id) {
      const user = await prisma.user.findUnique({
        where: {
          id: id
        }
      })
      if (user) {
        return {
          message: 'success',
          content: { username: user.username },
          ok: true
        }
      }
    }
  } catch (e) {
    console.log('Error in getUsername', e)
  }
  return { message: 'fail', content: { username: '' }, ok: false }
}

export const getUsers = async ({
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

export const getUser = async ({
  userId
}: {
  userId: string
}): Promise<Search_UserFromServer> => {
    const userFieldsToExclude: (keyof Prisma.UserSelect)[] = [
      'hashPassword',
      'resetPasswordToken',
      'resetPasswordTokenExpiry',
      'emailVerified',
      'verifyEmailToken'
    ];


    const userSelectFields: Prisma.UserSelect = getUserSelectFields({
      userFieldsToExclude
    });

      try {
        const users = await prisma.user.findUnique({
          where: {
            id: userId
          },
          select: userSelectFields
        })
        return { message: 'success', content: {users }, ok: true }
      } catch (e) {
        console.log('Error in getUser', e)
      }
      return { message: 'fail', content: { users : null }, ok: false }
    }
