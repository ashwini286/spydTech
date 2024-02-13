import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import OurCapabilities from './OurCapabilities/OurCapabilities';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const SealsForce = () => {
  return (
    <>
     <div>
        <Navbarupp />
      </div>


      <img
        src="https://ecommerce.folio3.com/blog/wp-content/uploads/2022/09/Salesforce-Commerce-Cloud-CMS.jpg"
        className=" w-[100%]"
        alt="Background Image"
      />
      <OurCapabilities />
      <Approch />
      <Footer />
    </>
  )
}

export default SealsForce