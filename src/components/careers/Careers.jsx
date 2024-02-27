import React from 'react';
import Search from './search/Search';
import Navbarupp from '../Home/Navbar/Navbarupp';
// import Slider from './slider/Slider';


function careers() {
 

  return (
   <>
    <Navbarupp />
  
     <img
          
            src="https://cdn.shopify.com/s/files/1/0512/0593/1170/files/Careers-1_2048x2048.png?v=1702467027"
          
              className=" w-full object-cover"
              alt="Background 2"
            />
            <Search />
          
            {/* <Slider /> */}
           
           

   </>
  );
}



export default careers