import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { connectToDatabase } from "@/helper/server-helper";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, name, password } = await request.json();

    await connectToDatabase();
    const newUser = await prisma.user.create({
      data: {
        email: email,
        hashPassword: await hash(password, 10),
        profile: {
          create: {
            name: name,
          },
        }
      },
      include: {
        profile: true,
      }
    });
    console.log(newUser);
    return NextResponse.json({message: 'success', content: newUser}, {status: 200});
  } catch(e) {
    console.log(e);
    return NextResponse.json({message: 'fail', content: null}, {status: 401});
  } finally {
    await prisma.$disconnect();
  }
  
}