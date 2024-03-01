import React from "react";
import Link from "next/link";
import Image from "next/image";


const getCategories = async()=>{
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-store"
  })
  if(!res.ok){
    throw new Error("failed");
  }
  return res.json();
}

const CategoryList =async ({ withImage }) => {
  
  const categories = await getCategories();
  //const data =  await getCategories(); 
  return (
    <>
      <div className="mt-14">  
          { withImage === true ? "" : <h2 className=' text-gray-400 text-[16px] font-semibold  capitalize'>
            Discover By Category
          </h2>}
        <h1 className='mb-[40px] text-[45px] max-lg:text-[36px] font-bold max-xl:text-[40px] max-md:text-[32px] max-sm:text-[28px] max-xsmall:text-[24px]  '>
         { withImage ? "Popular Categories" : "Categories"}
        </h1>
        <div className={` ${withImage  ? "grid place-items-center gap-8 wide:grid-cols-6 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" :"flex flex-wrap gap-[20px]"}  [&>*:nth-child(1)]:bg-[#57c4ff31] [&>*:nth-child(2)]:bg-[#da85c731] [&>*:nth-child(3)]:bg-[#7fb88133] [&>*:nth-child(4)]:bg-[#ff795736] [&>*:nth-child(5)]:bg-[#ffb04f45] [&>*:nth-child(6)]:bg-[#5e4fff31]`}>
          { categories?.map((category) => (
            <Link
              className={`flex items-center ${ withImage ? "gap-[10px]" : ""} capitalize ${ withImage ? "w-[200px] h-[80px]  rounded-[10px]": "w-[27%] h-[50px]  rounded-[14px]" }  justify-center  `}
              href={`/posts?cat=${category.slug}`}
              key={category._id}
            >
              { withImage && (
               <div>
              { category.img && (<Image
                  src={category.img}
                  alt=''
                  className='aspect-[1/1] rounded-[50%]'
                  width={32}
                  height={42}
                  styles={{ width: "auto", height: "auto" }}
                />)}
               </div>
              )}
              <span className={`${ withImage ? "text-[18px]" : "text-[14px]"}`}>{category.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
