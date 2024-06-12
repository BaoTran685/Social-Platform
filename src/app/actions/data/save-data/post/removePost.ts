'use server'
import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'

interface removePostProps {
  postId: string
  authorId: string
}

export const removePost = async ({ postId, authorId }: removePostProps) => {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  if (!id || id !== authorId) {
    return { message: 'fail', ok: false }
  }
  try {
    // remove the specified post
    await prisma.post.delete({
      where: {
        postId: postId,
        authorId: authorId
      }
    })
    return { message: 'Successfully Removed', ok: true }
  } catch (e) {
    console.log('Error in removePost', e)
  }
  return { message: 'fail', ok: false }
}

