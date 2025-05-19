//imports
import React, { useState , useContext} from 'react';
import { Link, useLocation } from "react-router-dom";
// import bgImage from './assets/images/suni-text-logo.png';
// import userIconDefault from './assets/images/user-icon-default.png';



function Navbar() {

    const location = useLocation();

    //List of paths where navbar is hidden
    const hideNavbarPaths = [
        "/px",
        "/percent",
        "/rem",
        "/view",
    ];

    const grayNavbarPaths = [
        "/javascript",
    ]

    //list of paths where navbar is dark mode
    const darkNavbarPaths = [
        "/components",
    ]

    //track navbar location for color changes
    const isDarkNavbarPath = darkNavbarPaths.includes(location.pathname);
    const isGrayNavbarPath = grayNavbarPaths.includes(location.pathname);

    //decision for hiding navbar on certain pages(paths)
    if (hideNavbarPaths.includes(location.pathname)) {
        return null; // Don't render navbar on these paths
      }

    

    return (
        <>
            <div className={`sticky w-full h-[5arem] flex z-40 ${isDarkNavbarPath ? "bg-[#2E2927]" : isGrayNavbarPath ? "bg-[#5E5E5E]" : "bg-[#D4AA7D]"}`}>
                {/* Add click to home? */}
                {/* <img src="/src/assets/logos/gold-csg-logo.svg" alt="Gold CSG Logo" height={100} width={100} className="left-[1%] relative"></img> */}
                <Link to="/" className={` hover:text-[#B98857] active:text-[#E2DED1] relative left-[1%] flex items-center font-jersey text-[5rem] leading-[1] ${isDarkNavbarPath ? "text-[#D4AA7D]" : isGrayNavbarPath ? "text-[#B98857]" : "text-[#2B2E35]"}`}>
                CSG
                </Link>
                <div className={`relative flex items-center space-x-10 left-[23%] font-inter font-bold  text-[1.7rem] nav-options ${isDarkNavbarPath ? "text-[#D4AA7D]" : isGrayNavbarPath ? "text-[#B98857]" : "text-[#2B2E35]"}`}>
                    <Link to="/" className={` hover:text-[#E2DED1] active:text-[#B98857]`}>Home</Link>

                    <div className="dropdown">
                        <Link to="/size-guide" className={` hover:text-[#B98857] active:text-[#E2DED1] `}>
                        Size Guide 
                        {/* Inline chevron svg */}
                        <svg
                            className="inline pl-2 pb-[2px] w-[18px] h-[18px] fill-current"
                            viewBox="0 0 10 6"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0l5 6 5-6H0z" />
                        </svg>

                        </Link>                        
                        <div className="dropdown-content">
                            <Link to="/px" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-[#2E2927] hover:bg-[#D4AA7D] hover:text-[#2E2927]" : isGrayNavbarPath ? "bg-[#5E5E5E] hover:bg-[#B98857] hover:text-[#5E5E5E]" : "bg-[#D4AA7D] hover:bg-[#2B2E35] hover:text-[#B98857]"}`}>Pixels (px)</Link>
                            <Link to="/percent" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-[#2E2927] hover:bg-[#D4AA7D] hover:text-[#2E2927]" : isGrayNavbarPath ? "bg-[#5E5E5E] hover:bg-[#B98857] hover:text-[#5E5E5E]" : "bg-[#D4AA7D] hover:bg-[#2B2E35] hover:text-[#B98857]"}`}>Percent (%)</Link>
                            <Link to="/rem" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-[#2E2927] hover:bg-[#D4AA7D] hover:text-[#2E2927]" : isGrayNavbarPath ? "bg-[#5E5E5E] hover:bg-[#B98857] hover:text-[#5E5E5E]" : "bg-[#D4AA7D] hover:bg-[#2B2E35] hover:text-[#B98857]"}`}>REM (rem)</Link>
                            <Link to="/view" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-[#2E2927] hover:bg-[#D4AA7D] hover:text-[#2E2927]" : isGrayNavbarPath ? "bg-[#5E5E5E] hover:bg-[#B98857] hover:text-[#5E5E5E]" : "bg-[#D4AA7D] hover:bg-[#2B2E35] hover:text-[#B98857]"}`}>View (vw, vh)</Link>
                        </div>
                    </div>
                    <Link to="/components" className={` hover:text-[#B98857] active:text-[#E2DED1]`}>Components</Link>
                    <Link to="/database" className={` hover:text-[#B98857] active:text-[#E2DED1]`}>Database</Link>
                    <Link to="/javascript" className={` hover:text-[#B98857] active:text-[#E2DED1]`}>JavaScript</Link>
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

// ${isDarkNavbarPath ? "bg-[#2E2927]" : "bg-[#D4AA7D]"} Decision statement
// ${isDarkNavbarPath ? "bg-[#2E2927]" : isGrayNavbarPath ? "bg-gray-200" : "bg-[#D4AA7D]"} 3 way decision statement

//Add Dropdown Menu Template: (matches custom navbar colors)
{/* <div className="dropdown">
<Link to="/size-guide" className={` hover:text-[#B98857] active:text-[#E2DED1] `}>
Size Guide 
<svg
    className="inline pl-2 pb-[2px] w-[18px] h-[18px] fill-current"
    viewBox="0 0 10 6"
    xmlns="http://www.w3.org/2000/svg"
>
    <path d="M0 0l5 6 5-6H0z" />
</svg>

</Link>                        
<div className="dropdown-content">
    <Link to="/px" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-[#2E2927] hover:bg-[#D4AA7D] hover:text-[#2E2927]" : isGrayNavbarPath ? "bg-[#5E5E5E] hover:bg-[#B98857] hover:text-[#5E5E5E]" : "bg-[#D4AA7D] hover:bg-[#2B2E35] hover:text-[#B98857]"}`}>Pixels (px)</Link>
    <Link to="/percent" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-[#2E2927] hover:bg-[#D4AA7D] hover:text-[#2E2927]" : isGrayNavbarPath ? "bg-[#5E5E5E] hover:bg-[#B98857] hover:text-[#5E5E5E]" : "bg-[#D4AA7D] hover:bg-[#2B2E35] hover:text-[#B98857]"}`}>Percent (%)</Link>
    <Link to="/rem" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-[#2E2927] hover:bg-[#D4AA7D] hover:text-[#2E2927]" : isGrayNavbarPath ? "bg-[#5E5E5E] hover:bg-[#B98857] hover:text-[#5E5E5E]" : "bg-[#D4AA7D] hover:bg-[#2B2E35] hover:text-[#B98857]"}`}>REM (rem)</Link>
    <Link to="/view" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-[#2E2927] hover:bg-[#D4AA7D] hover:text-[#2E2927]" : isGrayNavbarPath ? "bg-[#5E5E5E] hover:bg-[#B98857] hover:text-[#5E5E5E]" : "bg-[#D4AA7D] hover:bg-[#2B2E35] hover:text-[#B98857]"}`}>View (vw, vh)</Link>
</div>
</div> */}