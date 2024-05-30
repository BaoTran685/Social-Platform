"use server"

import { connectToDatabase } from "@/helper/server-helper"
import prisma from "@/lib/prisma";
import { hash } from 'bcrypt';


export const changePassword = async (resetPasswordToken: string, password: string) => {
  try {
    await connectToDatabase();
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: resetPasswordToken,
      }
    });
    if (!user) {
      throw new Error('User not found');
    }
    const resetPasswordTokenExpiry = user.resetPasswordTokenExpiry;
    const today = new Date();

    if (!resetPasswordTokenExpiry || today > resetPasswordTokenExpiry) {
      throw new Error('Token expired');
    }
    
    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        hashPassword: await hash(password, 10),
        resetPasswordToken: null,
        resetPasswordTokenExpiry: null,
      }
    })
  } catch(e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
}