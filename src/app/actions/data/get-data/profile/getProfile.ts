'use server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
import { Profile_DataFromServer } from '@/components/Types/Profile/profile'
import { Prisma } from '@prisma/client'
import { getUserSelectFields } from '@/lib/Data/lib'

export const getProfile = async (): Promise<Profile_DataFromServer> => {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  try {
    if (id) {
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
      const user = await prisma.user.findUnique({
        where: {
          id: id
        },
        select: userSelectFields
      })
      return { message: 'success', content: { user }, ok: true }
    }
  } catch (e) {
    console.log('Error in getProfile', e)
  }
  return { message: 'fail', content: { user: null }, ok: false }
}
