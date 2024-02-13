import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
