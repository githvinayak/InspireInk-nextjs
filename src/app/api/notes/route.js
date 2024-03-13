import prisma from "../../../../prisma/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";

export const GET = async () => {
  try {
    const notes = await prisma.note.findMany(
      {
        orderBy: {
          createdAt: 'desc',
        },
        include: { user: true },
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
    if(!body){
      return new NextResponse(
        JSON.stringify({ message: "Please fill this field first" }, { status: 400 })
      );
    }
    const note = await prisma.note.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(note, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};