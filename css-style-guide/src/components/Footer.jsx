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
  <footer className={`${isDarkFooterPath ? "bg-dark" : isGrayFooterPath ? "bg-gray" : isSlateFooterPath ? "bg-slate" : "bg-gold"} sm:h-[20vh] h-[50vh] flex mx-auto`}>
  <div className="flex flex-col sm:flex-row sm:items-start items-center w-full pl-[2vw] pr-[5vw]">
    
    {/* Logo */}
    <Link
      to="/"
      className={`hover:text-caramel active:text-[#E2DED1] flex font-jersey text-[9vh] ${
        isDarkFooterPath
          ? "text-gold"
          : isGrayFooterPath
          ? "text-caramel"
          : isSlateFooterPath
          ? "text-gold"
          : "text-slate"
      }`}
    >
      CSG
    </Link>
    
    {/* Grid - placed alongside logo on sm+; stacked below on mobile */}
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-[5vh] w-full text-center ml-auto sm:w-auto mt-[3vh] sm:mt-[5vh] ">
      {/* Size Guide */}
      <div>
        <h2
          className={`footer-heading font-semibold uppercase ${
            isDarkFooterPath
              ? "text-gold"
              : isGrayFooterPath
              ? "text-caramel"
              : isSlateFooterPath
              ? "text-gold"
              : "text-slate"
          }`}
        >
          Size Guide
        </h2>
        <div
          className={`hidden sm:block ${
            isDarkFooterPath
              ? "text-gray-400"
              : isGrayFooterPath
              ? "text-slate"
              : isSlateFooterPath
              ? "text-gray-400"
              : "text-gray"
          } font-medium`}
        >
          <div className="my-[1.5vh]">
            <a href="/px" className="footer-link  hover:underline">
              Pixels (px)
            </a>
          </div>
          <div>
            <a href="/percent" className="footer-link hover:underline">
              Percentages (%)
            </a>
          </div>
        </div>
      </div>

            {/* Databases */}
      <div>
        <h2
          className={`footer-heading font-semibold uppercase ${
            isDarkFooterPath
              ? "text-gold"
              : isGrayFooterPath
              ? "text-caramel"
              : isSlateFooterPath
              ? "text-gold"
              : "text-slate"
          }`}
        >
          Databases
        </h2>
        <div
          className={`hidden sm:block ${
            isDarkFooterPath
              ? "text-gray-400"
              : isGrayFooterPath
              ? "text-slate"
              : isSlateFooterPath
              ? "text-gray-400"
              : "text-gray"
          } font-medium`}
        >
          <div className="my-[1.5vh]">
            <a href="/px" className="footer-link  hover:underline">
              Pixels (px)
            </a>
          </div>
          <div>
            <a href="/percent" className="footer-link hover:underline">
              Percentages (%)
            </a>
          </div>
        </div>
      </div>

      {/* Components */}
      <div>
        <h2
          className={` footer-heading font-semibold uppercase ${
            isDarkFooterPath
              ? "text-gold"
              : isGrayFooterPath
              ? "text-caramel"
              : isSlateFooterPath
              ? "text-gold"
              : "text-slate"
          }`}
        >
          Components
        </h2>
        <div
          className={`hidden sm:block ${
            isDarkFooterPath
              ? "text-gray-400"
              : isGrayFooterPath
              ? "text-slate"
              : isSlateFooterPath
              ? "text-gray-400"
              : "text-gray"
          } font-medium`}
        >
          <div className="my-[1.5vh]">
            <a href="/components" className="footer-link hover:underline">
              Base CSS
            </a>
          </div>
          <div>
            <a href="/components" className="footer-link hover:underline">
              TailwindCSS
            </a>
          </div>
        </div>
      </div>

      {/* JavaScript */}
      <div>
        <h2
          className={` footer-heading font-semibold uppercase ${
            isDarkFooterPath
              ? "text-gold"
              : isGrayFooterPath
              ? "text-caramel"
              : isSlateFooterPath
              ? "text-gold"
              : "text-slate"
          }`}
        >
          JavaScript
        </h2>
        <div
          className={`hidden sm:block ${
            isDarkFooterPath
              ? "text-gray-400"
              : isGrayFooterPath
              ? "text-slate"
              : isSlateFooterPath
              ? "text-gray-400"
              : "text-gray"
          } font-medium`}
        >
          <div className="my-[1.5vh]">
            <a href="/javascript" className="footer-link hover:underline">
              Functions
            </a>
          </div>
          <div>
            <a
              href="/javascript"
              className="break-words footer-link hover:underline"
            >
              Dynamic/Integration
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
  
        </>
    );
};

export default Footer;

// ${isDarkFooterPath ? "text-gold" : isGrayFooterPath ? "text-caramel"  : isSlateFooterPath ? "text-gold" : "text-slate"}