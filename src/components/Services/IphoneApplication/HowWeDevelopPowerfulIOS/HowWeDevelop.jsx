import React from 'react'
import Link from '../../../assets/IPhoneApplication/Line.png';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
const HowWeDevelop = () => {
  return (
    <>
    <div>
        <div className='md:text-center pt-16 pl-4'>
            <div className='md:text-3xl text-xl text-[#656565]'><p>How We Develop Powerful iOS Apps to Increase Your Business Performance</p></div>
            <div className='md:px-16 py-8 text-lg text-[#656565]'><p>
            Being one of the best iOS app development companies India, we develop iPhone and iPad apps with an intention to increase your business performance. Before developing an app, we conduct thorough research on your app objective, your competitors’ apps analysis. That’s why we are called as one of the best iOS application developers in Bangalore, India..
                </p></div>
        </div>
        <div>
            <img src={Link}/>
        </div>
        <div>
        <div className=' mt-10 md:px-8 mb-10'>
        <div className='p-4 pl-16 md:text-4xl  text-[#656565] font-bold md:mb-8'>
        How SPYD Tech helps its clients
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-8  text-[#656565]'>
          <div className='flex items-center  w-[89%] gap-4 pb-8 pl-6'>
            <p><TaskAltIcon  color="primary"  sx={{ fontSize: 40 }} /></p>
            <p>The speed, agility, scalability and interoperability are some of the key elements of a mobile application. We make sure the architecture is in consonance with all these key elements.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><TaskAltIcon  color="primary"  sx={{ fontSize: 40 }} /></p>
            <p>Our team of designers analyse the market segment, users’ demography, intended audience, features of the app and design the custom layout, navigation system aligned accordingly.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><TaskAltIcon  color="primary"  sx={{ fontSize: 40 }} /></p>
            <p>The user experience makes the key difference, as it can make or mar an app. Thus it is extremely important to lay emphasis on the UI, UX aspects.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pl-6' >
            <p><TaskAltIcon  color="primary"  sx={{ fontSize: 40 }} /></p>
            <p>The core business objectives of the app are studied by the developers and functionality is built to achieve the desires goals.</p>
          </div>
       
        </div>

      </div>
        </div>
    </div>
    </>
  )
}

export default HowWeDevelop