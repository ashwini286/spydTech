import React from 'react'
import IMG from "../../assets/SMM.jpg"
import Main from './SMMmain/Main'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import Welcome from '../../Home/Home/Welcom'
import Media from './Media'
import MediaProcess from './MediaProcess'


function SMMpage() {
  return (
    <>
      <Navbarupp />
      <div className='relative '>
        <img
          // src={IMG}
          src='https://wallpapercave.com/wp/wp6626261.jpg'
          className=' rounded-2xl h-full overflow-hidden object-cover min-w-full min-h-full'
          style={{ filter: "brightness(30%)" }}
        />
        <div className='text-white  p-10 absolute mt-[-35%] space-y-6'>
          <h1 className='text-4xl font-bold '>SOCIAL MEDIA MARKETING</h1>
          <p className='text-2xl'>Reach out to your target audience / ultimate customer, 
            utilizing the unlimited power that social media platforms provide and the relatively low-cost budgeting: 
            Facebook, Instagram & LinkedIn </p>
        </div>
      </div>
      <div className=' text-center p-10 space-y-4'>
        <h1 className='text-4xl'>WE CAN<a>HELP YOU OUT!</a>
</h1>
<div className='text-justify text-2xl p-10'>
<p className=''>The rise of social media has an unmatched impact on everyday people’s lives around the world and in Cyprus. 
A study conducted by Statista concluded that “Social media usage is one of the most popular online activities. 
In 2018, an estimated 2.65 billion people were using social media worldwide, a number projected to increase to almost 3.1 billion 
in 2021.” A pure indication that your potential customers are surfing online on social media channels!</p>
<p className=''>Most users are using social media channels to acquire information and discuss various subjects of interest. 
  Our company  present in these social media channels, to respond to any potential customer inquiries/comments/reviews. 
  This makes social media a crucial part of our company’s digital strategy.</p>
  <p className=''>Is Our company absent from social media? Do not worry at all! DomainStar’s experience and knowledge will allow your company to utilize social media channels and reach out to the right target audience.
     DomainStar specializes in Facebook, Instagram, and LinkedIn Marketing & Management.</p>
   </div>
      </div>
      {/* <Main /> */}
      <Media />
      <MediaProcess />

      <Approch />
    </>
  )
}

export default SMMpage