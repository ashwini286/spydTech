import React from 'react'
import IMG from"../../../../assets/AI and ML/AI-001.jpg"
import Navbarupp from '../../../../Home/Navbar/Navbarupp'
import Approch from '../../../../Home/APProchUs/Approch'
import AccordionItem from './AccordionItem'
import IMG1 from "../../../../assets/AI and ML/AI-01.webp"

function Ai() {
  return (
    <>
    <Navbarupp />
    <div className='w-full h-full mx-auto'>
        <img 
        src={IMG}
        className='w-[100%] h-full '
        />
        <h1 className='absolute justify-center mt-'>Artificial Intelligence</h1>
    </div>
    <div className='justify-center  bg-[#0c4a6e] p-5'>
      <img 
      src={IMG1}
      className='w-[50%] h-[25%] mx-auto  rounded-full shadow-2xl'
      />
      <div className='text-white text-center space-y-4 pt-5'>
        <h1 className='text-4xl'>What Is Artificial Intelligence?</h1>
        <p>Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence. 
          While AI is an interdisciplinary science with multiple approaches, advancements in machine learning and deep learning, 
          in particular, are creating a paradigm shift in virtually every industry.</p>
          <p>Artificial intelligence allows machines to model, or even improve upon, 
            the capabilities of the human mind. And from the development of self-driving cars to the proliferation of generative AI tools, 
            AI is increasingly becoming part of everyday life.</p>
      </div>
    </div>
 
 <h1 className='text-center text-4xl p-10'>What Can do whith AI?</h1>   
    <AccordionItem />
    {/* <Approch /> */}
    </>
  )
}

export default Ai