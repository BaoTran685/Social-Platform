import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { connectToDatabase } from "@/helper/server-helper";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { username, name, password } = await request.json();

    await connectToDatabase();
    const newUser = await prisma.user.create({
      data: {
        username: username,
        hashPassword: await hash(password, 10),
        info: {
          create: {
            name: name,
          },
        },
        number: {
          create: {},
        }
      },
      include: {
        info: true,
        number: true,
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