import React from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import IMG from "../../assets/digital-marketing.webp"
import IMG1 from "../../assets/Steps-For-SEO-Process.webp"

function SeoServices() {
  return (
    <>
    <Navbarupp />
    <div>
        <img
        src={IMG}
        className='pb-20 w-[100%] h-[40rem]'
        />
    </div>
    <h1 className='text-center p-5 text-2xl tracking-wider'>Digital Marketing and SEO Services</h1>
<div className='pl-10 tracking-wider pb-10 space-y-5  text-[#656565]'>
    <p>Our build road map implementation and strategies to offer SEO, SEM, Social Media, Content,
       Affiliate, Viral, Video and Influencer Marketing services to drive traffic, leading to conversions.</p>
    <p>Over the years we hired, trained, nurtured and build a dedicated team of 
      digital marketing professionals to meet the growing demands of our clients.
</p>
    <p>Our Digital Marketing team possesses enormous experience in ideating, researching, 
      formulating roadmaps and executing organic and paid campaigns. We meticulously plan, 
      conduct audit on web assets, identify gals, recommend solutions and plan campaign execution. 
      We track, analyse and report on analytics for continuous improvement</p>
    <p>Increasing visibility, driving traffic, generating leads culminating into 
      conversions helps our clients to attain the desired objectives.</p>
      </div>
    <div className='pl-[15%]'>
      <img
      src={IMG1}
      />

    </div>
    <h1 className='text-2xl tracking-wider pl-10 pb-2'>We offer SEO and Digital Marketing Services in the following areas:</h1>
    <div className='pl-10 space-y-3 pb-10  text-[#656565]' >
      <p>Search Engine Optimization (SEO)</p>
      <p>Search Engine Marketing (SEM)</p>
      <p>Social Media Optimization (SMO)</p>
      <p>Social Media Marketing (SMM)</p>
      <p>Online Reputation Management (ORM)</p>
      <p>Online Branding</p>
      <p>Affiliate Marketing</p>
      <p>Content Marketing</p>
      <p>Video Marketing</p>
      <p>Viral Marketing</p>
      <p>Influencer Marketing</p>
    </div>
    <Approch />
    </>
  )
}

export default SeoServices