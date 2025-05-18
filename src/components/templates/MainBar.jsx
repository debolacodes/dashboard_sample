import React from 'react'

export default function MainBar({children}) {
  return (
    <div className='w-full bg h-full md:border-l-[1px] py-[30px]
    pb-[100px] px-[50px] md:border-l-gray-200  overflow-y-auto'>
        {children}
    </div>
  )
}
