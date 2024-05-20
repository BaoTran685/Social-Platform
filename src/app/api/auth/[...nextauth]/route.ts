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
          console.log(user);
          if (user && await compare(password, user.password)) {
            return {
              id: user.id,
              name: user.name,
              userid: user.userid,
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
    async jwt({ token, user }) {
      console.log(123)
      console.log(token, user);
      return { ...token, ...user }
    },
    async session({ session, token }) {
      console.log(345);
      console.log(session, token);
      session.user = token;
      return session;
    }
  }
})

export {handler as GET, handler as POST}