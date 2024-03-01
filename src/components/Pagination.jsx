"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({hasNext,hasPrev,page}) => {
  const router = useRouter();
  return (
    <>
      <div className='flex justify-between mt-12'>
        <button
          onClick={() => router.push(`?page=${page - 1}`)}
         disabled={!hasPrev}
          className=' w-[100px] cursor-pointer disabled:cursor-not-allowed disabled:opacity-35 bg-red-700 text-white text-[15px] font-semibold px-8 py-3 rounded-xl '
        >
          Prev
        </button>
        <button
          onClick={() => router.push(`?page=${page + 1}`)}
         disabled={!hasNext}
          className='w-[100px] cursor-pointer disabled:cursor-not-allowed disabled:opacity-35 bg-red-700 text-white text-[15px] font-semibold px-8 py-3 rounded-xl '
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
