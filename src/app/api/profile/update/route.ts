import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/helper/server-helper'
import prisma from '@/lib/prisma'

// getting the data to the profile/update page
export async function GET (request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id')
    if (id) {
      await connectToDatabase()
      const response = await prisma.info.findUnique({
        where: {
          infoId: id
        }
      })
      console.log(response)
      if (response) {
        const info = {
          name: response.name,
          email: response.email,
          description: response.description
        }
        return NextResponse.json(
          { message: 'success', content: info },
          { status: 200 }
        )
      }
    }
  } catch (e) {
    console.log(e)
  } finally {
    prisma.$disconnect()
  }
  return NextResponse.json({ message: 'fail' }, { status: 401 })
}

// updating the data
export async function POST (request: Request) {
  try {
    const { email, name, description, id } = await request.json()

    console.log(id)
    if (id) {
      await connectToDatabase()
      const response = await prisma.info.update({
        where: {
          infoId: id
        },
        data: {
          name: name,
          email: email,
          description: description
        }
      })
      return NextResponse.json(
        { message: 'success', content: response },
        { status: 200 }
      )
    }
  } catch (e) {
    console.log(e)
  } finally {
    prisma.$disconnect()
  }
  return NextResponse.json({ message: 'fail' }, { status: 401 })
}
