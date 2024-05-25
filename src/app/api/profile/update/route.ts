import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import {authOptions} from "@/lib/authOptions"

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {userid, name, description} = body;
    const session = await getServerSession(authOptions);
    console.log({session, userid, name, description});
    const username = session?.user?.username;
    if (username) {
      const response = await sql`
        UPDATE info
        SET userid = ${userid}, name = ${name}, description = ${description}
        WHERE username = ${username}
      `;
      return NextResponse.json({message: 'success', content: response}, {status: 200})
    }
  } catch(e) {
    console.log(e)
  }
  return NextResponse.json({message: 'fail'}, {status: 401})
}