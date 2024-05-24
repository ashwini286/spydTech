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
          <Route path="/try_a_demo" element={<TryADemo />} />
          <Route path="/careers" element={<Careers />} />
          {/* //services */}
          {/* //ERPNext */}
          <Route path="/services/eRPNext_technology" element={<ERPNext />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/implementation" element={<Implementation />} />
          <Route
            path="/services/third_party_integrations"
            element={<Thirdparty />}
          />
          {/* //Ecommer/servicesce Development */}
          <Route
            path="/services/ecommerce_solutions"
            element={<ECommerceTitle />}
          />
          <Route
            path="/services/magento_eCommerce_development"
            element={<EcommerceDevelopment />}
          />
          <Route
            path="/services/mobile_commerce_(mCommerce)"
            element={<MobileCommerce />}
          />
          <Route path="/services/eCommerce" element={<ECommerce />} />
          {/* // Angula/servicesr */}
          <Route path="/services/frontend" element={<Frontend />} />
          <Route path="/services/angular_js" element={<AngularJS />} />
          <Route path="/services/react_js" element={<Reactjs />} />
          <Route path="/services/next_js" element={<NextJS />} />
          {/* Backend */}
          <Route path="/services/backend" element={<Backend />} />
          <Route path="/services/php" element={<Php />} />
          <Route path="/services/java" element={<Java />} />
          <Route path="/services/python" element={<Python />} />
          {/* // Digita/servicesl marketing */}
          <Route
            path="/services/digital_marketing"
            element={<Digitalmarketing />}
          />
          <Route path="/services/seo_services" element={<SeoServices />} />
          <Route
            path="/services/ppc_management_services"
            element={<PPCManagement />}
          />
          <Route path="/services/smm_&_content_writing" element={<SMMpage />} />
          {/* // Microsoft// */}
          <Route
            path="/services/microsoft_tecgnology"
            element={<Microsoft />}
          />
          <Route path="/services/dynamics_crm" element={<MicrosoftCRM />} />
          <Route path="/services/asp.net_web_application" element={<ASP />} />
          <Route path="/services/powerBI" element={<PowerBI />} />

          {/* Mobile */}
          <Route path="/services/mobile" element={<Mobile />} />
          <Route path="/services/iphone_application" element={<IPhone />} />
          <Route
            path="/services/android_application"
            element={<AndroidApplication />}
          />
          <Route path="/services/Hybrid_App" element={<HybridApp />} />

          {/* // other /servicesServies  // */}
          <Route path="/services/other_services" element={<Otherservies />} />
          <Route path="/services/cloud_technologies" element={<CloudTech />} />
          <Route path="/services/amazon" element={<Amazon />} />
          <Route path="/services/azure" element={<Azure />} />
          <Route path="/services/google" element={<Google />} />

          <Route path="/services/cyber" element={<Cyber />} />

          <Route path="/services/software_testing" element={<Testing />} />

          <Route path="/services/advanced_technologies" element={<AIandML />} />
          {/* <Route path="/Ai" element={<Ai />} /> */}
          <Route path="/services/ai2" element={<Ai2 />} />
          <Route path="/services/machine" element={<Machine />} />

          {/* company */}
          <Route path="/company/about_us" element={<AboutUs />} />
          <Route path="/company/vision_&_mission" element={<VisionMission />} />
          <Route
            path="/company/what_makes_us_different"
            element={<MakesUsDifferent />}
          />
          <Route path="/company/our_core_values" element={<OurCore />} />
          {/* <Route path="/Staffing-Services" element={<StaffingServices />} /> */}
          <Route path="/company/staffing_services" element={<Staffing2 />} />
          <Route
            path="/company/see_all_features"
            element={<SeeAllFeatures />}
          />

          {/* form */}
          <Route path="/applyForm" element={<Form />} />

          {/* contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
