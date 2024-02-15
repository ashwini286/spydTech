import React from 'react'
import Navbarupp from '../../../Home/Navbar/Navbarupp'
import IMG1 from "../../../assets/Azure/Azure2.png"
import IMG2 from "../../../assets/Azure/Azure4.avif"
import IMG3 from "../../../assets/Azure/Azure5.png"
import "./Azure.css"
import Approch from '../../../Home/APProchUs/Approch'
function Azure() {
  return (
    <>
    <Navbarupp />
    <div className="">
     <img 
     src={IMG1}
     alt="Azure"
     />
    </div>

    <div className="relative max-w-10xl transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 border-gray-500 shadow-3 scale shadow-2xl overflow-hidden shyam">
       
    <img 
    src={IMG2}
    className="w-full h-[30rem] object-fill"
    />
   
  <figcaption className="absolute px-4 text-4xl text-gray-900 bottom-52 pl-10">
   <div className=''>
   <img 
      src={IMG3}
      className='w-[25%] h-[35%] object-cover'
      alt="Your Alt Text"
    />
    </div>
      <p>Develop your Skills next app with your Azure </p>
  </figcaption>
</div>




<div className='bg-gray-900 text-white p-10 md:p-20 rounded-lg shadow-5'>

        <h1 className='text-4xl'>What is Azure?</h1>
        <p className='text-xl'>The Azure cloud platform is more than 200 products and cloud services designed to help you bring new solutions 
            to life—to solve today’s challenges and create the future. 
            Build, run, and manage applications across multiple clouds, on-premises, and at the edge, with the tools and frameworks of your choice.</p>
    </div>
   
    
    <div className="p-10 md:p-20 bg-gray-900 space-y-10">
  <h1 className="text-4xl text-white text-center">Azure App services</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center text-white text-3xl font-bold">
    <div className="flex h-[15rem] justify-center rounded-lg bg-gray-500 text-center shadow-3 transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 shadow-2xl overflow-hidden shyam">
      <code className="self-center">
        <h1>Azure Virtual Machines—Windows</h1>
        <p></p>
      </code>
    </div>
    <div className="flex h-[15rem] justify-center rounded-lg bg-gray-500 text-center shadow-3 transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 shadow-2xl overflow-hidden shyam">
      <code className="self-center">
        <h1>Azure Virtual Machines—Linux</h1>
        <p></p>
      </code>
    </div>
    <div className="flex h-[15rem] justify-center rounded-lg bg-gray-500 text-center shadow-3 transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 shadow-2xl overflow-hidden shyam">
      <code className="self-center">
        <h1>Azure SQL Database</h1>
        <p></p>
      </code>
    </div>
    <div className="flex h-[15rem] justify-center rounded-lg bg-gray-500 text-center shadow-3 transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 shadow-2xl overflow-hidden shyam">
      <code className="self-center">
        <h1>Azure Blob Storage</h1>
        <p></p>
      </code>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center text-white text-3xl font-bold">
    <div className="flex h-[15rem] justify-center rounded-lg bg-gray-500 text-center shadow-3 transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 shadow-2xl overflow-hidden shyam">
      <code className="self-center">
        <h1>Azure Cosmos DB</h1>
        <p></p>
      </code>
    </div>
    <div className="flex h-[15rem] justify-center rounded-lg bg-gray-500 text-center shadow-3 transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 shadow-2xl overflow-hidden shyam">
      <code className="self-center">
        <h1>Azure App Service</h1>
        <p></p>
      </code>
    </div>
    <div className="flex h-[15rem] justify-center rounded-lg bg-gray-500 text-center shadow-3 transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 shadow-2xl overflow-hidden shyam">
      <code className="self-center">
        <h1>Azure Functions</h1>
        <p></p>
      </code>
    </div>
    <div className="flex h-[15rem] justify-center rounded-lg bg-gray-500 text-center shadow-3 transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 shadow-2xl overflow-hidden shyam">
      <code className="self-center">
        <h1>Azure Event Grid</h1>
        <p></p>
      </code>
    </div>
  </div>
  <h1 className="text-white text-4xl text-center pt-10">Here's just some of what you can do with Azure</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center text-white text-xl">
    <div className="flex h-[15rem] justify-center rounded-lg bg-gray-500 text-center shadow-3 transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 shadow-2xl overflow-hidden shyam">
      <code className="self-center">
        <h1>Azure App Service</h1>
        <p>Build and host your first web or mobile app using the languages, tools, and platform of your choice</p>
      </code>
    </div>
    <div className="flex h-[15rem] justify-center rounded-lg bg-gray-500 text-center shadow-3 transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 shadow-2xl overflow-hidden shyam">
      <code className="self-center">
        <p>Use a relational database-as-a-service to host your high-performance, data-driven apps</p>
      </code>
    </div>
    <div className="flex h-[15rem] justify-center rounded-lg bg-gray-500 text-center shadow-3 transition-all duration-300 cursor-pointer filter scale hover:scale-75 border-4 shadow-2xl overflow-hidden shyam">
      <code className="self-center">
        <h1>Azure Event Grid</h1>
        <p>Manage and monitor apps to help diagnose issues, improve performance, and assess usage</p>
      </code>
    </div>
  </div>
</div>

    <Approch />
    </>
  )
}

export default Azure