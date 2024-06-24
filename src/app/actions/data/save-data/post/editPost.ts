'use server'
import { EditPost_ResponseFromServer } from '@/components/Types/Post/EditPost/editPost'
import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'

interface editPostProps {
  postId: string
  authorId: string
  title: string
  content: string
  privacy: string
}
export const editPost = async ({
  postId,
  authorId,
  title,
  content,
  privacy
}: editPostProps): Promise<EditPost_ResponseFromServer> => {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  // checking that only the author can edit the post
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
        content: content,
        privacy: privacy,
        createdAt: new Date()
      }
    })
    return { errorMessage: {}, message: 'Successfully Updated', ok: true }
  } catch (e) {
    console.log('Error in editPost', e)
  }
  return { errorMessage: {}, message: 'fail', ok: false }
}
