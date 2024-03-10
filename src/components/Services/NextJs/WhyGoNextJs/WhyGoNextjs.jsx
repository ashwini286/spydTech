import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const WhyGoNextjs = () => {
    useEffect(() => {
        AOS.init();
      });
  return (
    <>
    <div className=' md:pt-16 pt-8 md:pl-24' >
        <div className='flex justify-center items-center flex-col' data-aos="fade-up">
            <div className='md:text-4xl  text-black mb-4 text-2xl'>
                Why Go NextJS
            </div>
            <div className='text-xl  text-black text-center '>
                These solutions efficiently meet the complex business goals.
            </div>
        </div>

        <div className='grid md:grid-cols-2 p-6 gap-8'>
            <div className='' data-aos="fade-left">
                <p className="py-4 text-xl  text-black">Optimize Your Performance with Next.js Sky High Efficiency</p>
                <p className=' text-black'>Next.js is an open-source framework, freely available, that excels as a server environment. What sets Next.js apart is its remarkable compatibility across diverse operating systems and platforms, including Windows, Linux, UNIX, and Mac OS. Elevate your performance with Next.js Sky High Efficiency.</p>
            </div>
            <div className='' data-aos="fade-right">
                <p className="py-4 text-xl  text-black">Unleash Scalability with Next.js</p>
                <p className=' text-black'>One of the standout features of Next.js lies in its highly scalable nature. Operating as a runtime environment based on the V8 JavaScript engine, Next.js seamlessly adapts for use in both frontend and backend development. Streamlining the entire process, Next.js makes building dynamic applications exceptionally straightforward, ensuring swift, scalable, and data-driven web application development.</p>

            </div>
        </div>

    </div>
</>
  )
}

export default WhyGoNextjs