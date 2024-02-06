import React from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import IMG from "../../assets/PPC-2.jpg"
import IMG1 from "../../assets/Digital-marketing-PPC1.jpg"
function PPCManagement() {
  return (
    <>
    <Navbarupp />
    <div>
      <img 
      src={IMG}
      className='w-[100%] h-[35rem] pb-10'
      />
    </div>
    <h1 className='text-2xl text-center '>Digital Marketing and PPC Services and Management Strategy</h1>
    <p className='text-left tracking-wider p-12 text-gray-500'>Pay per Click ( PPC ) is advertising service offered by search engines such as Google, Bing, 
        Yahoo and social media platforms such as Facebook, Twitter, LinkedIn, and Instagram. 
        Google’s Ad Words is the most popular ad campaign targeted using the relevant keywords, 
        and geography. As this technique leverages demography, geography, and users interests, 
        it offers immediate and instant visibility wherever the ad is placed either 
        on search engines or on the chosen social media platform. The analytics are 
        extensively used to track, analyse the report and make informed decisions. 
        We aspirant soft solutions provide best PPC services in Hyderabad.</p>

        <div className='bg-[#65a30d] h-[35rem] p-10 w-[100%]  flex'>
          <img
          src={IMG1}
          className='h-[80%]'
          />
          <div>
            <p className='text-2xl '>MORE ABOUT</p>
            <h1>PPC Services Strategy</h1>
            <p>Though we’re a PPC agency based in Hyderabad, we also provide PPC services in Bengaluru, India and across the globe.</p>
            <h1>Strategic keyword recommendations</h1>
            <h1>Bid Management</h1>
            <h1>PPC Copywriting</h1>
            <h1>ROI rate report</h1>
          </div>
        </div>
    <Approch />
    </>
  )
}

export default PPCManagement