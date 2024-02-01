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



const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/portfolio' element={ <Portfolio />} />
      {/* //services */}
      <Route path="/ERPNext TECHNOLOGY" element={<ERPNext />} />
      <Route path="/Angular JS" element={<AngularJS />} />
      <Route path="/Consulting" element={<Consulting />} />
      <Route path="/Implementation" element={<Implementation />} />
      <Route path="/Third-Party Integrations" element={<Thirdparty />} />
      <Route path='/contact' element={ <Contact />} />
      </Routes>
      </BrowserRouter>


    </>
  );
};

export default App;

