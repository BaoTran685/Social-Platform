'use server'
import prisma from '@/lib/prisma'

import { sendEmail } from '../emails/send-email'
import { ResetPasswordEmailTemplate } from '@/components/email-templates/resetPasswordEmailTemplate'
import crypto from 'crypto'
import * as React from 'react'
import { Auth_ResponseFromServer } from '@/components/Types/Auth/auth'

interface resetPasswordProps {
  email: string
}
export const resetPassword = async ({
  email
}: resetPasswordProps): Promise<Auth_ResponseFromServer> => {
  try {
    console.log('Resetting password for ' + email)
    // find the user, and when register email we always make sure that email is unqiue
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        emailVerified: true
      }
    })
    // if no user exist, return
    if (!user) {
      return {
        errorMessage: { email: 'User Not Found' },
        message: '',
        ok: false
      }
    }
    const resetPasswordToken = crypto.randomBytes(32).toString('base64url')
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
    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        resetPasswordToken: resetPasswordToken,
        resetPasswordTokenExpiry: resetPasswordTokenExpiry
      }
    })
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
      return { errorMessage: {}, message: 'Successfully Send Email', ok: true }
    }
  } catch (e) {
    console.log('Error in reset-password', e)
  }
  return { errorMessage: {}, message: 'fail', ok: false }
}
