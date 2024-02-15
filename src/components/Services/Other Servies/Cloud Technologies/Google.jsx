import React from 'react'
import Navbarupp from '../../../Home/Navbar/Navbarupp'
import IMG1 from "../../../assets/Google cloud/main1.avif"
import IMG2 from "../../../assets/Google cloud/main2.png"
import IMG3 from "../../../assets/Google cloud/gcp service 1.png"
import IMG4 from "../../../assets/Google cloud/gcp-data-storage.png"
import IMG5 from "../../../assets/Google cloud/gcp-gke-network.png"
import IMG6 from "../../../assets/Google cloud/big data.png"
import IMG7 from "../../../assets/Google cloud/machine learning.webp"
import "./google.css"
import Approch from '../../../Home/APProchUs/Approch'

function Google() {
  return (
    <>
    <Navbarupp />
    <div className='flex'>
        <img 
        src={IMG1}
        className='w-[150rem] h-[35rem] object-cover rounded-lg  '
        />
    </div>
    <div className='justify-center p-10 bg-gray-500  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-75 border-4 border-gray-500 shadow-3 scale shadow-2xl overflow-hidden'>
        <h1 className='text-4xl text-center'>What Is Cloud Computing?</h1>
        <div className='p-10'>
            <img 
            src={IMG2}
            />
        </div>
    </div>
    <div className='p-10'>
        <h1 className='text-4xl'>What are Google Cloud Platform services?</h1>
        <p className='text-xl pt-5'>Each GCP region offers a category of services. Some services are limited to specific regions.
             Major services of Google Cloud Platform include:</p>
    </div>
    <div className='p-10 flex gap-10 justify-center text-2xl text-bold'>
    <div
    class="flex w-[35%] justify-center rounded-lg bg-white text-center shadow-5 p-5 sathish">
    <code class="self-center">
        <img 
        src={IMG3}
        />
        <h1 className='pt-10'>Computing and hosting</h1> 
        </code>
  </div>
  <div
    class="flex w-[35%] justify-center rounded-lg bg-white text-center shadow-5 p-5 sathish">
    <code class="self-center">
    <img 
        src={IMG4}
        />
       <h1 className=''> Storage and database</h1></code>
  </div>
  <div
    class="flex w-[35%] justify-center rounded-lg bg-white text-center shadow-5 p-5 sathish">
    <code class="self-center">
    <img 
        src={IMG5}
        />
       <h1 className='pt-10'> Networking</h1></code>
  </div>
  </div>


  <div className='p-10 flex gap-10 justify-center text-2xl text-bold'>
  <div
    class="flex w-[35%] justify-center rounded-lg bg-white text-center shadow-5 p-5 sathish">
    <code class="self-center">
    <img 
        src={IMG6}
        />
        <h1 className='pt-10'>Big Data</h1></code>
  </div>
  <div
    class="flex w-[35%] justify-center rounded-lg bg-white text-center shadow-5 p-5 sathish">
    <code class="self-center">
    <img 
        src={IMG7}
        />
        <h1 className='pt-10'>Machine learning</h1></code>
  </div>
</div>
    <Approch />
    </>
  )
}

export default Google