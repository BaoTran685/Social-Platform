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
    const users = await prisma.user.findMany({
      where: {
        resetPasswordToken: resetPasswordToken
      }
    })
    if (!users) {
      return { errorMessage: {}, message: 'User Not Found', ok: false }
    }
    if (users.length >= 2) {
      return { errorMessage: {}, message: 'token fail', ok: false }
    }
    const user = users[0]
    const resetPasswordTokenExpiry = user.resetPasswordTokenExpiry
    const today = new Date()

    if (!resetPasswordTokenExpiry || today > resetPasswordTokenExpiry) {
      return { errorMessage: {}, message: 'token expired', ok: false }
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
