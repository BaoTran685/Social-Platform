'use server'
import prisma from '@/lib/prisma'
import { sendEmail } from '../../emails/send-email'
import { VerifyEmailEmailTemplate } from '@/components/email-templates/verifyEmailEmailTemplate'
import { generateToken } from '../../token/generateToken'
import React from 'react'
import { ProfileUpdate_ResponseFromServer } from '@/components/Types/Profile/Update/update'

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
}: updateProfileUpdateProps) : Promise<ProfileUpdate_ResponseFromServer> => {
  try {
    if (id) {
      let user = await prisma.user.findFirst({
        where: {
          email: email
        }
      })
      // if there is an user with such email
      if (user && user.id !== id) {
        return { errorMessage: { email: 'Used Email' }, message: '', ok: false }
      }
      // if no user, we get the token to verify for the email
      let verifyEmailToken = null
      if (!user || !user.emailVerified) {
        verifyEmailToken = await generateToken({
          tokenName: 'verifyEmailToken'
        })
        if (!verifyEmailToken) {
          throw new Error('verifyEmailToken cannot be generated')
        }
      }

      await prisma.user.update({
        where: {
          id: id
        },
        data: {
          email: email,
          emailVerified: verifyEmailToken === null,
          verifyEmailToken: verifyEmailToken,
          info: {
            update: {
              email: email,
              name: name,
              description: description,
              emailVerified: verifyEmailToken === null
            }
          }
        }
      })
      if (verifyEmailToken) {
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
          return {
            errorMessage: {},
            message: 'Successfully Update -- Verify Email Sent',
            ok: true
          }
        }
      }
      return { errorMessage: {}, message: 'Successfully Update', ok: true }
    }
  } catch (e) {
    console.log('Error in updateProfielUpdate', e)
  }
  return { errorMessage: {}, message: 'fail', ok: false }
}
