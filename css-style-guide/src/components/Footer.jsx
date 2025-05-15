//return and modify lower links to be specific sections of the pages 
import { Link, useLocation } from "react-router-dom";


function Footer() {

    const location = useLocation();
    
    //List of paths / routes to hide navbar
    const hideFooterPaths = [
        "/px",
        "/percent",
        "/rem",
        "/view",
    ];

    if (hideFooterPaths.includes(location.pathname)) {
        return null; // Don't render navbar on these paths
      }
    return (
        <>
            <footer className="bg-[#2B2E35] w-full h-40 flex justify-center items-center text-white relative">
                    <div className="absolute left-[2%] top-[20%]">
                        <a href="/" className="flex items-center">
                            <img src="/src/assets/logos/gold-csg-logo.svg" className="h-8 me-3" alt="CSG-Logo-Gold" />                        </a>
                    </div>
                    {/* Size guide (quicklinks) */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 absolute right-[2%] top-[15%]">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Size Guide</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/size-guide" className="hover:underline">Pixels (px)</a>
                                </li>
                                <li>
                                    <a href="/size-guide" className="hover:underline">Percentages (%)</a>
                                </li>
                            </ul>
                        </div>
                        {/* Components */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Components</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/components" className="hover:underline ">Base CSS</a>
                                </li>
                                <li>
                                    <a href="/components" className="hover:underline">TailwindCSS</a>
                                </li>
                            </ul>
                        </div>
                        {/* JavaScript */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">JavaScript</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/javascript" className="hover:underline">Functions</a>
                                </li>
                                <li>
                                    <a href="/javascript" className="hover:underline">Dynamic/Integration</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </footer>    
        </>
    );
};

export default Footer;