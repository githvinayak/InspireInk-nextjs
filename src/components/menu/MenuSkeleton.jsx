import React from 'react'

const Skeleton = () => {
  return (
    <>
        <div class="flex items-center gap-4 animate-pulse">
  <div class="flex-1">
    <div class="w-20 h-20 bg-gray-200 rounded-full"></div>
  </div>
  <div class="flex-4 flex flex-col gap-2">
    <div class="h-4 bg-gray-200 rounded w-20"></div>
    <div class="h-4 bg-gray-200 rounded w-3/4"></div>
    <div class="flex text-sm">
      <div class="h-4 bg-gray-200 rounded w-1/4"></div>
      <div class="h-4 bg-gray-200 rounded w-1/4 ml-2"></div>
    </div>
  </div>
</div>
    </>
  )
}

export default Skeleton