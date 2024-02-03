import React from "react";
import Home from './components/Home/Home/Home';
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/ContactUs/ContactUs/Contact";
import {Routes,Route,BrowserRouter} from 'react-router-dom'

import AngularJS from "./components/Services/Angular/AngularJS";
import Consulting from "./components/Services/Consulting/Consulting";
import Implementation from "./components/Services/Implementation/Implementation";
import ERPNext from "./components/Services/Services/ERPNext/ERPNext TECHNOLOGY";
import Thirdparty from "./components/Services/ThirdParty/Thirdparty";
import EcommerceDevelopment from "./components/Services/EcommerceDevlopment/EcommerceDevelopment";
import MobileCommerce from "./components/Services/EcommerceDevlopment/MobileCommerce";
import ECommerce from "./components/Services/EcommerceDevlopment/ECommerce";
import SeoServices from "./components/Services/DigitalMarketing/SeoServices";



const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/portfolio' element={ <Portfolio />} />
      {/* //services */}
        {/* //ERPNext */}
      <Route path="/ERPNext TECHNOLOGY" element={<ERPNext />} />
      
      <Route path="/Consulting" element={<Consulting />} />
      <Route path="/Implementation" element={<Implementation />} />
      <Route path="/Third-Party Integrations" element={<Thirdparty />} />

      {/* //Ecommerce Development */}
      <Route path="/Magento eCommerce Development" element={<EcommerceDevelopment />} />
      <Route path="/Mobile Commerce (mCommerce)" element={<MobileCommerce />} />
      <Route path="/eCommerce" element={<ECommerce />} />
       {/* // Angular */}
      <Route path="/Angular JS" element={<AngularJS />} />
      <Route path='/contact' element={ <Contact />} />

      {/* // Digital marketing */}
      <Route path="/Seo Services" element={<SeoServices />} />

      </Routes>
      </BrowserRouter>


    </>
  );
};

export default App;

