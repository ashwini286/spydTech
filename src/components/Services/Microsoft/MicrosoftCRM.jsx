import React from 'react'
import IMG from "../../assets/Microsoft/CRM1.png"
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import IMG1 from "../../assets/Microsoft/CRM (21).jpg"
import IMG2 from "../../assets/Microsoft/CMR sevices1.png"
import IMG3 from "../../assets/Microsoft/CMR sevices2.png"
import IMG4 from "../../assets/Microsoft/CMR sevices3.png"
import IMG5 from "../../assets/Microsoft/CMR sevices4.png"
import IMG6 from "../../assets/Microsoft/CMR sevices5.png"
import IMG7 from "../../assets/Microsoft/CMR sevices6.png"
import IMG8 from "../../assets/Microsoft/dynamic-crm.png"

function MicrosoftCRM() {
  return (
    <>
    <Navbarupp />
    <div className=''>
        <img 
        className='w-full '
        src={IMG}
        />
        
    </div>
    <div className='flex flex-wrap'>
        <img src={IMG1} className='w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/3 md:ml-10' alt="Microsoft CRM Image 1" />
        <div className='ml-4 sm:ml-36 mt-6 w-full sm:w-1/4 md:w-2/4 lg:w-2/4 xl:w-2/4 text-gray-500'>
           <p className='pb-5'>Creating, Engaging, Building, Nurturing Customer Relations is at the heart of any business.
                 We take care of the entire gamut of building robust, 
                 scalable CRM platforms to help our customers attract, engage, build and retain customers.</p>
             <p className='pb-5'>Our team of high powered technologists possess deep expertise in multiple state of the art technologies such as Salesforce,
                 Microsoft Technologies to build and deploy CRM platforms that offers a plethora of service 
                 such as sales, marketing, customer service, social engagement, and analytics.</p>  
                 <p className='pb-5'>Our services in CRM is not just confined to building and deployment but we also provide training, 
                    manual documentation and maintenance services.</p>   
              <p className='pb-5'>The best part of Aspirant Soft Solutions is that we go beyond building and deploying Customer 
                Relationship Management applications. We excel in business integration services and integrate 
                the new CRM applications with the existing applications seamlessly for smooth operations.</p>  
                <p className='pb-5'>We use, implement and leverage state of the art technologies that are in consonance 
                    with the existing technologies to ensure the integration process is smooth for efficient operations.</p>       
        </div>
    </div>
    <h1 className='text-4xl text-center pt-10 text-gray-500'>Our CRM Services include</h1>
    <div className=''>
  <div className='flex flex-wrap p-10 text-gray-500 '>
    <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
      <div className="flex flex-col items-center">
        <img src={IMG2} className='mx-auto w-48 md:ml-20 p-4' alt="Image 2" />
        <p className='text-center'>Enhancing the existing functionality</p>
      </div>
    </div>
    <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
      <div className="flex flex-col items-center">
        <img src={IMG3} className='mx-auto w-48 md:ml-20 p-4' alt="Image 3" />
        <p className='text-center'>Increase in-house capability to deploy single tenant and multi-tenant solutions</p>
      </div>
    </div>
    <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
      <div className="flex flex-col items-center">
        <img src={IMG4} className='mx-auto w-48 md:ml-20 p-4' alt="Image 4" />
        <p className='text-center'>Offer user-friendly design with special settings installation</p>
      </div>
    </div>
  </div>
  <div className='flex flex-wrap p-10 '>
    <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
      <div className="flex flex-col items-center">
        <img src={IMG5} className='mx-auto w-48 md:ml-20 p-4' alt="Image 5" />
        <p className='text-center'>Provide workflow customizations specific to your company’s business processes</p>
      </div>
    </div>
    <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
      <div className="flex flex-col items-center">
        <img src={IMG6} className='mx-auto w-48 md:ml-20 p-4' alt="Image 6" />
        <p className='text-center'>Extending the solutions to WCF web services</p>
      </div>
    </div>
    <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
      <div className="flex flex-col items-center">
        <img src={IMG7} className='mx-auto w-48 md:ml-20 p-4' alt="Image 7" />
        <p className='text-center '>Offer advanced customization that requires integration with third-party solutions</p>
      </div>
    </div>
  </div>
</div>


<div className='bg-[#0ea5e9] p-10 text-center text-white'>
  <h1 className='text-center text-2xl lg:text-4xl pb-2'>Microsoft CRM</h1>
  <p className='text-sm lg:text-base'>Aspirant provides Customer Relationship Management (CRM) solutions specially designed by our experts to meet our clients' ever-demanding needs. We utilize our domain expertise to implement SMBs and LMEs level solutions that meet all the business needs of our clients. With our deep knowledge of CRM processes, we are experts in building multichannel customer interactive systems and Microsoft CRM architecture that reduces the total cost involved in the actual development and enhances the overall services.</p>
</div>

<div>
  <h1 className='text-4xl lg:text-5xl text-center text-gray-500 pt-5'>The key benefits of CRM solutions include</h1>
  <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-start md:ml-10'>
    <img src={IMG8} className='p-5 lg:pl-0' alt="Key Benefits Image" />
    <div className='ml-0 lg:ml-10 mt-2 space-y-5 lg:space-y-0 text-gray-500'>
      <div className="flex items-center">
        <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
        <p className="text-sm lg:text-base">Pay-as-you-go pricing model</p>
      </div>
      <div className="flex items-center">
        <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
        <p className="text-sm lg:text-base">Dedicated API for each service offered</p>
      </div>
      <div className="flex items-center">
        <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
        <p className="text-sm lg:text-base">Increase profitability and efficiency</p>
      </div>
      <div className="flex items-center">
        <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
        <p className="text-sm lg:text-base">Seamless Database Management</p>
      </div>
      <div className="flex items-center">
        <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
        <p className="text-sm lg:text-base">Security through compliance program and highly secure data centers</p>
      </div>
      <div className="flex items-center">
        <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
        <p className="text-sm lg:text-base">Scalability regardless of application size</p>
      </div>
    </div>
  </div>
  <p className='p-6 text-sm lg:text-base text-gray-500'>With more than a decade of experience, our CRM Development India team has achieved a new height of unprecedented success through our CRM solutions and services and helped us to explore a new dimension to customer service. We also focus on leveraging the platform to support any relationship scenario you want to develop with our CRM services.</p>
</div>


    <Approch />
    </>
  )
}

export default MicrosoftCRM