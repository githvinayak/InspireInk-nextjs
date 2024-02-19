import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="flex justify-between mt-12">
        <button className=" w-[100px] cursor-pointer bg-red-700 text-white text-[15px] font-semibold px-8 py-3 rounded-xl ">Prev</button>
        <button className="w-[100px] cursor-pointer bg-red-700 text-white text-[15px] font-semibold px-8 py-3 rounded-xl ">Next</button>
      </div>
    </>
  );
};

export default Pagination;
