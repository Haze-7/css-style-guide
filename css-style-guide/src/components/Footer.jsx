//return and modify lower links to be specific sections of the pages 
import { Link, useLocation } from "react-router-dom";


function Footer() {

    const location = useLocation();
    
    //List of paths / routes to hide Footer
    const hideFooterPaths = [
        "/px",
        "/percent",
        "/rem",
        "/view",
    ];

    const grayFooterPaths = [
        "/javascript",
    ]

    //list of paths where Footer is dark mode
    const darkFooterPaths = [
        "/components",
    ]

    const slateFooterPaths = [
        "/database",
    ]

        const isDarkFooterPath = darkFooterPaths.includes(location.pathname);
        const isGrayFooterPath = grayFooterPaths.includes(location.pathname);
        const isSlateFooterPath = slateFooterPaths.includes(location.pathname);

        //${isDarkFooterPath ? "text-gold" : isGrayFooterPath ? "text-caramel" : isSlateFooterPath ? "text-gold" : "text-slate"}
    if (hideFooterPaths.includes(location.pathname)) {
        return null; // Don't render Footer on these paths
      }
    return (
        <>
            <footer className={`${isDarkFooterPath ? "bg-dark" : isGrayFooterPath ? "bg-gray" : isSlateFooterPath ? "bg-slate" : "bg-gold"}  w-full h-40 flex justify-center items-center relative`}>
                <div className="absolute left-[2%] top-[20%]">
                        <Link to="/" className={` hover:text-caramel active:text-[#E2DED1] relative h-8 me-3 left-[-20%] flex items-center font-jersey text-[5rem]  ${isDarkFooterPath ? "text-gold" : isGrayFooterPath ? "text-caramel"  : isSlateFooterPath ? "text-gold" : "text-slate"}`}>
                            CSG
                        </Link>
                    </div>
                    {/* Size guide (quicklinks) */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 absolute right-[2%] top-[15%]">
                        <div>
                            <h2 className={`mb-5 text-md font-semibold uppercase ${isDarkFooterPath ? "text-gold" : isGrayFooterPath ? "text-caramel"  : isSlateFooterPath ? "text-gold" : "text-slate"}`}>Size Guide</h2>
                            <ul className={` ${isDarkFooterPath ? "text-gray-400" : isGrayFooterPath ? "text-slate"  : isSlateFooterPath ? "text-gray-400" : "text-gray"} font-medium `}>
                                <li className="mb-4">
                                    <a href="/px" className="hover:underline">Pixels (px)</a>
                                </li>
                                {/* text-gray-400 */}
                                <li>
                                    <a href="/percent" className="hover:underline">Percentages (%)</a>
                                </li>
                            </ul>
                        </div>
                        {/* Components */}
                        <div>
                            <h2 className={`mb-5 text-md font-semibold uppercase ${isDarkFooterPath ? "text-gold" : isGrayFooterPath ? "text-caramel"  : isSlateFooterPath ? "text-gold" : "text-slate"} `}>Components</h2>
                            <ul className={` ${isDarkFooterPath ? "text-gray-400" : isGrayFooterPath ? "text-slate"  : isSlateFooterPath ? "text-gray-400" : "text-gray"} font-medium `}>
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
                            <h2 className={` mb-5 text-md font-semibold uppercase ${isDarkFooterPath ? "text-gold" : isGrayFooterPath ? "text-caramel"  : isSlateFooterPath ? "text-gold" : "text-slate"} `}>JavaScript</h2>
                            <ul className={` ${isDarkFooterPath ? "text-gray-400" : isGrayFooterPath ? "text-slate"  : isSlateFooterPath ? "text-gray-400" : "text-gray"} font-medium `}>
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

// ${isDarkFooterPath ? "text-gold" : isGrayFooterPath ? "text-caramel"  : isSlateFooterPath ? "text-gold" : "text-slate"}