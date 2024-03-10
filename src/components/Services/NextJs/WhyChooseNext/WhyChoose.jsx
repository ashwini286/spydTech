import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
const WhyChoose = () => {
  useEffect(() => {
    AOS.init();
  });
    return (
        <>
        <div className='flex flex-col md:flex-row  items-center justify-center md:gap-8 pb-8'>
        <div className='md:w-[620px] flex justify-center items-justify flex-col md:pl-24 pl-4 h-[400px]' data-aos="fade-up">
  <div className='text-2xl text-black  md:px-4 '>
    <h1 className='pb-[40px]'>Elevate Your Projects with Next.js</h1>
  </div>

  <div className=' '>
    <div className='flex items-center gap-4'>
      <p><RadioButtonCheckedIcon className="text-[#ff9800]" /></p>
      <p className='text-black'>
        Unlocking Potential with Next.js
      </p>
    </div>
    <br />
    <br />
    <div className='flex items-center gap-4  mt-[-30px]'>
      <p><RadioButtonCheckedIcon className="text-[#ff9800]" /></p>
      <p className='text-black'>
        Next.js serves as the cornerstone of our dynamic application development. Its inherent capabilities empower our team to swiftly create scalable, adaptable, and flexible applications, delivering significant benefits to our clients.
      </p>
    </div>
    <br />
    <br />
    <div className='flex items-center gap-4  mt-[-30px]'>
      <p><RadioButtonCheckedIcon className="text-[#ff9800]" /></p>
      <p className='text-black'>
        Applications deployed using Next.js play a crucial role in eliminating bottlenecks for our clients. By seamlessly integrating the services they offer to their customers, we contribute to enhancing their business operations, resulting in improved efficiency and heightened productivity.
      </p>
    </div>
  </div>
</div>

        <div>
  
        </div>
        <div className='md:w-[620px]  text-white flex justify-center items-justify flex-col ' data-aos="fade-right">
        <div className=''>
  <img src="https://www.datocms-assets.com/48401/1644864897-next-framework.jpeg?fit=max&w=900 " alt="" className="hover:shadow-xl  pt-6"/>
        </div>
         
        </div>
      </div>
      </>
    )
}

export default WhyChoose