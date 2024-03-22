import React from 'react'
import users from "@/images/users.png";
import blog from "@/images/blog.png";
import category from "@/images/category.png";
import Image from 'next/image';

const getCount = async()=>{
    const res = await fetch("http://localhost:3000/api/admin",{
      cache:"no-store"
    })
    if(!res.ok){
      throw new Error("failed");
    }
    return res.json();
  }

const Count = async () => {
    const data = await getCount()
    const cards = [
        {
            title:"Users",
            count : data.usersCount,
            image: users
        },
        {
            title:"Blogs",
            count : data.postsCount,
            image: blog
        },
        {
            title:"Categories",
            count : data.categoryCount,
            image: category
        }
    ]
  return (
    <div className=' overflow-hidden px-10 max-xl:px-6'>
    <div className=' flex justify-around items-start max-xl:gap-8 max-lg:gap-10 max-md:gap-12 overflow-x-auto no-scrollbar'>
    {
        cards.map((item,index)=>(
            <div className=' bg-secondary h-[180px] w-[300px] max-md:w-[200px] box-border rounded-xl shadow-xl flex justify-center py-3 items-center gap-8'>
               <div className='bg-primary rounded-full h-[5rem] w-[5rem] p-5'>
               <Image src={item.image} width={100} height={100} alt="pic"/>
               </div>
                <div className='flex flex-col gap-2'>
                    <h1 className=' font-bold text-white text-[38px]'>{item.count}</h1>
                    <h3 className='font-medium text-gray-300 text-[24px]'>{item.title}</h3>
                </div>
            </div>
        ))
    }
    </div>
    </div>
  )
}

export default Count