import { connectToDatabase } from "@/helper/server-helper";
import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "./prisma";
import { compare } from "bcrypt";
import { JWT } from "next-auth/jwt";



export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        try {
          if (credentials) {
            const {email, password} = credentials;
            console.log(email, password);
            await connectToDatabase();
            const user = await prisma.user.findUnique({
              where: {
                email: email,
              }
            })
            console.log(user);
            if (user && await compare(password, user.hashPassword)) {
              return {
                id: user.id,
                eamil: user.email,
              }
            }
          }
        } catch (e) {
          console.log(e);
          throw new Error("Error in Authorizing");
        } finally {
          await prisma.$disconnect();
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
          email: (user as any).email,
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
          email: token.email,
        }
      }
    }
  }
}


