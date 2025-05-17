import React from 'react'

export default function BottomContent({children}) {
  return (
    <div className='w-full min-h-[200px] md:flex bg-gray-100 
    rounded-2xl mt-[20px] p-[30px] relative'>
      {children}
    </div>
  )
}
