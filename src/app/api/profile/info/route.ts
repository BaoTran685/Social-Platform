import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const username = session?.user?.username;
    console.log(session);
    if (username) {
      const response = await sql`
        SELECT * FROM info WHERE username = ${username}
      `
      console.log(response);
      return NextResponse.json({message: 'success', content: response.rows[0]}, {status: 200});
    }
  } catch(e) {
    console.log(e);
  }
  return NextResponse.json({message: 'fail',}, {status: 401});
}