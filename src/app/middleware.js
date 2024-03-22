import NextAuth from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";


export default NextAuth(authOptions).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
