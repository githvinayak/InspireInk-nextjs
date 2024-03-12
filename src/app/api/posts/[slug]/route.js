
import prisma from "../../../../../prisma/connect"
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;
  
  if (!slug) {
    return new NextResponse(
      JSON.stringify({ message: 'Missing required fields' }, { status: 400})
    );
  }
  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { 
        views: { increment: 1 } },
      include: { user: true},
    });
    // console.log(post);
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};


