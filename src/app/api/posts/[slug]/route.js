"use server"
import prisma from "../../../../../prisma/connect"
import { NextResponse } from "next/server";
import { getAuthSession } from "../../auth/[...nextauth]/route";


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
   const {slug,title,desc,img,catSlug} = body;
   const updatedData={
    title:title === ""  ? undefined :title,
    desc:desc === ""  ? undefined :desc,
    img:img === ""  ? undefined :img,
    catSlug:catSlug === ""  ? undefined :catSlug,
   }
    const post = await prisma.post.update({
      where : { slug},
      data: { ...updatedData, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};