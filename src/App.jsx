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
import ERPNext from "./components/Services/ERPNext/ERPNext TECHNOLOGY";
import Thirdparty from "./components/Services/ThirdParty/Thirdparty";
import EcommerceDevelopment from "./components/Services/EcommerceDevlopment/EcommerceDevelopment";
import MobileCommerce from "./components/Services/EcommerceDevlopment/MobileCommerce";
import ECommerce from "./components/Services/EcommerceDevlopment/ECommerce";
import ECommerceTitle from "./components/Services/EcommerceDevlopment/ECommerceTitle";
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
// import StaffingServices from "./components/Company/Staffing-Services/StaffingServices";
import Azure from "./components/Services/Other Servies/Cloud Technologies/Azure";
import Google from "./components/Services/Other Servies/Cloud Technologies/Google";
import AboutUs from "./components/Company/AboutUs/AboutUS";
import MakesUsDifferent from "./components/Company/WhatMakesUsDifferent/MakesUsDifferent";
import VisionMission from "./components/Company/Vision$Mission/VisionMission";
import OurCore from "./components/Company/OurCoreValues/OurCore";
import Mobile from "./components/Services/Mobile/Mobile";
import Testing from "./components/Services/Other Servies/Softeware Testing/Testing";
import AIandML from "./components/Services/Other Servies/Cloud Technologies/Ai and ML/AIandML";
import Ai from "./components/Services/Other Servies/Cloud Technologies/Ai and ML/Ai";
import Machine from "./components/Services/Other Servies/Cloud Technologies/Ai and ML/Machine";
import Otherservies from "./components/Services/Other Servies/Otherservies";
import Form from "./components/careers/form/Form2";
import Cyber from "./components/Services/Other Servies/Cyber Security/Cyber";
import Ai2 from "./components/Services/Other Servies/Cloud Technologies/Ai and ML/Ai2";
import Staffing2 from "./components/Company/Staffing-Services/Staffing2";
import SeeAllFeatures from "./components/Company/Staffing-Services/SeeAllFeatures";

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
          <Route path="/services/ERPNext TECHNOLOGY" element={<ERPNext />} />
          <Route path="/services/Consulting" element={<Consulting />} />
          <Route path="/services/Implementation" element={<Implementation />} />
          <Route
            path="/services/Third-Party Integrations"
            element={<Thirdparty />}
          />
          {/* //Ecommer/servicesce Development */}
          <Route
            path="/services/ECOMMERCE SOLUTIONS"
            element={<ECommerceTitle />}
          />
          <Route
            path="/services/Magento eCommerce Development"
            element={<EcommerceDevelopment />}
          />
          <Route
            path="/services/Mobile Commerce (mCommerce)"
            element={<MobileCommerce />}
          />
          <Route path="/services/eCommerce" element={<ECommerce />} />
          {/* // Angula/servicesr */}
          <Route path="/services/Frontend" element={<Frontend />} />
          <Route path="/services/Angular JS" element={<AngularJS />} />
          <Route path="/services/React JS" element={<Reactjs />} />
          <Route path="/services/Next JS" element={<NextJS />} />
          {/* Backend */}
          <Route path="/services/BACKEND" element={<Backend />} />
          <Route path="/services/PHP" element={<Php />} />
          <Route path="/services/Java" element={<Java />} />
          <Route path="/services/Python" element={<Python />} />
          {/* // Digita/servicesl marketing */}
          <Route
            path="/services/DIGITAL MARKETING"
            element={<Digitalmarketing />}
          />
          <Route path="/services/Seo Services" element={<SeoServices />} />
          <Route
            path="/services/PPC Management Services"
            element={<PPCManagement />}
          />
          <Route path="/services/SMM & Content Writing" element={<SMMpage />} />
          {/* // Microsoft// */}
          <Route
            path="/services/MICROSOFT TECHNOLOGY"
            element={<Microsoft />}
          />
          <Route path="/services/Dynamics CRM" element={<MicrosoftCRM />} />
          <Route path="/services/ASP.NET Web Application" element={<ASP />} />
          <Route path="/services/PowerBI" element={<PowerBI />} />

          {/* Mobile */}
          <Route path="/services/MOBILE" element={<Mobile />} />
          <Route path="/services/IPhone Application" element={<IPhone />} />
          <Route
            path="/services/Android Application"
            element={<AndroidApplication />}
          />
          <Route path="/services/Hybrid App" element={<HybridApp />} />

          {/* // other /servicesServies  // */}
          <Route path="/services/OTHER SERVICES" element={<Otherservies />} />
          <Route path="/services/Cloud Technologies" element={<CloudTech />} />
          <Route path="/services/Amazon" element={<Amazon />} />
          <Route path="/services/Azure" element={<Azure />} />
          <Route path="/services/Google" element={<Google />} />

          <Route path="/services/Cyber" element={<Cyber />} />

          <Route path="/services/Software Testing" element={<Testing />} />

          <Route path="/services/Advanced Technologies" element={<AIandML />} />
          {/* <Route path="/Ai" element={<Ai />} /> */}
          <Route path="/services/Ai2" element={<Ai2 />} />
          <Route path="/services/machine" element={<Machine />} />

          {/* company */}
          <Route path="/company/About Us" element={<AboutUs />} />
          <Route path="/company/Vision & Mission" element={<VisionMission />} />
          <Route
            path="/company/What makes us different"
            element={<MakesUsDifferent />}
          />
          <Route path="/company/Our Core Values" element={<OurCore />} />
          {/* <Route path="/Staffing-Services" element={<StaffingServices />} /> */}
          <Route path="/company/Staffing-Services" element={<Staffing2 />} />
          <Route path="/company/SeeAllFeatures" element={<SeeAllFeatures />} />

          {/* form */}
          <Route path="/applyForm" element={<Form />} />

          {/* contact */}
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
