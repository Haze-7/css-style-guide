//imports
import React, { useState , useContext} from 'react';
import { Link } from "react-router-dom";
// import bgImage from './assets/images/suni-text-logo.png';
// import userIconDefault from './assets/images/user-icon-default.png';



function Navbar() {
    return (
        <>
            <div className="sticky bg-[#D4AA7D] w-full h-[5arem] flex z-40">
                {/* Add click to home? */}
                {/* <img src="/src/assets/logos/gold-csg-logo.svg" alt="Gold CSG Logo" height={100} width={100} className="left-[1%] relative"></img> */}
                <Link to="/" className=" hover:text-[#B98857] active:text-[#E2DED1] relative left-[1%] flex items-center font-jersey text-[5rem] leading-[1] text-[#2B2E35]">
                CSG
                </Link>
                <div className="relative flex items-center space-x-10 left-[23%] font-inter font-bold text-[#272727] text-[1.7rem] nav-options">
                    <Link to="/" className=" hover:text-[#E2DED1] active:text-[#B98857]">Home</Link>
                    <Link to="/size-guide" className=" hover:text-[#B98857] active:text-[#E2DED1]">Size Guide</Link>
                    <Link to="/components" className=" hover:text-[#B98857] active:text-[#E2DED1]">Components</Link>
                    <Link to="/database" className=" hover:text-[#B98857] active:text-[#E2DED1]">Database</Link>
                    <Link to="/javascript" className=" hover:text-[#B98857] active:text-[#E2DED1]">JavaScript</Link>

                </div>


            </div>    
        </>
    );
};

export default Navbar;
// #2B2E35
//#EABA8C
//#E2DED1
//#B98857
// Link Example
/* <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
Settings
</Link> */