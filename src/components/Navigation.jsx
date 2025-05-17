import React from 'react'

export default function Navigation() {
  return (
    <div className='w-full h-auto'>
        <div className='font-sans font-bold 
        text-sm text-center py-[10px] cursor-pointer'>Dashboard</div>
        <div className='font-sans 
        text-sm text-center py-[10px] cursor-pointer'>Insights</div>
        <div className='font-sans 
        text-sm text-center py-[10px] cursor-pointer'>Reports</div>
        <div className='font-sans 
        text-sm text-center py-[10px] cursor-pointer'>Comments</div>
        <div className='font-sans 
        text-sm text-center py-[10px] cursor-pointer'>Channels</div>
    </div>
  )
}
