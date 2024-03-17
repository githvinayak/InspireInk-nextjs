import prisma from "../../../../../prisma/connect";
import { NextResponse } from "next/server";

export const GET  = async(cat)=>{
    try {
        const posts = await prisma.post.findMany({
            where:{
                catSlug:cat,
            }
        })
        return new NextResponse(JSON.stringify(posts,{status:200}));
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"something went wrong"},{status:400}))
    }
}