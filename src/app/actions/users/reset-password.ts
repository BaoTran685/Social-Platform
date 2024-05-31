'use server'
import { connectToDatabase } from "@/helper/server-helper";
import prisma from "@/lib/prisma";
import crypto from 'crypto';
import { sendEmail } from "../emails/send-email";
import { ResetPasswordEmailTemplate } from "@/components/EmailTemplate/resetPasswordEmailTemplate";
import * as React from 'react';

export const resetPassword = async (email: string) => {
  try {
    console.log('Resetting password for ' + email);
    await connectToDatabase();
    // find the user, and when register email we always make sure that email is unqiue
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      }
    });
    // if no user exist, return
    if (!user) {
      throw new Error('User not found');
    }
    // create an unique token
    let resetPasswordToken = crypto.randomBytes(32).toString('base64url');
    // make sure that the token is unique
    let isTokenExist = await prisma.user.findFirst({
      where: {
        resetPasswordToken: resetPasswordToken,
      }
    });
    while (isTokenExist) {
      resetPasswordToken = crypto.randomBytes(32).toString('base64url');
      isTokenExist = await prisma.user.findFirst({
        where: {
          resetPasswordToken: resetPasswordToken,
        }
      });
    }
    // asign an expiry date for the token
    const today = new Date();
    const resetPasswordTokenExpiry = new Date(today.setDate(today.getDate() + 1)); // 24 hours from this moment
    // update the user with the token and expiry inserted
    const newUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        resetPasswordToken: resetPasswordToken,
        resetPasswordTokenExpiry: resetPasswordTokenExpiry,
      }
    });
    console.log(newUser);
    // send the token to the user
    await sendEmail({
      from: 'Bot <admin@baotran.ca>',
      to: [email],
      subject: 'Reset Password',
      react: ResetPasswordEmailTemplate({ email, resetPasswordToken }) as React.ReactElement,
    });
  } catch(e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
}