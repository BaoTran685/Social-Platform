import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'

export const getPostArray = async () => {
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
    return { message: 'success', content: { posts }, ok: true }
  } catch (e) {
    console.log('Error in getPost', e)
  }
  return { message: 'fail', content: {}, ok: false }
}

export const getAllPostArray = async () => {
  try {
    const posts = await prisma.post.findMany()
    return { message: 'success', content: { posts }, ok: true }
  } catch (e) {
    console.log('Error in getPost', e)
  }
  return { message: 'fail', content: { posts: [] }, ok: false }
}

interface getPostProps {
  postId: string
}
export const getPost = async ({ postId }: getPostProps) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        postId: postId
      }
    })
    if (post) {
      return { message: 'success', content: { post }, ok: true }
    }
  } catch (e) {
    console.log('Error in getPost', e)
  }
  return { message: 'fail', content: {}, ok: false }
}
