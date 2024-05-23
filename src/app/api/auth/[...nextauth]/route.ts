import { sql } from '@vercel/postgres';
import NextAuth, { User } from 'next-auth'
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from 'bcrypt';
import { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {},
        password: {}
      },
      async authorize(credentials, req) {
        if (credentials) {
          const {username, password} = credentials;
          const response = await sql`
            SELECT * FROM users WHERE username = ${username}
          ` 
          const user = response.rows[0];
          console.log(user);
          if (user && await compare(password, user.password)) {
            return {
              id: user.id,
              username: user.username
            }
          }
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user} : {token: JWT, user: User}) {
      if (user) {
        return {
          ...token,
          id: user.id,
          username: (user as any).username,
        }
      }
      return token;
    },
    async session({ session, token }: {session: any, token: JWT}) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
        }
      }
    }
  }
}
export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}