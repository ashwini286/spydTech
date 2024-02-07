import React from 'react'
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import Navbarupp from '../../../Home/Navbar/Navbarupp';
import Approch from '../../../Home/APProchUs/Approch';

function Main() {
  return (
    <>
    
    <div className='p-24 ml-[35%] shadow-2xl 
    bg-black border-8 text-white border-[#d946ef] w-[30%] rounded rounded-[50%] h-[20rem] '>
        <div className='flex space-x-1 '>
            <h1 className='text-4xl'>S</h1 ><p className='p-2'>Social</p>
        </div>
        <div className='flex'>
            <h1 className='text-4xl'>M</h1><p className='p-2'>Media</p>
        </div>
        <div className='flex'>
            <h1 className='text-4xl'>M</h1><p className='p-2'>Marketing</p>
        </div>
    </div>
    <div className='flex text-6xl justify-center space-x-6 pt-10 '>
        <div>
            <SlSocialGoogle className='text-blue-500 shadow-2xl fade-lef' />
        </div>
        <div>
            <SlSocialYoutube className='text-red-500 shadow-2xl' />
        </div>
        <div>
            <SlSocialFacebook className='text-blue-700 shadow-2xl'/>
        </div>
        <div>
            <SlSocialInstagram className='text-pink-500 shadow-2xl'/>
        </div>
        <div>
            <SlSocialLinkedin  className='text-indigo-500 shadow-2xl fade-right' />
        </div>
    </div>
    
    </>
  )
}

export default Main