import React from 'react'
import ScheduleList from './ScheduleList'

export default function Schedule() {
  const scheduleData = [
    {
        id:5,
        title: "UI/UX Worshop",
        details: "10 of 45 chapters . Mrs Wilson",
        time: "14:00" 
    },
    {
        id:6,
        title: "UI/UX Worshop",
        details: "10 of 45 chapters . Mrs Wilson",
        time: "14:00" 
    }
  ]
  return (
    <div className='w-full py-[10px] mt-[30px] px-[20px]'>
        <div className='flex justify-between'>
            <div className='font-semibold text-md leading-[20px]'>Schedule</div>
            <div className='text-gray-400 text-xs leading-[20px]'>See more</div>
        </div>
        {scheduleData.map((thisSchedule, index)=>{
            return(
                <ScheduleList schedule={thisSchedule} />
            )
        })

        }
    </div>
  )
}
