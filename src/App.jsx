import React from "react";
import Home from './components/Home/Home/Home';
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/ContactUs/ContactUs/Contact";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/portfolio' element={ <Portfolio />} />
      <Route path='/contact' element={ <Contact />} />
      </Routes>
   
    
  {/* <Portfolio /> */}
      </BrowserRouter>


    </>
  );
};

export default App;

