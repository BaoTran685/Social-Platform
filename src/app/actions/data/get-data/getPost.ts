import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { Search_ContentObj, Search_UserObj } from '@/components/Types/Search/search'

// getPostArray return all the posts of an user
export const getPostArray = async () => {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  if (!id) {
    return { message: 'fail', content: {}, ok: false }
  }
  try {
    const posts = await prisma.post.findMany({
      where: {
        authorId: id
      }
    })
    return { message: 'success', content: { posts }, ok: true }
  } catch (e) {
    console.log('Error in getPost', e)
  }
  return { message: 'fail', content: {}, ok: false }
}


// getAllPostArray return all the posts in the db
export const getAllPostArray = async () => {
  try {
    const posts = await prisma.post.findMany()
    return { message: 'success', content: { posts }, ok: true }
  } catch (e) {
    console.log('Error in getPost', e)
  }
  return { message: 'fail', content: { posts: [] }, ok: false }
}


// getPost return the particular post
export const getPost = async ({ postId }: {postId: string}) => {
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

export const getUserPost = async ({ user }: {user: Search_UserObj}) => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        authorId: user.id
      }
    })
    return { message: 'success', content: { posts }, ok: true }
  } catch (e) {
    console.log('Error in getPost', e)
  }
  return { message: 'fail', content: {}, ok: false }
}