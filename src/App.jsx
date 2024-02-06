import React from "react";
import Home from './components/Home/Home/Home';
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/ContactUs/ContactUs/Contact";
import {Routes,Route,BrowserRouter} from 'react-router-dom'

import Frontend from "./components/Services/Frontend/Frontend";
import AngularJS from "./components/Services/Angular/AngularJS";
import Reactjs from './components/Services/Reactjs/Reactjs';
import NextJS from "./components/Services/NextJs/NextJS";
import Php from './components/Services/PHP/Php'
import Consulting from "./components/Services/Consulting/Consulting";
import Implementation from "./components/Services/Implementation/Implementation";
import ERPNext from "./components/Services/Services/ERPNext/ERPNext TECHNOLOGY";
import Thirdparty from "./components/Services/ThirdParty/Thirdparty";
import EcommerceDevelopment from "./components/Services/EcommerceDevlopment/EcommerceDevelopment";
import MobileCommerce from "./components/Services/EcommerceDevlopment/MobileCommerce";
import ECommerce from "./components/Services/EcommerceDevlopment/ECommerce";
import SeoServices from "./components/Services/DigitalMarketing/SeoServices";
import PPCManagement from "./components/Services/DigitalMarketing/PPCManagement";
import Digitalmarketing from "./components/Services/DigitalMarketing/Digitalmarketing";



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
       <Route path="/Frontend" element={<Frontend />} />
      <Route path="/Angular JS" element={<AngularJS />} />
      <Route path="/React JS" element={<Reactjs />} />
      <Route path="/Next JS" element={<NextJS />} />
      <Route path='/contact' element={ <Contact />} />
  {/* Backend */}
  <Route path="/PHP" element={<Php />} />
      {/* // Digital marketing */}
      <Route path="/DIGITAL MARKETING" element={<Digitalmarketing />} />
      <Route path="/Seo Services" element={<SeoServices />} />
      <Route path="/PPC Management Services" element={<PPCManagement />} />


      </Routes>
      </BrowserRouter>


    </>
  );
};

export default App;

