import React from 'react'
import Pagination from './Pagination';
import Card from './card/Card';



const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async({page,cat}) => {
 // console.log(page,cat)
  const {posts,count}= await getData(page,cat);
 ;
   const POST_PER_PAGE = 6;
  const hasPrev = POST_PER_PAGE*(page-1) > 0;
  const hasNext = POST_PER_PAGE*(page-1) + POST_PER_PAGE < count; //count/postperpage > page
  return (
    <>
        <div className="flex-[5] overflow-y-auto mt-14">
        <h1 className='mb-[40px] px-3 text-[45px] max-2xsmall:text-[23px] text-white max-xsmall:text-[25px] max-sm:text-[27px]  max-md:text-[30px] font-bold '>Recent Posts</h1>
        <div className="mt-16  grid grid-cols-2  max-md:grid-cols-1 gap-8">
       {
        posts?.map((item)=>(
        <Card item={item} key={item._id}/>
        ))
       }
        </div>
        <Pagination hasPrev={hasPrev} hasNext={hasNext} page={page}/>
        </div>
    </>
  )
}

export default CardList