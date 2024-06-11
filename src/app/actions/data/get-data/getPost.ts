import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'

const getPost = async () => {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  if (!id) {
    return { message: 'fail', content: {}, ok: false }
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id
      },
      include: {
        posts: true
      }
    })
    if (!user) {
      return { message: 'user not found', content: {}, ok: false }
    }
    const { posts } = user
    return {message: 'success', content: {posts}, ok: true}
  } catch (e) {
    console.log('Error in getPost', e)
  }
  return { message: 'fail', content: {}, ok: false }
}

export default getPost
