import { sql } from '@vercel/postgres';
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from 'bcrypt';

const handler = NextAuth({
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
            SELECT * FROM users WHERE username=${username};
          ` 
          const user = response.rows[0];
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
  ]
})

export {handler as GET, handler as POST}