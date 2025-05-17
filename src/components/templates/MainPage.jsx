import React from 'react'

export default function MainPage({children}) {
  return (
    <div className='w-screen h-screen relative md:flex
     !overflow-hidden 
    '>{children}</div>
  )
}
