import prisma from "../../../../../prisma/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const POST_PER_PAGE = 5;

  try {
    const users = await prisma.user.findMany({
      take: POST_PER_PAGE,
      orderBy: {
        createdAt: "desc",
      },
      include: { Post: true },
    });
    return new NextResponse(JSON.stringify(users, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};