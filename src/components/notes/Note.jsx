import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const Note = ({ post }) => {
  return (
    <>
      <div className='bg-primary rounded-lg px-1 py-1 w-full flex justify-center items-center h-[130px]'>
        <div className="flex-[1] flex justify-center items-center">
          {post?.user?.image && (
            <Image
              src={post?.user?.image}
              alt=''
              width={50}
              height={50}
              className="rounded-full"
            />
          )}
        </div>
        <div className="flex flex-col flex-[2] justify-around items-start gap-[4px]">
            <div className="flex gap-[4px]"><span className="text-accent text-[14px]">{post.user.name}</span><span className=" text-gray-500 text-[12px]">{moment(post.createdAt)}</span></div>
            <h2 className="text-white font-bold capitalize text-[15px]">{post.content}</h2>
            <Link href={`/posts/${post.path}`} className=" bg-accent text-[13px] text-white font-semibold rounded-lg px-[5px] py-[2px]">Check Now</Link>
        </div>
      </div>
    </>
  );
};

export default Note;
