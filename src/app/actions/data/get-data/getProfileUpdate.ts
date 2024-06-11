'use server'
import { getServerSession } from 'next-auth'
import { PROFILE_UPDATE_ITEMS } from '@/components/Constants/Profile/Update/update'
import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
import { ProfileUpdate_DataFromServer } from '@/components/Types/Profile/Update/update'

export const getProfileUpdate = async (): Promise<ProfileUpdate_DataFromServer> => {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  try {
    if (id) {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
        include: {
          info: true
        }
      })
      if (user && user.info) {
        const info = user.info;
        const returnInfo = {
          username: user.username,
          name: info.name,
          email: info.email,
          description: info.description,
        }
        return { message: 'success', content: returnInfo, ok: true }
      }
    }
  } catch (e) {
    console.log('Error in getUpdateProfile', e)
  }
  return {
    message: 'fail',
    content: {...PROFILE_UPDATE_ITEMS.initNewInfo, username: ''},
    ok: false
  }
}
