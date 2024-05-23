import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {username, password} = body;
    const hashPassword = await hash(password, 10);
    const response_users = await sql`
      INSERT INTO users (username, password)
      VALUES (${username}, ${hashPassword})  
    `;
    const response_info = await sql`
      INSERT INTO info (username)
      VALUES (${username})
    `
    return NextResponse.json({message: 'success', content: {response_users, response_info}}, {status: 200});
  } catch(e) {
    console.log(e);
  }
  return NextResponse.json({message: 'fail', content: null}, {status: 401});
}