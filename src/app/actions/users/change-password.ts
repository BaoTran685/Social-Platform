'use server'

import { connectToDatabase } from '@/helper/server-helper'
import prisma from '@/lib/prisma'
import { hash } from 'bcrypt'

interface changePasswordProps {
  resetPasswordToken: string
  password: string
}
export const changePassword = async ({
  resetPasswordToken,
  password
}: changePasswordProps) => {
  try {
    await connectToDatabase()
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: resetPasswordToken
      }
    })
    if (!user) {
      throw new Error('User not found')
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
    return {message: 'Successfully Update Password', ok: true}
  } catch (e) {
    console.log('Error in change-password', e)
  } finally {
    await prisma.$disconnect()
  }
  return {message: 'fail', ok: false}
}
