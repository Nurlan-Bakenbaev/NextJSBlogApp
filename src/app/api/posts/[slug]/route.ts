import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

//GET ONE POST
export const GET = async (req, res) => {
  const { slug } = res.params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });
    return new NextResponse(
      JSON.stringify(post, {
        status: 200,
      })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
