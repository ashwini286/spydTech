import React from "react";
import Home from './components/Home/Home/Home';
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/ContactUs/ContactUs/Contact";
import {Routes,Route,BrowserRouter} from 'react-router-dom'

import AngularJS from "./components/Home/Services/AngularJS";
import Consulting from "./components/Home/Services/Consulting";
import Implementation from "./components/Home/Services/Implementation";


const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/portfolio' element={ <Portfolio />} />
      <Route path="/Angular JS" element={<AngularJS />} />
      <Route path="/Consulting" element={<Consulting />} />
      <Route path="/Implementation" element={<Implementation />} />
      <Route path='/contact' element={ <Contact />} />
      </Routes>
   
    
  {/* <Portfolio /> */}
      </BrowserRouter>


    </>
  );
};

export default App;

