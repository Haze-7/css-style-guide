import { useState, useEffect } from 'react'

import './App.css'
import './global.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import { supabase } from './supabaseClient.js';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Auth from "./components/Auth.jsx";

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
  
    const [user, setUser] = useState(null);

  useEffect(() => {
    // Check active session on load
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    // Listen for auth state changes (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };


  return (
    
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>} />
          <Route path="/size-guide" element={<SizeGuide/>} />
          <Route path="/components" element={<ComponentLibrary/>} />
          {/* <Route path="/components" element={<ComponentLibrary user={user} />} /> */}
          <Route path="/javascript" element={<JavaScript/>} />
          <Route path="/database" element={<Database/>} />

          {/* Size/Measurements Charts/Guides */}
          <Route path="/px" element={<PxGrid/>} />
          <Route path="/percent" element={<PercentGrid/>} />
          <Route path="/rem" element={<RemGrid/>} />
          <Route path="/view" element={<ViewGrid/>} />

        </Routes>
          <Footer/>
        {/* OPTIONAL: Auth floating box only when not logged in */}
        {/* {!user && (
          <div className="fixed bottom-4 right-4 z-50 bg-gold border p-4 rounded shadow-lg max-w-sm">
            <Auth />
          </div>
        )} */}
      </BrowserRouter>
    </>
  )
}

export default App

//for later if we do login (prob not)
//         <Route element={<PersistLogin/>}>
//         </Route>
//^ surround all other routes