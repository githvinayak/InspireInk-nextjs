import { getAuthSession } from "@/lib/auth";
import prisma from "../../../../../prisma/connect";
import { NextResponse } from "next/server";

//getting details of single user
export const GET = async(req,email) => {
    //const {email} = params;
    try {
        const user = await prisma.user.findFirst({
            where : {email:email},
            include:{Post:true}
        })

        return new NextResponse(JSON.stringify(user,{status:200}));
    } catch (error) {
        return new NextResponse(JSON.stringify({message: "something went wrong"}, { status:400}));
    }
}

