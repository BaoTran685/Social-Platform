'use server'

import prisma from '@/lib/prisma' // Import Prisma client
import { CreatePost_ResponseFromServer } from '@/components/Types/Profile/CreatePost/createPost' // Ensure this import path is correct
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { revalidatePath } from 'next/cache'

interface createPostProps {
  title: string
  content: string
  date: string
}

//createPost function
export const createPost = async ({
  title,
  content,
  date
}: createPostProps): Promise<CreatePost_ResponseFromServer> => {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  const username = session?.user?.username
  if (!id || !username) {
    console.log('no user', id, username, session)
    return { errorMessage: {}, message: 'fail', ok: false }
  }
  try {
    // Create a new post
    await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorId: id,
        authorUsername: username,
        createdAt: new Date(date)
      }
    })
    // Success response if the post is created
    return { errorMessage: {}, message: 'Successfully Created', ok: true }
  } catch (e) {
    // Log any errors
    console.log('Error in createPost', e)
  } finally {
    revalidatePath('/profile')
  }
  // Failure response if an error occurs
  return { errorMessage: {}, message: 'fail', ok: false }
}
