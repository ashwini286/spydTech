import React from "react";
import Home from './components/Home/Home/Home';
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/ContactUs/ContactUs/Contact";
import {Routes,Route,BrowserRouter} from 'react-router-dom'

import AngularJS from "./components/Services/Services/AngularJS";
import Consulting from "./components/Services/Services/Consulting";
import Implementation from "./components/Services/Services/Implementation";
import ERPNext from "./components/Services/Services/ERPNext/ERPNext TECHNOLOGY";


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
      <Route path='/contact' element={ <Contact />} />
      </Routes>
      </BrowserRouter>


    </>
  );
};

export default App;

