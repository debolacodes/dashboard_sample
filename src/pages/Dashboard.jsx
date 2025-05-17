import React from 'react'
import Sidebar from '../components/templates/Sidebar'
import MainBar from '../components/templates/MainBar'
import MainPage from '../components/templates/MainPage'
import TopContents from '../components/templates/TopContents'
import BottomContent from '../components/templates/BottomContent'
import Title from '../components/Title'
import Analytics from '../components/Analytics'
import ReactIcon from '../assets/react.svg'
import MyBarChart from '../components/MyBarChart'
import Schedule from '../components/Schedule'
import Advert from '../components/Advert'
import Socials from '../components/Socials'

export default function Dashboard() {
  return (
    <MainPage>
      
        <Sidebar />
        <MainBar >
          <TopContents >
            <div className='w-full min-w-[70%]'>
              <Title
                title="Dashboard"
                subtitle="Welcome back, Robert"
                actionButtons={[
                  {
                    icon: ReactIcon,
                    action: ()=>{
                      alert("Button 1")
                    }
                  },
                  {
                    icon: ReactIcon,
                    action: ()=>{
                      alert("Button 2")
                    }
                  }
                ]}
              ></Title>
              <div className='w-full flex gap-[10px] gap-[20px]'>
                <div className='w-1/2'><Analytics icon={ReactIcon} title="Revenue" value="$950,000"/></div>
                <div className='w-1/2'><Analytics icon={ReactIcon} title="Revenue" value="$950,000"/></div>
              </div>
              <MyBarChart 
                title="Total Hours spent"
                data={
                    [
                      { "day": "Mon", "male": 732, "female": 481 },
                      { "day": "Tue", "male": 649, "female": 925 },
                      { "day": "Wed", "male": 388, "female": 712 },
                      { "day": "Thu", "male": 587, "female": 413 },
                      { "day": "Fri", "male": 993, "female": 569 },
                      { "day": "Sat", "male": 254, "female": 834 },
                      { "day": "Sun", "male": 791, "female": 622 }
                    ]
                  }
              />
            </div>
            
            <div className='w-full min-w-[30%]'>
                <Advert />
                <Schedule />
            </div>
          </TopContents>
          <BottomContent>
            <div className='w-[150px] content-center'>
                  <div className='font-medium text-xl'>Channels</div>
                  <div className='text-sm text-gray-400 mt-[10px]'>Your statistics for 1 week period</div>
            </div>
            <div className='w-full md:flex md:gap-[20px] ml-[50px]'>
                  <Socials 
                  icon={ReactIcon}
                  title="Dribble"
                  id="@grafart"
                  value="2%"
                  />
                  <Socials 
                  icon={ReactIcon}
                  title="Dribble"
                  id="@grafart"
                  value="2%"
                  />
                  <Socials 
                  icon={ReactIcon}
                  title="Dribble"
                  id="@grafart"
                  value="2%"
                  />
                  <Socials 
                  icon={ReactIcon}
                  title="Dribble"
                  id="@grafart"
                  value="2%"
                  />
            </div>
            <div className='bg-purple-300 w-[120px] h-[140px] rounded-2xl
            absolute right-[-20px]
            '>
                    
            </div>
          </BottomContent>
        </MainBar>
    </MainPage>
    
  )
}
