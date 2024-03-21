"use server"
import prisma from "../../prisma/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";

//fetch all users
export const allUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { Post: true },
    });
    return users;
  } catch (error) {
    return {
        message:"something went wrong"
    }
  }
};
//fetch single user
export const singleUser = async (req, email) => {
  //const {email} = params;
  try {
    const user = await prisma.user.findFirst({
      where: { email:email },
      include: { Post: true },
    });
    return user;
  } catch (error) {
    return {
        message:"something went wrong"
    }
  }
};

//delete a blog
export const deletePost = async (req, slug) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }
  if (!slug) {
    return new NextResponse(
      JSON.stringify({ message: "post not found" }, { status: 400 })
    );
  }
  try {
    await prisma.post.delete({
      where: { slug },
    });
    // console.log(post);
    return new NextResponse(
      JSON.stringify({ message: "post deleted successfully" }, { status: 200 })
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

//deleting user and user's posts
export const deleteUser = async (req, id) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "user not found" }, { status: 404 })
    );
  }
  try {
    // Delete the user's posts
    await prisma.post.deleteMany({
      where: { id },
    });
    // Now delete the user
    await prisma.user.delete({
      where: { id },
    });
    return new NextResponse(
      JSON.stringify(
        { message: "user deleted with posts successfully" },
        { status: 200 }
      )
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 400 })
    );
  }
};
