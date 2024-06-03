import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import prisma from '@/lib/prisma'

export async function POST (request: Request) {
  try {
    const { username, name, password } = await request.json()

    const user = await prisma.user.findUnique({
      where: {
        username: username
      }
    })
    if (user) {
      return NextResponse.json(
        { errorMessage: { username: 'Used Username' }, message: '', ok: false },
        { status: 401 }
      )
    }
    const newUser = await prisma.user.create({
      data: {
        username: username,
        hashPassword: await hash(password, 10),
        resetPasswordToken: null,
        resetPasswordTokenExpiry: null,
        info: {
          create: {
            name: name
          }
        },
        number: {
          create: {}
        }
      },
      include: {
        info: true,
        number: true
      }
    })
    return NextResponse.json(
      { errorMessage: {}, message: 'Successfully Register', ok: true },
      { status: 200 }
    )
  } catch (e) {
    console.log(e)
    return NextResponse.json({ message: 'fail' }, { status: 500 })
  }
}
