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
          <div className="flex gap-8 max-lg:flex-col">
          <LatestPosts />
          <LatestUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
