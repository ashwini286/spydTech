import React from 'react'
import img1 from '../../../assets/PhpImg/TechnicalSkill/img1.png';
import img2 from '../../../assets/PhpImg/TechnicalSkill/img2.png';
const TechnicalSkills = () => {
  return (
    <>
    <div className='pb-8 px-4 pt-8'>
        <div className='p-4'>
            <div className='text-center md:text-3xl text-gray-500 font-bold text-xl'>
<p>Technical Skills Of Our Dedicated PHP Developers</p>
            </div>
            <div className='text-center pt-4 text-gray-400 pb-8'>
<p>Our offshore PHP programmers are adept with all the modern development tools and well versed with the latest PHP version updates</p>
            </div>
        </div>

        <div className='flex md:flex-row justify-center items-center flex-col gap-8'>
        <div className='p-8 shadow-2xl border border-[#07b8de] md:w-[370px] w-full '> 
         <div className='flex flex-row '>
         <div>
                <img src={img1}  className=' bg-[#07b8de]  p-2 rounded-md'/>
            </div>
            <div className=" h-full pt-6 pl-4 text-gray-500">
                <p className=''>DEVELOPMENT SKILLS</p>
            </div>
         </div>
            <div className='pt-4 leading-8 text-gray-400 '>
                <p className=''>- PHP 7 & HTML 5 programming skills</p>
                <p>- Advance working knowledge of AJAX</p>
                <p>- Adept at JS, JQuery, Bootstrap & MySQL</p>
            </div>
          </div>

          <div className='p-8 shadow-2xl   md:w-[370px] w-full border border-[#07b8de]'> 
         <div className='flex flex-row '>
         <div>
                <img src={img1}  className=' bg-[#07b8de]  p-2 rounded-md'/>
            </div>
            <div className=" h-full pt-6 pl-4 text-gray-500">
                <p className=''>LIBRARIES</p>
            </div>
         </div>
            <div className='pt-4 leading-8 text-gray-400'>
                <p>- Not ORM</p>
                <p>- Swift Mailer</p>
                <p>- Ratchet</p>
            </div>
          </div>

          <div className='p-8 shadow-2xl  md:w-[370px] w-full border border-[#07b8de]'> 
         <div className='flex flex-row '>
         <div>
                <img src={img2}  className=' bg-[#07b8de]  p-2 rounded-md'/>
            </div>
            <div className=" h-full pt-6 pl-4 text-gray-500">
                <p className=''>TOOLS</p>
            </div>
         </div>
            <div className='pt-4 leading-8 text-gray-400'>
                <p>- PHP Designer 8, Netbeans</p>
                <p>- Nu Sphere, Eclipse</p>
                <p>- PHP Debugbar, Komodo</p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default TechnicalSkills