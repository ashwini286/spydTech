import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Development = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className='flex flex-col md:flex-row  items-center justify-center md:gap-16'>
      <div className='md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 '>
     <div className='md:text-3xl md:font-extrabold text-xl mt-10 font-bold' data-aos="fade-left">
     <h1 className='text-[#656565]'>Leading Reactjs Development Company</h1>
     </div>

     <div className='py-4  text-[#656565] md:leading-8' data-aos="fade-left">
     <p >
     React encourages a component-based architecture, where UIs are composed of independent, self-contained components that can be easily reused across different parts of an application. This modular approach enhances code maintainability and scalability, making it easier for developers to manage complex projects. Additionally, React follows a unidirectional data flow, ensuring predictable and easily traceable state management through the use of properties and state.
     </p>
     </div>

      </div>
   
      <div className='md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col '>
      <div data-aos="fade-right">


      
<img src="https://media.licdn.com/dms/image/D5612AQFq2QKHH_ztKw/article-cover_image-shrink_720_1280/0/1682659691383?e=2147483647&v=beta&t=CrLBCdOpc9ifAnvIWa_3beZHYvlKs09bjl6LpmNlnhM" alt="" className='h-[320px] shadow-xl'/>
      </div>
       
      </div>
    </div>
    </>
  )
}

export default Development