import React from 'react'
import Greeting from '@/components/admin/Greeting';
import Count from '@/components/admin/Count';

const page = () => {
  return (
    <>
      <div className='py-10 padding-x'>
      <div className='flex flex-col gap-10'>
        <Greeting/>
        <Count/>
      </div>
      </div>
    </>
  )
}

export default page