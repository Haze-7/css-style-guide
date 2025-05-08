import { useState } from 'react'

import './App.css'
import './global.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

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
          <Route path="/Size-Guide" element={<SizeGuide/>} />
          <Route path="/Components" element={<ComponentLibrary/>} />
          <Route path="/JavaScript" element={<JavaScript/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

//for later if we do login (prob not)
//         <Route element={<PersistLogin/>}>
//         </Route>
//^ surround all other routes