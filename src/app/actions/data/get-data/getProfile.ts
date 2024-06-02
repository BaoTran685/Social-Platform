'use server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { PROFILE_ITEMS } from '@/components/Constants/Profile/profile'
import prisma from '@/lib/prisma'
import { ProfileObj } from '@/components/Types/Profile/profile'

export const getProfile = async () => {
  try {
    const session = await getServerSession(authOptions)
    const id = session?.user?.id

    if (id) {
      const user = await prisma.user.findUnique({
        where: {
          id: id
        },
        include: {
          info: true,
          number: true
        }
      })
      const info = user?.info
      const number = user?.number
      if (user && info && number) {
        const profile: ProfileObj = {
          username: user.username,
          ...info,
          ...number
        }
        return {message: 'success', content: profile, ok: true}
      }
    }
  } catch (e) {
    console.log('Error in getProfile', e)
  }
  return {message: 'fail', content: PROFILE_ITEMS.initProfile, ok: false};
}
