import prisma from "../../../../prisma/connect";
import { NextResponse } from "next/server";


export const GET = async()=>{
    try {
        const postsCount = await prisma.post.count();
        const usersCount = await prisma.user.count();
        const categoryCount = await prisma.category.count();
        const count = {
            postsCount,
            usersCount,
            categoryCount
        }
        return new NextResponse(JSON.stringify(count,{status:200}));
    } catch (error) {
    return new NextResponse ({message:"something went werong"},{status:400});
    }
}