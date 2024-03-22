import prisma from "../../../../prisma/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");

  const USER_PER_PAGE = 6;

  const query = {
    take: USER_PER_PAGE,
    skip: USER_PER_PAGE * (page - 1),
  };
  try {
    const users = await prisma.user.findMany(query);
    const count = await prisma.user.count()
    const userInfo = {
      users,
      count
    }
    return new NextResponse(JSON.stringify(userInfo, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 200 })
    );
  }
};
