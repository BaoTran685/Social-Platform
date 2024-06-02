'use server'
import { connectToDatabase } from '@/helper/server-helper'
import prisma from '@/lib/prisma'

import { sendEmail } from '../emails/send-email'
import { ResetPasswordEmailTemplate } from '@/components/email-templates/resetPasswordEmailTemplate'
import * as React from 'react'
import { generateToken } from '../token/generateToken'

interface resetPasswordProps {
  email: string
}
export const resetPassword = async ({ email }: resetPasswordProps) => {
  try {
    console.log('Resetting password for ' + email)
    await connectToDatabase()
    // find the user, and when register email we always make sure that email is unqiue
    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    })
    // if no user exist, return
    if (!user) {
      throw new Error('User not found')
    }
    const resetPasswordToken = await generateToken({
      tokenName: 'resetPasswordToken'
    })
    // if there is no token, throw error
    if (!resetPasswordToken) {
      throw new Error('resetPasswordToken cannot be generated')
    }
    // asign an expiry date for the token
    const today = new Date()
    const resetPasswordTokenExpiry = new Date(
      today.setDate(today.getDate() + 1)
    ) // 24 hours from this moment
    // update the user with the token and expiry inserted
    const newUser = await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        resetPasswordToken: resetPasswordToken,
        resetPasswordTokenExpiry: resetPasswordTokenExpiry
      }
    })
    console.log(newUser)
    // send the token to the user
    const data = await sendEmail({
      from: 'Bot <admin@baotran.ca>',
      to: [email],
      subject: 'Reset Password',
      react: ResetPasswordEmailTemplate({
        email,
        resetPasswordToken
      }) as React.ReactElement
    })

    if (data?.data) {
      return { message: 'email sent successfully', ok: true }
    }
  } catch (e) {
    console.log('Error in reset-password', e)
  }
  return { message: 'fail', ok: false }
}
