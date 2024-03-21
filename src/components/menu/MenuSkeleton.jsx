import React from 'react'

const Skeleton = () => {
  return (
    <>
        <div className="flex items-center gap-4 animate-pulse">
  <div className="flex-1">
    <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
  </div>
  <div className="flex-4 flex flex-col gap-2">
    <div className="h-4 bg-gray-200 rounded w-20"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    <div className="flex text-sm">
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 ml-2"></div>
    </div>
  </div>
</div>
    </>
  )
}

export default Skeleton