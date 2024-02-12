import React from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import IMG2 from "../../assets/Microsoft/CRM-Main.jpg"

function Microsoft() {
  return (
    <>
    <Navbarupp />
    <div className='p-10 flex flex-col md:flex-row md:items-center'>
  <img 
    src={IMG2} 
    className='w-full md:w-1/2 h-64 md:h-auto'
    alt="Image"
  />
  <div className='md:ml-10 p-10 space-y-5'>
    <h1 className='text-3xl font-bold'>What is CRM?</h1>
    <p>Customer relationship management (CRM) is a set of integrated, data-driven software solutions that help manage, 
      track, and store information related to your company’s current and potential customers. 
      By keeping this information in a centralized system, business teams have access to the insights they need,
      the moment they need them.</p>
  </div>
</div>
<div>
  <div>

  </div>
  <img />
</div>
    <Approch />
    </>
  )
}

export default Microsoft