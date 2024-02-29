import React from "react";
import Home from "./components/Home/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/ContactUs/ContactUs/Contact";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Frontend from "./components/Services/Frontend/Frontend";
import AngularJS from "./components/Services/Angular/AngularJS";
import Reactjs from "./components/Services/Reactjs/Reactjs";
import Careers from "./components/careers/Careers";
import NextJS from "./components/Services/NextJs/NextJS";
import Php from "./components/Services/PHP/Php";
import Backend from "./components/Services/Backend/Backend";
import Java from "./components/Services/Java/Java";
import Python from "./components/Services/Python/Python";
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
import SMMpage from "./components/Services/DigitalMarketing/SMMpage";
import MicrosoftCRM from "./components/Services/Microsoft/MicrosoftCRM";
import IPhone from "./components/Services/IphoneApplication/IPhone";
import AndroidApplication from "./components/Services/AndroidApplication/AndroidApplication";
import HybridApp from "./components/Services/HybridApp/HybridApp";
import ASP from "./components/Services/Microsoft/ASP";
import TryADemo from "./components/TryADemo/TryADemo";
import Microsoft from "./components/Services/Microsoft/Microsoft";
import PowerBI from "./components/Services/Microsoft/PowerBI";
import CloudTech from "./components/Services/Other Servies/Cloud Technologies/CloudTech";
import Amazon from "./components/Services/Other Servies/Cloud Technologies/Amazon";

import Azure from "./components/Services/Other Servies/Cloud Technologies/Azure";
import Google from "./components/Services/Other Servies/Cloud Technologies/Google";

import AboutUs from './components/Company/AboutUs/AboutUS'
import MakesUsDifferent from './components/Company/WhatMakesUsDifferent/MakesUsDifferent';
import VisionMission from "./components/Company/Vision$Mission/VisionMission";
import OurCore from './components/Company/OurCoreValues/OurCore';
import Mobile from './components/Services/Mobile/Mobile'
import Testing from "./components/Services/Other Servies/Softeware Testing/Testing";
import AIandML from "./components/Services/Other Servies/Cloud Technologies/Ai and ML/AIandML";
import Ai from "./components/Services/Other Servies/Cloud Technologies/Ai and ML/Ai";
import Machine from "./components/Services/Other Servies/Cloud Technologies/Ai and ML/Machine";
import Otherservies from "./components/Services/Other Servies/Otherservies";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/TryADemo" element={<TryADemo />} />
          <Route path="/careers" element={<Careers />} />
          {/* //services */}
          {/* //ERPNext */}
          <Route path="/ERPNext TECHNOLOGY" element={<ERPNext />} />

          <Route path="/Consulting" element={<Consulting />} />
          <Route path="/Implementation" element={<Implementation />} />
          <Route path="/Third-Party Integrations" element={<Thirdparty />} />

          {/* //Ecommerce Development */}
          <Route
            path="/Magento eCommerce Development"
            element={<EcommerceDevelopment />}
          />
          <Route
            path="/Mobile Commerce (mCommerce)"
            element={<MobileCommerce />}
          />
          <Route path="/eCommerce" element={<ECommerce />} />
          {/* // Angular */}
          <Route path="/Frontend" element={<Frontend />} />
          <Route path="/Angular JS" element={<AngularJS />} />
          <Route path="/React JS" element={<Reactjs />} />
          <Route path="/Next JS" element={<NextJS />} />
          <Route path="/contact" element={<Contact />} />
          {/* Backend */}
          <Route path="/BACKEND" element={<Backend />} />
          <Route path="/PHP" element={<Php />} />
          <Route path="/Java" element={<Java />} />
          <Route path="/Python" element={<Python />} />
          {/* // Digital marketing */}
          <Route path="/DIGITAL MARKETING" element={<Digitalmarketing />} />
          <Route path="/Seo Services" element={<SeoServices />} />
          <Route path="/PPC Management Services" element={<PPCManagement />} />
          <Route path="/SMM & Content Writing" element={<SMMpage />} />
          {/* // Microsoft// */}
          <Route path="/MICROSOFT TECHNOLOGY" element={<Microsoft />} />
          <Route path="/Dynamics CRM" element={<MicrosoftCRM />} />
          <Route path="/ASP.NET Web Application" element={<ASP />} />
          <Route path="/PowerBI" element={<PowerBI />} />

          {/* Mobile */}
          <Route path="/MOBILE" element={<Mobile />} />
          <Route path="/IPhone Application" element={<IPhone />} />
          <Route path="/Android Application" element={<AndroidApplication />} />
          <Route path="/Hybrid App" element={<HybridApp />} />

          {/* // other Servies  // */}
          <Route path="/OTHER SERVICES" element={<Otherservies />} />
          <Route path="/Cloud Technologies" element={<CloudTech />} />
          <Route path="/Amazon" element={<Amazon />} />
          <Route path="/Azure" element={<Azure />} />
          <Route path="/Google" element={<Google />} />

          <Route path="/Software Testing" element={<Testing />} />

          <Route path="/Advanced Technologies" element={<AIandML />} />
          <Route path="/Ai" element={<Ai />} />
          <Route path="/machine" element={<Machine />} />
          




          {/* company */}
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Vision & Mission" element={<VisionMission />} />
          <Route path="/What makes us different" element={<MakesUsDifferent />} />
          <Route path="/Our Core Values" element={<OurCore />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
