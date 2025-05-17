import React from 'react'
import Portrait from '../assets/portrait.avif'
import Star from "../assets/star.svg"
export default function Avatar() {
  return (
    <div className='w-full h-auto 
        mt-[30px] p-[20px]'>
            <div className='w-[70px] h-[70px] 
            m-auto'>
              <img src={Portrait} className='w-full h-full object-cover rounded-full'/>
            </div>
            <div className='font-sans font-bold text-center mt-[10px]'>Robert Sans</div>
            <div className='font-sans content-center font-medium 
            shadow-xl bg-white w-[80px] rounded-full m-auto mt-[10px] 
            text-center flex justify-center gap-[2px] text-[13px] 
            leading-[25px] p-[2px]'>
              <img src={Star} className='w-[20px] h-[20px]' />
              4.8</div>
        </div>
  )
}
