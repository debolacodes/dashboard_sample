import React from 'react'

export default function Analytics({icon,title, value}) {
  return (
    <div className='w-full h-[70px] flex gap-[10px]'>
        {icon &&
            <div className='bg-gray-100 !w-[50px] !h-[44px] 
            p-[10px] rounded-xl content-center'><img src={icon} className='m-auto'/></div>
        }
        <div className='w-full'>
            <div className='font-sans font-regular text-gray-400 text-[12px]'>{title}</div>
            <div className='font-sans font-bold text-xl text-primary'>{value}</div>
        </div>
    </div>
  )
}
