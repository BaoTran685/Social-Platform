import { connectToDatabase } from '@/helper/server-helper'
import { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from './prisma'
import { compare } from 'bcrypt'
import { JWT } from 'next-auth/jwt'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {},
        email: {},
        password: {},
        type: {}
      },
      async authorize (credentials, req) {
        try {
          if (credentials) {
            const { username, email, password, type } = credentials
            console.log(username, email, password, type)
            let user
            if (type === 'username') {
              user = await prisma.user.findUnique({
                where: {
                  username: username
                }
              })
            }
            else if (type === 'email') {
              user = await prisma.user.findFirst({
                where: {
                  email: email,
                  emailVerified: true,
                }
              })
            }
            console.log(user)
            if (user && (await compare(password, user.hashPassword))) {
              return {
                id: user.id,
                eamil: user.username
              }
            }
          }
        } catch (e) {
          console.log(e)
          throw new Error('Error in Authorizing')
        } finally {
          await prisma.$disconnect()
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async jwt ({ token, user }: { token: JWT; user: User }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          username: (user as any).username
        }
      }
      return token
    },
    async session ({ session, token }: { session: any; token: JWT }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username
        }
      }
    }
  }
}
