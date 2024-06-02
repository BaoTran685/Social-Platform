'use server'
import prisma from '@/lib/prisma'
import { sendEmail } from '../../emails/send-email'
import { VerifyEmailEmailTemplate } from '@/components/email-templates/verifyEmailEmailTemplate'
import { generateToken } from '../../token/generateToken'
import React from 'react'

interface updateProfileUpdateProps {
  email: string
  name: string
  description: string
  id: string
}
export const updateProfileUpdate = async ({
  email,
  name,
  description,
  id
}: updateProfileUpdateProps) => {
  try {
    if (id) {
      let user = await prisma.user.findFirst({
        where: {
          email: email
        }
      })
      if (user && user.id !== id) {
        return { message: 'email already exist', ok: false }
      }
      const verifyEmailToken = await generateToken({
        tokenName: 'verifyEmailToken'
      })
      if (!verifyEmailToken) {
        throw new Error('verifyEmailToken cannot be generated')
      }

      await prisma.user.update({
        where: {
          id: id
        },
        data: {
          email: email,
          emailVerified: false,
          verifyEmailToken: verifyEmailToken,
          info: {
            update: {
              email: email,
              name: name,
              description: description,
              emailVerified: false
            }
          }
        }
      })

      
      const data = await sendEmail({
        from: 'Bot <admin@baotran.ca>',
        to: [email],
        subject: 'Verify Email',
        react: VerifyEmailEmailTemplate({
          email,
          verifyEmailToken
        }) as React.ReactElement
      })
      if (data?.data) {
        return { message: 'update successfully -- verify email sent', ok: true }
      }
    }
  } catch (e) {
    console.log('Error in updateProfielUpdate', e)
  }
  return { message: 'update fail', ok: false }
}
