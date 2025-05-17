import React from 'react'
import AdvertImage from "../assets/AD.jpg"

export default function Advert() {
  return (
    <div className='h-[170px] w-full rounded-2xl bg-gray-200'>
        <img src={AdvertImage} className='w-full h-full object-cover rounded-2xl'/>
    </div>
  )
}
