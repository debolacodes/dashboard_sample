import React from 'react'
import Avatar from '../Avatar'
import Navigation from '../Navigation'
import LogoIcon from '../../assets/logo.svg'
import CommunityIcon from '../../assets/images.png'
import MenuIcon from '../../assets/menu.svg'
export default function Sidebar({toggleSideBar}) {
  return (
    <div className='w-[300px] p-[30px] bg-white h-full 
    absolute md:relative z-100 shadow-2xl
    flex flex-col justify-between'>
      <div className='w-[50px] h-[50px] cursor-pointer
      absolute right-0 top-0 md:opacity-0 bg-gray-200 content-center
      ' onClick={()=>toggleSideBar()}>
        <img src={MenuIcon} className='w-[30px] h-[30px] m-auto' />
      </div>
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
