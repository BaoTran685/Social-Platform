'use server'
import prisma from '@/lib/prisma'

interface verifyEmailProps {
  verifyEmailToken: string
}
export const verifyEmail = async ({ verifyEmailToken }: verifyEmailProps) => {
  try {
    // we always make sure that the verifyEmailToken is unique when we create it
    const user = await prisma.user.findFirst({
      where: {
        verifyEmailToken: verifyEmailToken
      }
    })
    if (!user) {
      throw new Error('verifyEmailToken not invalid')
    }
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
        emailVerified: false,
      },
      data: {
        verifyEmailToken: null,
        email: '',
      }
    })
    return { message: 'email verified successfully', ok: true }
  } catch (e) {
    console.log('Error in verify-email', e)
  }
  return { message: 'fail', ok: false }
}