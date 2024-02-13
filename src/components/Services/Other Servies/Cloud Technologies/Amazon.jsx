import React from 'react'
import Navbarupp from '../../../Home/Navbar/Navbarupp'
import Approch from '../../../Home/APProchUs/Approch'
import IMG1 from "../../../assets/Aws/Aws2.jpg"
import IMG2 from "../../../assets/Aws/AWS3.png"
import IMG3 from "../../../assets/Aws/aws4.png"
import IMG4 from "../../../assets/Aws/Application AWS.webp"
import { LuDatabaseBackup } from "react-icons/lu";
import { SiWebstorm } from "react-icons/si";
import { SiEslgaming } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { LuBarChartBig } from "react-icons/lu";
import { GiBrain } from "react-icons/gi";
import { RiNotificationBadgeLine } from "react-icons/ri";
import { PiVirtualRealityBold } from "react-icons/pi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { FaInternetExplorer } from "react-icons/fa6";
import "./Amazon.css"
import Footer3 from '../../UniqueTeam/footer3'




function Amazon() {
    return (
        <>
            <Navbarupp />
            <div>
                <img
                    src={IMG1}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='flex flex-col md:flex-row md:items-center p-5'>
                <img
                    src={IMG2}
                    className='rounded-full w-1/2  '
                />
                <div className='p-5 space-y-2'>
                    <h1 className='text-3xl'>What is Cloud Computing?</h1>
                    <p className='text-xl'>Cloud computing is the delivery of online services (such as servers, databases, software) to users.
                        With the help of cloud computing, storing data on local machines is not required.
                        It helps you access data from a remote server. Moreover,
                        it is also used to store and access data from anywhere across the world.</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:items-center p-10'>
                <div className='space-y-10 p-5'>
                    <h1 className='text-3xl '>What is AWS?</h1>
                    <ul className='text-xl space-y-12 '>
                        <li className='flex items-center '>
                            <svg class="w-10 h-3.6 me-2 text-green-400 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>AWS Meaning: The Amazon Web Services (AWS) platform provides more than 200 fully featured services
                            from data centers located all over the world, and is the world's most comprehensive cloud platform.</li>
                        <li className='flex items-center'>
                            <svg class="w-10 h-3.6 me-2 text-green-400 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>Amazon web service is an online platform that provides scalable and cost-effective cloud computing solutions.</li>
                        <li className='flex items-center'>
                            <svg class="w-10 h-3.6 me-2 text-green-400 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>AWS is a broadly adopted cloud platform that offers several on-demand operations like compute power,
                            database storage, content delivery, etc., to help corporates scale and grow.</li>
                    </ul>

                </div>
                <img src={IMG3}
                />
            </div>

            <div className='p-10'>
                <img
                    src={IMG4}
                    className='mx-auto w-3/4 lg:w-[80%] xl:w-[70%] mb-10'
                />
                <div className='bg-[#064e3b] text-white rounded-lg shadow-2xl overflow-hidden relative p-10'>
                    <h1 className='text-3xl font-bold mb-5'>Applications of AWS</h1>
                    <p className='text-xl mb-10'>
                        The most common applications of AWS are storage and backup, websites, gaming, mobile, web, and social media applications.
                        Some of the most crucial applications in detail are as follows:
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <ul className='space-y-5'>
                            <li className='flex text-xl gap-5'><LuDatabaseBackup className='text-8xl' /> Storage and Backup</li>
                            <li className='flex text-xl gap-5'><SiWebstorm className='text-8xl' />Websites</li>
                            <li className='flex text-xl gap-5'><SiEslgaming className='text-8xl' />Gaming</li>
                        </ul>
                        <ul className='space-y-5'>
                            <li className='flex text-xl gap-5'><FaMobileAlt className='text-8xl' />Mobile, Web and Social Applications</li>
                            <li className='flex text-xl gap-5'><LuBarChartBig className='text-8xl' />Big Data Management and Analytics (Application)</li>
                            <li className='flex text-xl gap-5'><GiBrain className='text-8xl' />Artificial Intelligence</li>
                        </ul>
                        <ul className='space-y-5'>
                            <li className='flex text-xl gap-5'><RiNotificationBadgeLine className='text-8xl' />Messages and Notifications</li>
                            <li className='flex text-xl gap-5'><PiVirtualRealityBold className='text-8xl' />Augmented Reality and Virtual Reality</li>
                            <li className='flex text-xl gap-5'><TbDeviceGamepad2 className='text-8xl' />Game Development</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='p-10 border-2 bg-[#064e3b] text-white rounded-lg shadow-2xl overflow-hidden relative space-y-5'>
                <h1 className='text-3xl font-bold p-5 '>Advantages of AWS</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    <ul className='space-y-5'>
                        <li>1.AWS provides a user-friendly programming model, architecture, database as well as operating system that has been already known to employers. </li>
                        <li>2.AWS is a very cost-effective service. There is no such thing as long-term commitments for anything you would like to purchase. </li>
                        <li>3.It offers billing and management for the centralized sector, hybrid computing, and fast installation or removal of your application in any location with few clicks. </li>
                    </ul>
                    <ul className='space-y-5'>
                        <li>4.There is no need to pay extra money on running data servers by AWS. </li>
                        <li>5.AWS offers a total ownership cost at very reasonable rates in comparison to other private cloud servers.  </li>
                    </ul>
                </div>
            </div>

            <Footer3 />
        </>
    )
}

export default Amazon