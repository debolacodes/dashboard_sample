import React from 'react'

export default function Socials({title, id, value, icon}) {
  return (
    <div className='w-[140px] p-[30px] h-[140px]
    bg-white rounded-2xl shadow-2xl align-center content-center'>
        <div className='m-auto bg-gray-800 
        w-[30px] h-[30px] mt-[-40px] rounded-full content-center'>
            <img src={icon} className='m-auto w-[18px]'/>
        </div>
        <div className='font-semibold text-center mt-[15px]'>{title}</div>
        <div className='text-xs text-gray-300 text-center py-[4px]'>{id}</div>
        <div className='text-2xl font-bold text-center py-[10px]'>{value}</div>
    </div>
  )
}
