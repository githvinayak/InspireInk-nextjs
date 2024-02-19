import React from 'react'
import Pagination from './Pagination';
import Card from './card/Card';

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CardList = async() => {
  // const data = await getData()
  return (
    <>
        <>
        <div className="flex-[5] overflow-y-auto mt-14">
        <h1 className='mb-[40px] text-[45px] font-bold max-xl:text-[40px] max-lg:text-[35px]  '>Recent Posts</h1>
        <div className="mt-16 px-8 grid xl:grid-cols-2  md:grid-cols-1 gap-8">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <Pagination/>
        </div>
        </>
        
    </>
  )
}

export default CardList