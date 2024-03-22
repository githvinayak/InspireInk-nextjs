import React from "react";
import Greeting from "@/components/admin/Greeting";
import Count from "@/components/admin/Count";
import LatestPosts from "@/components/admin/LatestPosts";
import LatestUser from "@/components/admin/LatestUser";
const page = () => {
  return (
    <>
      <div className='py-10 '>
        <div className='flex flex-col gap-10'>
          <Greeting />
          <Count />
          {/* <div className="flex justify-around items-center max-lg:flex-col gap-4">
            <div className="flex-[1] rounded-lg overflow-hidden shadow-xl"><LatestPosts /></div>
            <div className="flex-[1] overflow-hidden  shadow-xl"><LatestUser /></div>
          </div> */}
          <div className="flex justify-normal items-center gap-4 max-lg:flex-col">
          <LatestPosts />
          <LatestUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
