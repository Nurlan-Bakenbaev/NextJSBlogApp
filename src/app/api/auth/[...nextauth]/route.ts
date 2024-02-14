import { checkDatabaseConnection } from "@/utils/db";

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

checkDatabaseConnection();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
});
export { handler as GET, handler as POST };
