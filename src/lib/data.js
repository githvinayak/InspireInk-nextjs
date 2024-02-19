const { NextResponse } = require("next/server")
import { connectToDb } from "./connectDb"
import prisma from "@/lib/connect";

export const getCategories = async ()=>{
    try {
        connectToDb() 
        const data = await prisma.category.findMay()
        return new NextResponse(data.json,{status:200}) 
    } catch (error) {
        return new NextResponse({message:"failed to get data"},{status:200}) 
    }
}

// export const getPosts = async () => {
//     try {
//       connectToDb();
//       const posts = await Post.find();
//       return posts;
//     } catch (err) {
//       console.log(err);
//       throw new Error("Failed to fetch posts!");
//     }
//   };