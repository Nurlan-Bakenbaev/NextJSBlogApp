import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const posts = await prisma.post.findMany();

    const lastPost = await prisma.post.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return new NextResponse(JSON.stringify({ posts, lastPost }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
