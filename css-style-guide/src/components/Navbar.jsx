//imports
import React, { useState , useContext, useRef} from 'react';
import { Link, useLocation } from "react-router-dom";
// import bgImage from './assets/images/suni-text-logo.png';
// import userIconDefault from './assets/images/user-icon-default.png';



function Navbar() {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

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

    const SlateNavbarPaths = [
        "/database",
    ]

    //track navbar location for color changes
    const isDarkNavbarPath = darkNavbarPaths.includes(location.pathname);
    const isGrayNavbarPath = grayNavbarPaths.includes(location.pathname);
    const isSlateNavbarPath = SlateNavbarPaths.includes(location.pathname);
    //decision for hiding navbar on certain pages(paths)
    if (hideNavbarPaths.includes(location.pathname)) {
        return null; // Don't render navbar on these paths
      }


    // const toggleNavbarCollapse = () => {
    //     // navRef.current.classList.toggle("responsive");
    //     console.log("Navbar toggled");
    //   };
      const toggleNavbarCollapse = () => {
        setMenuOpen((prev) => !prev);
      };



    return (
        <>
            <div className={`sticky w-full h-[5rem] flex z-40 ${isDarkNavbarPath ? "bg-dark" : isGrayNavbarPath ? "bg-gray" : isSlateNavbarPath ? "bg-slate" : "bg-gold"}  `}>
                <Link to="/" className={` hover:text-caramel active:text-[#E2DED1] relative left-[1%] flex items-center font-jersey text-[5rem] leading-[1] ${isDarkNavbarPath ? "text-gold" : isGrayNavbarPath ? "text-caramel" : "text-slate"}`}>
                CSG
                </Link>
                {/* Links container div (most important for mini menu) */}
                <div className={` ${!menuOpen ? "hidden" : "flex"}   ${menuOpen ? isDarkNavbarPath ? "bg-dark" : isGrayNavbarPath ? "bg-gray" : isSlateNavbarPath ? "bg-slate" : "bg-gold" : ""}  ${isDarkNavbarPath ? "text-gold" : isGrayNavbarPath ? "text-caramel" : isSlateNavbarPath ? "text-gold" : "text-slate"} lg:flex whitespace-nowrap top-[80%] lg:top-[-100%] lg:static absolute flex-col lg:flex-row items-center lg:justify-center w-full lg:min-h-fit min-h-[60vh] lg:gap-[4vw] gap-8 px-5 left-0 font-inter font-bold text-[1.7rem] `}>
                    <Link to="/" className={` hover:text-[#E2DED1] active:text-caramel`}>Home</Link>
                    {/* Size Guide Dropdown */}
                    <div className="dropdown">
                        <Link to="/size-guide" className={` hover:text-caramel active:text-[#E2DED1] `}>
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
                            <Link to="/px" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>Pixels (px)</Link>
                            <Link to="/percent" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>Percent (%)</Link>
                            <Link to="/rem" className={`active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>REM (rem)</Link>
                            <Link to="/view" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>View (vw, vh)</Link>
                        </div>
                    </div>
                    {/* Components Dropdown */}
                    <div className="dropdown">
                        <Link to="/components" className={` hover:text-caramel active:text-[#E2DED1]`}>
                        Components
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
                            <Link to="/css" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>CSS</Link>
                            <Link to="/tailwindcss" className={`active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>TailwindCSS</Link>
                            <Link to="/temp" className={`active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>Link 3</Link>
                            <Link to="/temp" className={`active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>Link 4</Link>
                        </div>
                    </div>

                    {/* Database Dropdown */}
                    <div className="dropdown">
                        <Link to="/database" className={` hover:text-caramel active:text-[#E2DED1]`}>
                        Database
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
                            <Link to="/firebase" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>Firebase</Link>
                            <Link to="/mongo" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>MongoDB</Link>
                            <Link to="/django" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>Django</Link>
                            <Link to="/sql" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : isSlateNavbarPath ? "text-gold bg-slate hover:bg-gold hover:text-slate" : "bg-gold hover:bg-slate hover:text-gold"}`}>SQL</Link>
                        </div>
                    </div>

                    <Link to="/javascript" className={` hover:text-caramel active:text-[#E2DED1]`}>JavaScript</Link>
                    
                </div>
                <button
                    type="button"
                    className={` top-[15%] right-[2%] absolute text-[2.1rem]  cursor-pointer lg:hidden ${isDarkNavbarPath ? "text-gold" : isGrayNavbarPath ? "text-caramel" : "text-slate"}`}
                    onClick={toggleNavbarCollapse}
                    >
                    &#9776;
                </button>
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

// ${isDarkNavbarPath ? "bg-dark" : "bg-gold"} Decision statement
// ${isDarkNavbarPath ? "bg-dark" : isGrayNavbarPath ? "bg-gray-200" : "bg-gold"} 3 way decision statement

//Add Dropdown Menu Template: (matches custom navbar colors)
{/* <div className="dropdown">
<Link to="/size-guide" className={` hover:text-caramel active:text-[#E2DED1] `}>
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
    <Link to="/px" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : "bg-gold hover:bg-slate hover:text-caramel"}`}>Pixels (px)</Link>
    <Link to="/percent" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : "bg-gold hover:bg-slate hover:text-caramel"}`}>Percent (%)</Link>
    <Link to="/rem" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : "bg-gold hover:bg-slate hover:text-caramel"}`}>REM (rem)</Link>
    <Link to="/view" className={` active:text-[#E2DED1] dropdown-link ${isDarkNavbarPath ? "bg-dark hover:bg-gold hover:text-dark" : isGrayNavbarPath ? "bg-gray hover:bg-caramel hover:text-gray" : "bg-gold hover:bg-slate hover:text-caramel"}`}>View (vw, vh)</Link>
</div>
</div> */}

// Navbar color decision
// ${isDarkNavbarPath ? "bg-dark" : isGrayNavbarPath ? "bg-gray" : isSlateNavbarPath ? "bg-slate" : "bg-gold"} 