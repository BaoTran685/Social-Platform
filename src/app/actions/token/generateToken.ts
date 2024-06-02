'use server'
import prisma from '@/lib/prisma'
import crypto from 'crypto'


interface generateTokenProps {
  tokenName: 'resetPasswordToken' | 'verifyEmailToken'
}

export const generateToken = async ({tokenName}: generateTokenProps) => {
  try {
    // create an unique token
    let token = crypto.randomBytes(32).toString('base64url')
    // make sure that the token is unique
    let isTokenExist = await prisma.user.findFirst({
      where: {
        [tokenName]: token
      }
    })
    while (isTokenExist) {
      token = crypto.randomBytes(32).toString('base64url')
      isTokenExist = await prisma.user.findFirst({
        where: {
          [tokenName]: token
        }
      })
    }
    return token;
  } catch (e) {
    console.log('Error in generateToken', e);
  }
}
