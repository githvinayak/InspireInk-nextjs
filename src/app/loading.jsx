import React from "react";

const loading = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-accent rounded-full";
  return (
    <>
      <div className='flex justify-center items-center h-screen w-full bg-[rgba(0, 0, 0, 0.2)]'>
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </>
  );
};

export default loading;
