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
import Database from "./pages/database-library/DatabaseLibrary.jsx";

import PxGrid from "./pages/size-guide/pxGrid.jsx";
import PercentGrid from "./pages/size-guide/percentGrid.jsx";
import RemGrid from "./pages/size-guide/remGrid.jsx";
import ViewGrid from "./pages/size-guide/viewGrid.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home/>}/>
          <Route path="/size-guide" element={<SizeGuide/>} />
          <Route path="/components" element={<ComponentLibrary/>} />
          <Route path="/javascript" element={<JavaScript/>} />
          <Route path="/database" element={<Database/>} />

          {/* Size/Measurements Charts/Guides */}
          <Route path="/px" element={<PxGrid/>} />
          <Route path="/percent" element={<PercentGrid/>} />
          <Route path="/rem" element={<RemGrid/>} />
          <Route path="/view" element={<ViewGrid/>} />

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