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
            <div className='p-[20%] md:p-24 md:ml-[35%] shadow-2xl bg-black border-8 text-white border-[#d946ef] md:w-[30%] rounded-[50%] md:h-[27rem] '>
                <div className='p-10'>
                <div className='flex space-x-1 justify-center '>
                    <h1 className='text-4xl'>S</h1><p className='p-2'>Social</p>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-4xl'>M</h1><p className='p-2'>Media</p>
                </div>
                <div className='flex justify-center '>
                    <h1 className='text-4xl ml-5'>M</h1><p className='p-2'>Marketing</p>
                </div>
                </div>
            </div>
            <div className='flex text-6xl  md:justify-center space-x-6 pt-10 '>
                <div>
                    <SlSocialGoogle className='text-blue-500 shadow-2xl fade-left' />
                </div>
                <div>
                    <SlSocialYoutube className='text-red-500 shadow-2xl' />
                </div>
                <div>
                    <SlSocialFacebook className='text-blue-700 shadow-2xl' />
                </div>
                <div>
                    <SlSocialInstagram className='text-pink-500 shadow-2xl' />
                </div>
                <div>
                    <SlSocialLinkedin className='text-indigo-500 shadow-2xl fade-right' />
                </div>
            </div>
        </>
    )
}

export default Main
