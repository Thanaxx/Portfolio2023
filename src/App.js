import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/projects/index';
import About from './pages/about/about';
import Webhead from '../src/components/header/webhead';

function App() {
  return (
    <>
      <Webhead/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
