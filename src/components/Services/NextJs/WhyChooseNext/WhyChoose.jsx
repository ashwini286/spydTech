import React from 'react'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
const WhyChoose = () => {
    return (
        <>
        <div className='flex flex-col md:flex-row  items-center justify-center '>
        <div className='md:w-[620px] flex justify-center items-justify flex-col md:pl-24 pl-4'>
       <div className='md:text-3xl text-gray-500 text-2xl md:px-4 py-4 md:ml-10'>
       <h1>How SPY D Tech helps its clients</h1>
       </div>
  
       <div className='md:py-4 md:px-4 '>
       <div className='flex items-center gap-6'>
          <p><RadioButtonCheckedIcon className="text-[#ff9800]" /></p>
          <p className='text-gray-400'>At SYPD Tech, we recognize the substantial advantages offered by Next.js and have seamlessly integrated it into our dynamic application development for clients. The intrinsic capabilities of Next.js empower our dedicated team of developers to swiftly create scalable, adaptable, and flexible applications, delivering significant benefits to our clients.</p>
        </div>
        <br />
        <br />
        <div className='flex items-center gap-6'>
          <p><RadioButtonCheckedIcon className="text-[#ff9800]" /></p>
          <p className='text-gray-400'>The applications we've deployed using Next.js have proven instrumental in eliminating bottlenecks for our clients. By establishing a seamless integration between the services they provide to their customers, we have contributed to enhancing their business operations, resulting in improved efficiency and heightened productivity.</p>
        </div>
        
       </div>
  
        </div>
        <div>
  
        </div>
        <div className='md:w-[620px]  text-white flex justify-center items-justify flex-col '>
        <div className=''>
  <img src="https://blog.logrocket.com/wp-content/uploads/2021/07/Building-Next-js-shopping-cart-app.png" alt="" className="hover:shadow-xl"/>
        </div>
         
        </div>
      </div>
      </>
    )
}

export default WhyChoose