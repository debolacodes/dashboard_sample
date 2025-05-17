import React from 'react'
import ReactIcon from "../assets/react.svg"
export default function ScheduleList({schedule}) {
  return (
    <div className='flex mt-[20px] gap-[10px] !h-[50px]'>
        <div className='!w-[50px] !h-[50px] rounded-full content-center text-center font-bold border-[2px] border-gray-200'>
            {schedule.id}
        </div>
        <div className='w-full'>
            <div className='text-primary font-semibold'>{schedule.title}</div>
            <div className='text-[12px] text-gray-400'>{schedule.details}</div>
        </div>
        <div className='flex gap-[5px]'>
            <img src={ReactIcon} className='w-[15px] h-full' />
            <div className='content-center'>{schedule.time}</div>
        </div>
    </div>
  )
}
