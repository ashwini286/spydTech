import React from 'react'
import img1 from '../../../assets/PhpImg/img1.png';
import img2 from '../../../assets/PhpImg/img2.png';
import img5 from '../../../assets/PhpImg/img5.png';
const PythonAppDevelopment = () => {
    return (
        <>
            <div className='md:m-20 pt-8 pl-4'>
                <div className='md:px-8' >
                    <div >
                        <p className='md:text-4xl font-bold  text-[#656565]'>Python App Development – Outsourcing, Offshore, Offsite Resources</p>
                    </div>
                    <div>
                        <p className='md:text-xl py-4   text-[#656565]  text-sm '>Drawing upon our core expertise, we provide highly trained, certified, and extensively experienced Python developers for Offshore and Offsite Projects Execution.</p>
                        <p className='md:text-xl py-4   text-[#656565] text-sm' >The landscape of mobile application development is constantly evolving. Today's technologies become obsolete tomorrow, driving the need for continuous adaptation to new and emerging technologies. Our adept team of mobile app developers is deeply experienced and stays in sync with emerging technologies, ensuring they remain at the forefront of the industry's best and latest advancements.</p>
                        <p className='md:text-xl py-4   text-[#656565] text-sm' >Our Python developers have been strategically deployed across diverse industry sectors and niches. Collaborating with top-tier companies, they deliver cutting-edge mobile apps that not only meet but exceed the growing requirements of our clients and their customers.
                        </p>
                    </div>
                </div>














                <div className='flex md:flex-row justify-center items-center flex-col gap-8 mt-8'>
        <div className='md:w-[370px] w-full'> 
         <div className='flex flex-col items-center'>
         <div>
                <img src={img1}  className=' bg-[#fff]'/>
            </div>
            <div className=" h-full pt-6 pl-4  text-[#656565] ">
                <p className='text-center'>DEVELOPMENT SKILLS</p>
            </div>
         </div>
         
          </div>

          <div className='md:w-[370px] w-full'> 
         <div className='flex flex-col items-center justify-center'>
         <div>
                <img src={img2}  className=' bg-[#fff]'/>
            </div>
            <div className=" h-full pt-6 pl-4  text-[#656565] ">
                <p className='text-center'>DEVELOPMENT SKILLS</p>
            </div>
         </div>
         
          </div>

          <div className='md:w-[370px] w-full'> 
         <div className='flex flex-col items-center'>
         <div>
                <img src={img5}  className=' bg-[#fff]'/>
            </div>
            <div className=" h-full pt-6 pl-4  text-[#656565] ">
                <p className='text-center'>DEVELOPMENT SKILLS</p>
            </div>
         </div>
         
          </div>
        </div>
            </div>
        </>
    )
}

export default PythonAppDevelopment