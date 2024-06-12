import { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from './prisma'
import { compare } from 'bcrypt'
import { JWT } from 'next-auth/jwt'
import { validateEmail } from './lib'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {},
        password: {}
      },
      async authorize (credentials, req) {
        try {
          if (credentials) {
            const { username, password } = credentials
            let user = null
            if (validateEmail(username)) {
              user = await prisma.user.findFirst({
                where: {
                  email: username
                }
              })
            } else {
              user = await prisma.user.findUnique({
                where: {
                  username: username
                }
              })
            }
            if (user && (await compare(password, user.hashPassword))) {
              return {
                id: user.id,
                username: user.username
              }
            }
          }
        } catch (e) {
          console.log('Error in nextauth authorizing', e)
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
