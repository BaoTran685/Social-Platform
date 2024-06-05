'use server'
import { getServerSession } from 'next-auth'
import { PROFILE_UPDATE_ITEMS } from '@/components/Constants/Profile/profileUpdate'
import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
import { UserObj } from '@/components/Types/Profile/profileUpdate'

export const getProfileUpdate = async () => {
  const session = await getServerSession(authOptions)
    const id = session?.user?.id
  try {
    if (id) {
      const info = await prisma.info.findUnique({
        where: {
          infoId: id
        }
      })
      if (info) {
        const returnInfo: UserObj = {
          name: info.name,
          email: info.email,
          description: info.description
        }
        return { message: 'success', content: returnInfo, ok: true }
      }
    }
  } catch (e) {
    console.log('Error in getUpdateProfile', e)
  }
  return {
    message: 'fail',
    content: PROFILE_UPDATE_ITEMS.initNewInfo,
    ok: false
  }
}
