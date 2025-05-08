import { useState } from 'react'

import './App.css'
import './global.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/home/Home.jsx";
import SizeGuide from "./pages/size-guide/SizeGuide.jsx";
import ComponentLibrary from "./pages/component-library/ComponentLibrary.jsx";
import JavaScript from "./pages/javascript-library/JavaScriptLibrary.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/size-guide" element={<SizeGuide/>} />
          <Route path="/components" element={<ComponentLibrary/>} />
          <Route path="/javascript" element={<JavaScript/>} />
        </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

//for later if we do login (prob not)
//         <Route element={<PersistLogin/>}>
//         </Route>
//^ surround all other routes