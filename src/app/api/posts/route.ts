import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")!);
  const cat = parseInt(searchParams.get("cat")!);

  const POST_PER_PAGE = 2;
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    orderBy: { createdAt: "desc" },
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    // Perform a Prisma transaction to fetch posts and count
    const [posts, totalCount] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    // Return both posts and  count in the response
    return new NextResponse(JSON.stringify({ posts, totalCount }), {
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
