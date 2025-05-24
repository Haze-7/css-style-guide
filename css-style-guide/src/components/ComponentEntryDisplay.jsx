//this is where I handle the component display, code, description, and anything else display
import ComponentCodeDisplayTabs from './ComponentCodeDisplayTabs.jsx';
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";


function ComponentEntryDisplay() {

  const [component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComponent = async () => {
      const { data, error } = await supabase
        .from("components")
        .select("*")
        .limit(1)
        .single(); // gets the first row

      if (error) {
        console.error("Error fetching component:", error.message);
      } else {
        setComponent(data);
      }

      setLoading(false);
    };

    fetchComponent();
  }, []);

  if (loading) return <p className="text-ivory">Loading...</p>;
  if (!component) return <p className="text-red-500">No component found.</p>;

  const tabData = [
    {
      id: "HTML",
      title: "HTML",
      content: (
        <pre className="px-[3%] py-[2%] leading-normal text-ivory whitespace-pre-wrap">
          {component.html_code}
        </pre>
      ),
    },
    {
      id: "CSS",
      title: "CSS",
      content: (
        <pre className="px-[3%] py-[2%] leading-normal text-ivory whitespace-pre-wrap">
          {component.css_code}
        </pre>
      ),
    },
    {
      id: "JavaScript",
      title: "JavaScript",
      content: (
        <pre className="px-[3%] py-[2%] leading-normal text-ivory whitespace-pre-wrap">
          {component.js_code || "No JS code provided."}
        </pre>
      ),
    },
    {
      id: "Database",
      title: "Database",
      content: (
        <p className="px-[3%] py-[2%] leading-normal text-ivory">
          {component.database || "No database Integration."}
        </p>
      ),
    },
  ];

    return (
        <>
        {/* Outer shell / background */}
          <div className="relative top-[8%] h-[100vh] w-[95%] mx-auto rounded-2xl">
            {/* flex / responsive wrapper */}
            <div className="flex flex-col lg:flex-row gap-2">
                {/* Left side */}
                <div className="bg-slate w-full h-[70vh] lg:h-[100vh] lg:w-[45%] rounded-t-2xl rounded-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl p-6 flex flex-col">
                    <h1 className="font-tungsten text-4xl lg:text-6xl mb-6">Component Display</h1>
                    {/* Component Display (ideally w/o background) */}
                    <div className="bg-gray w-full h-full rounded-2xl px-[3%]">       
                      <h1 className="font-tungsten text-2xl lg:text-4xl text-ivory flex justify-center py-2">{component.name || "Component Name"}</h1>
                        <div className="bg-slate rounded-2xl  h-[90%]">
                          <p className="font-tungsten text-2xl lg:text-4xl text-ivory flex justify-center lg:justify-start pt-[5%] pl-[17%]">
                              (dynamic render) of component image / svg
                          </p>
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div className="bg-caramel w-full lg:w-[55%]  lg:h-[100vh] lg:rounded-tr-2xl  rounded-2xl lg:rounded-br-2xl flex flex-col gap-3 ">
                  <h1 className="text-slate font-tungsten text-[3.2rem] leading-[2.5rem] pt-[1.5%] flex justify-center lg:text-left">Code</h1>
                    {/* Code box outer Shell */}
                    <div className="relative bg-slate h-[60vh] w-[94%] mx-auto rounded-2xl">
                        {/* Code box inner shell / window (connects w/ tabs) */}
                        <div className="relative bg-gray h-[94%] w-[96.6%] top-[3%] mx-auto rounded-2xl text-xl font-consolas">
                        {/* Renders tabs */}
                        <ComponentCodeDisplayTabs tabs={tabData} />
                        </div>
                    </div>

                    {/* Bottom Description section */}
                    <div className="flex flex-col md:flex-row ">
                        {/* Code Description (bottom left box within right) */}
                        <div className="flex flex-col px-[3%] sm:px-[2%] md:pl-[2%]">
                          <h1 className="text-slate font-tungsten text-4xl pt-[2%] lg:pt-0 mb-3 md:text-center lg:text-left">Code Description</h1>
                            <div className="bg-cinnamon rounded-2xl p-4 md:p-6 overflow-auto scrollbar-hidden w-none h-[30vh] md:w-[43.3vw] md:h-[35vh] lg:w-[25vw] lg:h-[30vh]">
                              <p className=" text-ivory font-consolas text-lg lg:text-xl">
                                {component.description || "No Description Provided."}
                              </p>
                            </div>
                        </div >
                        {/* Goodnotes Image (bottom right box within right) */}
                        <div className="flex flex-col px-[3%] sm:px-[2%] lg:px-0 lg:pt-0 pb-[2%] lg:text-right md:pr-[2%]">
                            <h1 className="text-slate font-tungsten text-4xl pt-[2%] lg:pt-0 mb-3 md:text-center lg:text-left">Written Notes</h1>
                            <div className=" bg-slate rounded-2xl flex items-center justify-center pt-[8%] w-none h-[30vh] md:w-[42vw] md:h-[35vh] lg:w-[23.4vw] lg:h-[30vh]">
                                <h1 className=" text-ivory font-tungsten text-5xl">Goodnotes Image</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
}

export default ComponentEntryDisplay;

// Sections / divs
//1. background panel (gray)
//2. left side panel
//3. component display panel (inside of above)

//4. right side panel (inside of below, gold background)
//5. code display (w tabs for versions)
//6. code description panel (below ^^)
//7 goodnotes image (maybe?)

// Render tabs component
//import ComponentCodeDisplayTabs from './ComponentCodeDisplayTabs';
// <ComponentCodeDisplayTabs tabs={tabData} />
