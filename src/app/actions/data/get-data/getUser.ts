import prisma from '@/lib/prisma'

export const getAllUsers = async () => {
  try {
    const users = await prisma.info.findMany()
    return { message: 'success', content: { users }, ok: true }
  } catch (e) {
    console.log('Error in getUser', e)
  }
  return { message: 'fail', content: { users: [] }, ok: false }
}
