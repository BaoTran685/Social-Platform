'use server'

import { Auth_ResponseFromServer } from '@/components/Types/Auth/auth'
import prisma from '@/lib/prisma'
import { hash } from 'bcrypt'

interface changePasswordProps {
  resetPasswordToken: string
  password: string
}
export const changePassword = async ({
  resetPasswordToken,
  password
}: changePasswordProps): Promise<Auth_ResponseFromServer> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: resetPasswordToken
      }
    })
    if (!user) {
      return {
        errorMessage: { email: 'User Not Found' },
        message: '',
        ok: false
      }
    }
    const resetPasswordTokenExpiry = user.resetPasswordTokenExpiry
    const today = new Date()

    if (!resetPasswordTokenExpiry || today > resetPasswordTokenExpiry) {
      throw new Error('Token expired')
    }

    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        hashPassword: await hash(password, 10),
        resetPasswordToken: null,
        resetPasswordTokenExpiry: null
      }
    })
    return {
      errorMessage: {},
      message: 'Successfully Update Password',
      ok: true
    }
  } catch (e) {
    console.log('Error in change-password', e)
  }
  return { errorMessage: {}, message: 'fail', ok: false }
}
