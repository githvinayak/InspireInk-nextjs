import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../../../prisma/connect";
import { getServerSession } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
},
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
        name: 'credentials',
        credentials: {
            email: { label: "email", type: "email" },
            password: { label: "password", type: "password" }
        },
        async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied

            if (!credentials.email || !credentials.password) {
                return null;
            }

            // user in DB

            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
            })


            console.log('user found', user.name);

            if (!user) {
                return null;
            }

            const isPasswordValid = await compare(credentials.password, user.password);

            if (!isPasswordValid) {
                return null;
            }

            return user;


        }
    })
  ],
  callbacks: {
    async session({ session, token }) {
        //console.log('session token', token)
        return {
            ...session,
            user: {
                ...session.user,
                id: token.id,
                email: token.email,
                name: token.name,
                role: token.role,
            }
        }
    },
    async jwt({ token, user }) {
        // after login jwt token and get the user data from here
        if (user) {
            return {
                ...token,
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            }
        }
        return token
    },
    authorized({ auth, request }) {
        const user = auth?.user;
        //console.log(user);
        const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
        const isOnBlogPage = request.nextUrl?.pathname.startsWith("/posts");
        const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
  
        // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
  
        if (isOnAdminPanel && !user?.role === "ADMIN") {
            console.log("access denied");
          return false;
        }
  
        // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
  
        if (isOnBlogPage && !user) {
          return false;
        }
  
        // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
  
        if (isOnLoginPage && user) {
          return Response.redirect(new URL("/", request.nextUrl));
        }
  
        return true
      },
},

pages: {
    signIn: '/login'
},

debug: process.env.NODE_ENV === 'development',
jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET
},
secret: process.env.NEXTAUTH_SECRET
 
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export const getAuthSession = () => getServerSession(authOptions);