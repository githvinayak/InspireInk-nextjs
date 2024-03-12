import prisma from "../../../../prisma/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";

//get all the comments of a post
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");
  try {
    const comments = await prisma.feedback.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "something went error" }, { status: 500 })
    );
  }
};


// CREATE A COMMENT
export const POST = async (req) => {
  const session = await getAuthSession();
  console.log(session);
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.feedback.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};