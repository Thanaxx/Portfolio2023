import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/projects/index';
import About from './pages/about/about';
import WebHead from '../src/components/header/Webhead';
import Service from './pages/services/service';
import Contact from './pages/contacts';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <WebHead/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
