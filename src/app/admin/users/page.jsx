import AllUser from '@/components/admin/AllUsers'
import Greeting from '@/components/admin/Greeting'
import React from 'react'

const page = ({searchParams}) => {
    const page = parseInt(searchParams.page) || 1
  return (
    <>
    <div className='flex flex-col py-10 gap-8 pr-8'>
        <Greeting/>
        <h1 className=' font-bold text-white text-[18px] mb-4 '>All Users</h1>
        <AllUser page={page}/>
    </div>
    </>
  )
}

export default page