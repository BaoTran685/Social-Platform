import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/helper/server-helper";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const id = session?.user?.id;
    const username = session?.user?.username;
    console.log(session);
    if (id && username) {
      await connectToDatabase();
      const profile = await prisma.profile.findUnique({
        where: {
          username: username,
          profileId: id,
          
        }
      })
      console.log(profile);
      return NextResponse.json({message: 'success', content: profile}, {status: 200});
    }
  } catch(e) {
    console.log(e);
  }
  return NextResponse.json({message: 'fail',}, {status: 401});
}