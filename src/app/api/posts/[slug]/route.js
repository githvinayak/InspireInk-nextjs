
import prisma from "../../../../../prisma/connect"
import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";

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

//delete a blog
export const DELETE = async (req, { params }) => {
  const { slug } = params;
  
  if (!slug) {
    return new NextResponse(
      JSON.stringify({ message: 'Missing required fields' }, { status: 400})
    );
  }
  try {
     await prisma.post.delete({
      where: { slug },
    });
    // console.log(post);
    return new NextResponse(JSON.stringify({ message: "post deleted successfully" }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

//update a blog
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const slug = body.slug;
    const post = await prisma.post.update({
      where : { slug},
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
