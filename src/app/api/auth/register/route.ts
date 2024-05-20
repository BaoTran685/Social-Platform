import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {username, userid, name, password} = body;
    const hashPassword = await hash(password, 16);
    const response = await sql`
      INSERT INTO users (username, userid, name, password)
      VALUES (${username}, ${userid}, ${name}, ${hashPassword})  
    `;
    return NextResponse.json({message: 'success', content: response}, {status: 200});
  } catch(e) {
    console.log(e);
    return NextResponse.json({message: 'fail', content: null}, {status: 401});
  }
}