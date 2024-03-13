import prisma from "../../../../prisma/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";

export const GET = async () => {
  try {
    const notes = await prisma.note.findMany(
      {
        orderBy: {
          createdAt: 'desc',
        }
      }
    );

    return new NextResponse(JSON.stringify(notes, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async () => {
  try {
    
  } catch (error) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
}