import React from 'react'

export default function Title({title,subtitle, prebutton}) {
  return (
    <div className='w-full h-[100px] flex'>
      {prebutton &&
      <div className='w-[50px] h-[50px] cursor-pointer content-center' 
        onClick={()=>prebutton.action()}
      >
        <img src={prebutton.icon} className='w-[30px] h-[30px]'/>
      </div> }
      <div>
        <div className='text-3xl font-semibold'>{title}</div>
        <div className='text-xs text-gray-400 font-regular' >{subtitle}</div>
      </div>
    </div>
  )
}
