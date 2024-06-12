'use server'
import { EditPost_ResponseFromServer } from '@/components/Types/Profile/EditPost/editPost'
import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'

interface editPostProps {
  postId: string
  authorId: string
  title: string
  content: string
  date: string
}
export const editPost = async ({
  postId,
  authorId,
  title,
  content,
  date
}: editPostProps): Promise<EditPost_ResponseFromServer> => {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  if (!id || id !== authorId) {
    return { errorMessage: {}, message: 'fail', ok: false }
  }
  try {
    // edit the specified post
    await prisma.post.update({
      where: {
        postId: postId,
        authorId: authorId
      },
      data: {
        title: title,
        content: content
      }
    })
    return { errorMessage: {}, message: 'Successfully Updated', ok: true }
  } catch (e) {
    console.log('Error in editPost', e)
  }
  return { errorMessage: {}, message: 'fail', ok: false }
}
