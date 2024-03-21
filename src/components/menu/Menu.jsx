"use client"
import CategoryList from "../CategoryList";
import useSWR from "swr";
import MenuSkeleton from "./MenuSkeleton"
import MenuCard from "./MenuCard";


const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};


const Menu = ({cat}) => {
  const { data,isLoading } = useSWR("http://localhost:3000/api/posts/popular",fetcher
  );
  return (
    <>
      <div className='flex-[2] max-lg:hidden mt-14'>
        <h2 className=' text-gray-400 text-[16px] font-semibold  capitalize'>what's hot</h2>
        <h1 className='mb-[40px] text-[45px] max-2xsmall:text-[23px] max-xsmall:text-[25px] max-sm:text-[27px]  max-md:text-[30px] font-bold max-xl:text-[40px] text-white max-lg:text-[35px]  '>Most Popular</h1>
        <div className=" flex flex-col gap-5">
          { isLoading
            ? <MenuSkeleton/>
           : data.map((items,index)=><MenuCard posts={items} key={index}/>)
          }
        </div>
        <CategoryList withtImage= {false} />
      </div>
    </>
  );
};

export default Menu;
