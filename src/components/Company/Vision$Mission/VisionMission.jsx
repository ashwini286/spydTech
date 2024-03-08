import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Approch from '../../Home/APProchUs/Approch';

import Mision from '../../assets/vision&Mision/mission1.jpg'
import { Link } from 'react-router-dom';
const VisionMission = () => {
  return (
    <>
     <div>
        <Navbarupp />
      </div>
      <img
        // src={Mision}
        src="https://media.licdn.com/dms/image/C4D12AQHPv5hmq5G8ww/article-inline_image-shrink_1500_2232/0/1586261849362?e=1712188800&v=beta&t=roodMyJsySE8nOmLb58CT7y8QJUEJOPTLVhf6iiLOA8"
        // className=" object-cover w-full h-[550px]"
        className=" object-cover w-full"
        alt="Background Image"
      />

      <div>
        <div className='bg-blue-gray-50 pl-4  text-black  mt-16 pb-16 '>
          <div className='text-center py-8 text-xl font-bold underline decoration-slate-200 '> MISSION & VISION </div>
          <div className='flex justify-center items-center flex-col  md:flex-row gap-8'>
            <div className='sm:w-full md:px-4  md:w-[50%] '>
              <div className='pb-8  text-center text-xl underline'>
                MISSION
              </div>
              <div className='md:text-md '>
                <div className='flex flex-row items-center gap-5'>
                  <div className='text-blue-800'><VerifiedOutlinedIcon /></div>
                  <p className='md:text-md'>SPY D Tech's mission is singular and unequivocal — to establish ourselves as a company dedicated to cost optimization while maximizing profits for our clients. We firmly believe that the success of our clients is intrinsic to our own success, and this philosophy underlines every aspect of our mission.</p>
                </div>
                <div className='flex flex-row items-center gap-5'>
                  <div className='text-blue-800'><VerifiedOutlinedIcon /></div>
                  <p className='md:text-md  pt-4'>Our primary mission is to provide solutions that not only meet the technological needs of our clients but also contribute to their financial success. We understand the importance of cost-effectiveness in today's competitive landscape, and our mission is centered around delivering value that extends beyond the initial investment.</p>
                </div>

              </div>
            </div>
            <div className='md:px-4 object-cover'>
              {/* <img src="https://lh3.googleusercontent.com/proxy/35XFQa9A9mccjvm7sdNZxLaZYjVvdXPXfRVw3UQvyYb64D3nvUuz0JI9zpW-wscvRSUEsTRqXgawwgt2E2Gx0IQ" /> */}
               <img src='https://www.rkdf.ac.in/images/img/mission.png'/>
            </div>
          </div>

        <hr/>


          <div className='flex justify-center items-center flex-col md:flex-row gap-8'>

            <div className='md:px-4 object-cover'>
              <img src="https://s.yimg.com/ny/api/res/1.2/9WmC5xtZ191i8yQ6o6nzAg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY5MDtoPTM5MA--/https://media.zenfs.com/en_SG/News/e27/Vision_entrepreneurs_ecosystem.png" />
              

            </div>
            <div className='sm:w-full md:px-4 md:w-[50%] '>
              <div className='pb-8  text-center text-xl underline'>VISION</div>
              <div className='flex flex-row items-center gap-5'>
                <div className='text-blue-800'><VerifiedOutlinedIcon /></div>
                <p className='md:text-md'>At SPY D Tech, our vision extends beyond conventional success metrics. We aspire not just to be an internationally reputed company, but to be a trailblazer in the realm of emerging technologies. We envision a future where SPY D Tech stands synonymous with innovation, consistently delivering quality solutions that go beyond meeting expectations to truly delight our clients.</p>
              </div>

              <div className='flex flex-row items-center gap-5'>
                <div className='text-blue-800'><VerifiedOutlinedIcon /></div>
                <p className='md:text-md  pt-4'>Our vision is rooted in a commitment to staying at the forefront of technological advancements. We understand that the landscape of technology is dynamic, and our vision is to not only adapt but to proactively shape the future. By embracing emerging technologies, we aim to set new standards, redefine user experiences, and contribute to the overall progress of the IT industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Approch />
      {/* <Footer /> */}


    </>
  )
}

export default VisionMission