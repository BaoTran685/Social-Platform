'use server'
import { getServerSession } from 'next-auth'
import { PROFILE_UPDATE_ITEMS } from '@/components/Constants/Profile/Update/update'
import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
import { ProfileUpdate_DataFromServer } from '@/components/Types/Profile/Update/update'
import { Prisma } from '@prisma/client'
import { getUserSelectFields } from '@/lib/Data/lib'

export const getProfileUpdate =
  async (): Promise<ProfileUpdate_DataFromServer> => {
    const session = await getServerSession(authOptions)
    const id = session?.user?.id
    try {
      if (id) {
        const userFieldsToExclude: (keyof Prisma.UserSelect)[] = [
          'hashPassword',
          'number',
          'posts',
          'resetPasswordToken',
          'resetPasswordTokenExpiry',
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
      console.log('Error in getUpdateProfile', e)
    }
    return { message: 'fail', content: { user: null }, ok: false }
  }
