'use server'
import prisma from '@/lib/prisma'

interface verifyEmailProps {
  verifyEmailToken: string
}
export const verifyEmail = async ({ verifyEmailToken }: verifyEmailProps) => {
  try {
    // we always make sure that the verifyEmailToken is unique when we create it
    const users = await prisma.user.findMany({
      where: {
        verifyEmailToken: verifyEmailToken
      }
    })
    if (!users) {
      throw new Error('verifyEmailToken not invalid')
    }
    if (users.length >= 2) {
      // there is a coincidence in generating the token
      // so we have to make the user generate another token
      return { message: 'token fail', ok: false }
    }
    const user = users[0]
    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        emailVerified: true,
        verifyEmailToken: null
      }
    })
    // now since this email is verified to this person, we have to find all the users who register the same email and did not verify,
    // then remove them from connecting with this email. It is because we want to have an account only registered with a email and vice versa
    await prisma.user.updateMany({
      where: {
        email: user.email,
        emailVerified: false
      },
      data: {
        verifyEmailToken: null,
        email: ''
      }
    })
    return { message: 'email verified successfully', ok: true }
  } catch (e) {
    console.log('Error in verify-email', e)
  }
  return { message: 'fail', ok: false }
}
