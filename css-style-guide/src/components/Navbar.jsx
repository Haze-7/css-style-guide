//imports
import React, { useState , useContext} from 'react';
import { Link } from "react-router-dom";
// import bgImage from './assets/images/suni-text-logo.png';
// import userIconDefault from './assets/images/user-icon-default.png';



function Navbar() {
    return (
        <>
            <div className="sticky bg-[#2B2E35] w-full h-[5rem] flex justify-between items-center px-4 text-white text-xl z-40">
                <img src="/CSG.svg" alt="CSG Logo" height={100} width={100} className=""></img>
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/Size-Guide" className="text-white hover:text-gray-300">Size Guide</Link>
                    <Link to="/Components" className="text-white hover:text-gray-300">Component Library</Link>
                    <Link to="/JavaScript" className="text-white hover:text-gray-300">JavaScript Library</Link>
                </div>
            </div>    
        </>
    );
};

export default Navbar;

// Link Example
/* <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
Settings
</Link> */