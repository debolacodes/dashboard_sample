import React from 'react'
import Avatar from '../Avatar'
import Navigation from '../Navigation'
import LogoIcon from '../../assets/logo.svg'
import CommunityIcon from '../../assets/images.png'
export default function Sidebar() {
  return (
    <div className='w-[300px] p-[30px]  h-full flex flex-col justify-between'>
      <div>
        <div className='w-full h-[35px]'>
          <img src={LogoIcon} className='object-contain w-full h-full' />
        </div>

        <Avatar />
        <Navigation />
      </div>
      <div>
        <img src={CommunityIcon} className='h-[50px] m-auto' />
        <div className='font-semibold text-primary text-sm text-center'>Join the community <br/> to find out more</div>
      </div>
    </div>
  )
}
