//imports
import React, { useState , useContext} from 'react';
import { Link } from "react-router-dom";
// import bgImage from './assets/images/suni-text-logo.png';
// import userIconDefault from './assets/images/user-icon-default.png';



function Navbar() {
    return (
        <>
            <div className="sticky bg-[#2B2E35] w-full h-[5rem] flex z-40">
                <img src="/src/assets/logos/gold-csg-logo.svg" alt="Gold CSG Logo" height={100} width={100} className="left-[1%] relative"></img>
                <div className="relative flex items-center space-x-4 left-[33%] font-tungsten text-[#EABA8C] text-3xl">
                    <Link to="/" className=" hover:text-[#E2DED1] active:text-[#B98857]">Home</Link>
                    <Link to="/Size-Guide" className=" hover:text-[#E2DED1] active:text-[#B98857]">Size Guide</Link>
                    <Link to="/Components" className=" hover:text-[#E2DED1] active:text-[#B98857]">Components</Link>
                    <Link to="/JavaScript" className=" hover:text-[#E2DED1] active:text-[#B98857]">JavaScript</Link>
                    
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