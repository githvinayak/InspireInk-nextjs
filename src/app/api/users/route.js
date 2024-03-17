import { getAuthSession } from "@/lib/auth";
import prisma from "../../../../prisma/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = await prisma.user.findMany({
        include:{Post:true}
    });
    return new NextResponse(JSON.stringify(users, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 200 })
    );
  }
};
