import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const MenuCard = ({posts}) => {
  return (
    <>
        <Link key={posts.path} className="flex hover:px-4 hover:py-3 items-center hover:bg-secondary transition-all hover:rounded-xl gap-[18px] " href={`/posts/${posts.slug}`}>
            <div className="flex-[1] ">
              <Image src={posts.img} alt='' width={80} height={80} className='aspect-[1/1] p-1 rounded-[50%] bg-secondary border-[3px] border-solid border-accent ' />
            </div>
            <div className="flex-[4] flex flex-col gap-[5px]  ">
              <p className="py-[3px] rounded-2xl px-[8px] text-[12px] text-white bg-accent  w-[max-content] ">{posts.catSlug}</p>
              <h3 className="text-[16px] max-xl:text-[13px] font-[500] text-white "> {posts.title} </h3>
              <div className=" text-[12px]">
                <span className="text-accent">{posts?.user?.name}</span>
                <span className="text-gray-400"> -{posts.createdAt.toString().slice(0,10)}</span>
              </div>
            </div>
          </Link>
    </>
  )
}

export default MenuCard