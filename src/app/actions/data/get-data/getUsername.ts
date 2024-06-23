import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
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
