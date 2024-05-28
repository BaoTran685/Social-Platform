import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helper/server-helper'
import prisma from '@/lib/prisma'

export async function POST (request: Request) {
  try {
    const { id } = await request.json()
    console.log('id', id)
    if (id) {
      await connectToDatabase()
      const profile = await prisma.profile.findUnique({
        where: {
          profileId: id
        }
      })
      console.log(profile)
      return NextResponse.json(
        { message: 'success', content: profile },
        { status: 200 }
      )
    }
  } catch (e) {
    console.log(e)
  }
  return NextResponse.json({ message: 'fail' }, { status: 401 })
}
