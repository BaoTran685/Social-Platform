import { connectToDatabase } from "@/helper/server-helper";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {username} = await request.json();
    if (username) {
      await connectToDatabase();
      const user = await prisma.user.findUnique({
        where: {
          username: username,
        }
      });
      return NextResponse.json({message: 'success', content: {isUser: user ? true : false}}, {status: 200});
    }
  } catch(e) {
    console.log(e);
  } finally {
    prisma.$disconnect();
  }
  return NextResponse.json({message: 'fail'}, {status: 401});
}