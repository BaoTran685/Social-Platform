import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/helper/server-helper'
import prisma from '@/lib/prisma'

// getting the data to the profile page
export async function GET (request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id')
    console.log('id', id)
    if (id) {
      await connectToDatabase()
      const response = await prisma.user.findUnique({
        where: {
          id: id
        },
        include: {
          info: true,
          number: true
        }
      })
      console.log('Response', response)
      if (response) {
        const profile = {
          username: response.username,
          ...response.info,
          ...response.number,
        };
        return NextResponse.json(
          { message: 'success', content: profile },
          { status: 200 }
        );
      }
    }
  } catch (e) {
    console.log(e)
  } finally {
    prisma.$disconnect()
  }
  return NextResponse.json({ message: 'fail' }, { status: 401 })
}
