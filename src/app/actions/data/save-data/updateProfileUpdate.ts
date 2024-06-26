'use server'
import prisma from '@/lib/prisma'
import { sendEmail } from '../../emails/send-email'
import VerifyEmailEmailTemplate from '@/app/emails/verifyEmailEmailTemplate'
import crypto from 'crypto'
import { ProfileUpdate_ResponseFromServer } from '@/components/Types/Profile/Update/update'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { render } from '@react-email/components'

interface updateProfileUpdateProps {
  email: string
  name?: string
  description?: string
}
export const updateProfileUpdate = async ({
  email,
  name,
  description
}: updateProfileUpdateProps): Promise<ProfileUpdate_ResponseFromServer> => {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  if (!id) {
    return { errorMessage: {}, message: 'fail', ok: false }
  }
  try {
    let verifyEmailToken = null
    if (email) {
      // note that we already validate email in the input before get to this point
      const user = await prisma.user.findFirst({
        where: {
          email,
          emailVerified: true
        }
      })
      // if there is an user with such email and the id is different from the current user id,
      // the email is already used
      if (user && user.id !== id) {
        return { errorMessage: { email: 'Used Email' }, message: '', ok: false }
      }
      // if no user, we get the token to verify for the email
      if (!user) {
        // in practice, the chance of getting two same token is negligible
        verifyEmailToken = crypto.randomBytes(32).toString('base64url')
        if (!verifyEmailToken) {
          throw new Error('verifyEmailToken cannot be generated')
        }
      }
      const newUser = await prisma.user.update({
        where: {
          id: id
        },
        data: {
          email,
          emailVerified: verifyEmailToken === null, // no token generated mean email already verified
          verifyEmailToken: verifyEmailToken,
          info: {
            update: {
              email,
              name,
              description
            }
          }
        }
      })
      // if there is a new email and such token
      if (verifyEmailToken) {
        const data = await sendEmail({
          from: 'Bot <admin@baotran.ca>',
          to: [email],
          subject: 'Verify Email',
          html: render(
            VerifyEmailEmailTemplate({
              username: newUser.username,
              email: newUser.email,
              verifyEmailToken: verifyEmailToken
            })
          )
        })
        if (data?.data) {
          return {
            errorMessage: {},
            message: 'Successfully Update -- Verify Email Sent',
            ok: true
          }
        }
      }
    } else {
      // at this point, it means that email is ''
      await prisma.user.update({
        where: {
          id: id
        },
        data: {
          email,
          emailVerified: false,
          info: {
            update: {
              email,
              name,
              description
            }
          }
        }
      })
    }
    return { errorMessage: {}, message: 'Successfully Update', ok: true }
  } catch (e) {
    console.log('Error in updateProfielUpdate', e)
  }
  return { errorMessage: {}, message: 'fail', ok: false }
}
