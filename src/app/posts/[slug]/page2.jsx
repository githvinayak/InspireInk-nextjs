
 
       <div className=" mt-14">
        <div className="flex max-lg:flex-col items-center gap-[50px]">
          <div className="flex-[1]">
            <h1 className=" text-[54px] text-wrap max-xl:text-[48px] max-lg:text-[40px] max-sm:text-[36px] max-xsmall:text-[26px]  font-bold mb-[50px] ">{data?.title}</h1>
            <div className="flex items-center gap-[20px] "> 
             {data?.user?.image && ( <div className=" w-[50px] h-[50px] relative ">
                <Image src={data.user.image} fill className="rounded-[50%] object-cover" />
              </div>)}
              <div className="flex flex-col gap-[5px] text-gray-700">
                <span className=" text-[20px] font-medium">{post?.user.name || "user"}</span>
                <span>{post.createdAt}</span>
              </div>
            </div>
          </div>
          {post.img && (<div  className="flex-[1] h-[350px] relative ">
            <Image src={post.img} className=' object-cover h-[350px] max-xsmall:h-[220px] max-xsmall:w-[270px]' />
          </div>)}
        </div>
        <div className="flex gap-[50px]">
          <div className="flex-[5] max-xl:flex-[3.5] mt-14">
          <div className=" text-[20px] max-sm:text-[15px] max-lg:text-[17px] max-xsmall:text-[13px] text-justify font-light mb-[20px]" dangerouslySetInnerHTML={{__html:post.desc} }/>
          <div>
            <Comments postSlug={slug}/>
          </div>
          </div>
          <Menu />
        </div>
      </div>
