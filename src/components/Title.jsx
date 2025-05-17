import React from 'react'

export default function Title({title,subtitle}) {
  return (
    <div className='w-full h-[100px] flex'>
      <div>
        <div className='text-3xl font-semibold'>{title}</div>
        <div className='text-xs text-gray-400 font-regular' >{subtitle}</div>
      </div>
    </div>
  )
}
