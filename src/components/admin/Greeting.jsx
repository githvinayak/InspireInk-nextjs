"use client"
import { useSession } from 'next-auth/react';
import React from 'react'

const Greeting = () => {
    const {data} = useSession();
let timeOfDay;
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
  } else if(hours >=17 && hours < 20) {
    timeOfDay = 'evening';
  }
  else{
    timeOfDay = 'night';
  }
  return (
    <>
        <div className='flex flex-col px-8 py-4 gap-1 capitalize bg-accent rounded-lg'>
            <h1 className='text-white text-[30px] font-bold'> Good {timeOfDay},{data?.user?.name} <span className='text-[35px]'>👋</span></h1>
            <p className=' text-gray-500 text-[14px] font-medium'>Here is what's happening with your project today..!  </p>
        </div>
    </>
  )
} //

export default Greeting