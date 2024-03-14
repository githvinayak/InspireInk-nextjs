import prisma from "../../../../../prisma/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const POST_PER_PAGE = 4;

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      orderBy: {
        views: "desc",
      },
      include: { user: true }
    });
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
