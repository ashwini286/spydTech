import React from 'react';
import Search from './search/Search';
import Navbarupp from '../Home/Navbar/Navbarupp';
import Card from './Card/card'
import Card1 from './card2/card2'

function careers() {


  return (
    <>
      <Navbarupp />

     <div className='md:h-[550px]'>
     <img
        src="https://bluegraydaily.com/wp-content/uploads/2023/06/GettyImages-1161949895-1.jpg"
        className=" w-full object-cover md:h-[550px] absolute"
        alt="Background 2"
      />
      <div className="relative pt-[20%] md:pt-[200px] md:text-6xl text-4xl font-bold text-white pl-8"><p>Careers</p></div>
      <div className="relative text-white pl-8 md:text-2xl"><p>Expand your bubble and search for <br />opportunities</p></div>
     </div>
   
  
<Card />
<Card1 />






    </>
  );
}



export default careers