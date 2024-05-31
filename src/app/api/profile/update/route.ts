import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/helper/server-helper'
import prisma from '@/lib/prisma'

// getting the data to the profile/update page
export async function GET (request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    if (id) {
      await connectToDatabase();
      const response = await prisma.info.findUnique({
        where: {
          infoId: id,
        }
      });
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

// updating the data to the database
export async function POST (request: Request) {
  try {
    const { email, name, description, id } = await request.json();
    console.log(id);
    if (id) {
      await connectToDatabase();
      // make sure that email is unique
      let isEmailExist = await prisma.info.findFirst({
        where: {
          email: email,
        }
      });
      if (isEmailExist && isEmailExist.infoId !== id) {
        return NextResponse.json({message: 'already exist email'}, {status: 401});
      }
      // if email is unique, we update the profile
      const response = await prisma.user.update({
        where: {
          id: id
        },
        data: {
          email: email,
          info: {
            update: {
              email: email,
              name: name,
              description: description,
            }
          }
        }
      });
      return NextResponse.json(
        { message: 'success', content: response },
        { status: 200 }
      )
    }
  } catch (e) {
    console.log(e);
  } finally {
    prisma.$disconnect();
  }
  return NextResponse.json({ message: 'fail' }, { status: 401 })
}
