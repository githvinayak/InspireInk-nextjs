import React from 'react'
import Pagination from './Pagination';
import Card from './card/Card';


const getData = async (page,cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CardList = async({page,cat}) => {
   const {posts,count} = await getData(page,cat);
   const POST_PER_PAGE = 6;

  const hasPrev = POST_PER_PAGE*(page-1) > 0;
  const hasNext = POST_PER_PAGE*(page-1) + POST_PER_PAGE < count; //count/postperpage > page
  return (
    <>
        <div className="flex-[5] overflow-y-auto mt-14">
        <h1 className='mb-[40px] text-[45px] font-bold max-xl:text-[40px] max-lg:text-[35px]  '>Recent Posts</h1>
        <div className="mt-16 px-8 grid xl:grid-cols-2  md:grid-cols-1 gap-8">
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