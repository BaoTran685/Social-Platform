import { NextResponse } from "next/server";
import { connectToDatabase } from "@/helper/server-helper";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const {userid, name, description, id} = await request.json();
    
    console.log(id);
    if (id) {
      await connectToDatabase();
      const response = await prisma.profile.update({
        where: {
          profileId: id,
        },
        data: {
          userid: userid,
          name: name,
          description: description,
        }
      });
      return NextResponse.json({message: 'success', content: response}, {status: 200})
    }
  } catch(e) {
    console.log(e);
  } finally {
    prisma.$disconnect();
  }
  return NextResponse.json({message: 'fail'}, {status: 401})
}