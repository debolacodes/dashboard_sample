import React from 'react'
import ReactIcon from "../assets/react.svg"
export default function ScheduleList({schedule}) {
  return (
    <div className='flex mt-[20px] gap-[10px] !h-[50px] justify-between'>
        <div className='!w-[50px] !h-[50px] rounded-full content-center text-center font-bold border-[2px] border-gray-200'>
            {schedule.id}
        </div>
        <div className='content-center'>
            <div className='text-primary font-semibold'>{schedule.title}</div>
            <div className='text-xs text-gray-400'>{schedule.details}</div>
        </div>
        <div className='flex gap-[5px] content-center'>
            <img src={ReactIcon} className='w-[15px] h-full' />
            <div className='content-center'>{schedule.time}</div>
        </div>
    </div>
  )
}
