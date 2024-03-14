import React from "react";

const Skeleton = () => {
  return (
    <>
      <div class='bg-primary rounded-lg px-1 py-1 w-full flex justify-center items-center h-[130px] animate-pulse'>
        <div className='flex-[1] flex justify-center items-center'>
          <div class='bg-gray-200 h-12 w-12 rounded-full'></div>
        </div>
        <div className='flex flex-col flex-[2] justify-around items-start gap-[4px]'>
          <div className='flex gap-[4px]'>
            <div class='h-3 bg-gray-200 rounded w-1/2'></div>
            <div class='h-3 bg-gray-200 rounded w-1/3'></div>
          </div>
          <div class='h-4 bg-gray-200 rounded w-full mb-1'></div>
          <div class='h-6 bg-gray-200 rounded w-24'></div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
