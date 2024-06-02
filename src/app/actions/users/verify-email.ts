'use server'
import prisma from '@/lib/prisma'

interface verifyEmailProps {
  verifyEmailToken: string
}
export const verifyEmail = async ({ verifyEmailToken }: verifyEmailProps) => {
  try {
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
        verifyEmailToken: null,
        info: {
          update: {
            emailVerified: true
          }
        }
      }
    })
    return { message: 'email verified successfully', ok: true }
  } catch (e) {
    console.log('Error in verify-email', e)
  }
  return { message: 'fail', ok: false }
}
