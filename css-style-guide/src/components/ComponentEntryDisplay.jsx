//this is where I handle the component display, code, description, and anything else display
import ComponentCodeDisplayTabs from './ComponentCodeDisplayTabs.jsx';

//Decide tab data / display properties
//eventually each will be filled dynamically with database info
//ex: (component.html)
const tabData = [
    {
      id: "HTML",
      title: "HTML",
      content: (
        <p className="px-[3%] py-[2%] leading-normal text-ivory">
            Example Code (Make possible to be dynamically filled with database later)
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            &lt;div&gt;Example code&lt;/div&gt;
            Example Code (Make possible to be dynamically filled with database later)
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             &lt;div&gt;Example code&lt;/div&gt;
            {/* %lt is < and %gt is > */}
        </p>
      ),
    },
    {
      id: "CSS",
      title: "CSS",
      content: (
        <p className="px-[3%] py-[2%] leading-normal text-ivory">
            CSS Example
        </p>
      ),
    },
    {
      id: "JavaScript",
      title: "JavaScript",
      content: (
        <p className="px-[3%] py-[2%] leading-normal text-ivory">
            JavaScript Example
        </p>
      ),
    },
    
    {
      id: "TBD",
      title: "TBD",
      content: (
        <p className="px-[3%] py-[2%] leading-normal text-ivory">
            TBD Example
        </p>
      ),
    },
  ]



function ComponentEntryDisplay() {
    return (
        <>
        {/* Outer shell / background */}
          <div className="relative top-[8%] h-[100vh] w-[95%] mx-auto rounded-2xl">
            {/* flex / responsive wrapper */}
            <div className="flex flex-col lg:flex-row gap-2">
                {/* Left side */}
                <div className="bg-dark w-full h-[52vh] lg:h-[100vh] lg:w-[45%] rounded-t-2xl rounded-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl p-6 flex flex-col">
                    <h1 className="font-tungsten text-4xl lg:text-6xl mb-6">Component Display</h1>
                    {/* Component Display (ideally w/o background) */}
                    <div className="bg-slate w-full h-full rounded-2xl p-4">
                        <p className="font-tungsten text-2xl lg:text-4xl text-ivory">
                            Temp background, will display components from code here 
                            (dynamic render)
                        </p>
                    </div>
                </div>
                {/* Right side */}
                <div className="bg-caramel w-full lg:w-[55%] lg:h-[100vh] lg:rounded-tr-2xl  rounded-2xl lg:rounded-br-2xl flex flex-col gap-3 ">
                <h1 className="text-slate font-tungsten text-[3.2rem] leading-[2.5rem] pt-[1%] flex justify-center lg:text-left">Code</h1>
                    {/* Code box outer Shell */}
                    <div className="relative bg-slate h-[60vh] w-[94%] mx-auto rounded-2xl">
                        {/* Code box inner shell / window (connects w/ tabs) */}
                        <div className="relative bg-gray h-[94%] w-[96.6%] top-[3%] mx-auto rounded-2xl text-xl font-consolas">
                        {/* Renders tabs */}
                        <ComponentCodeDisplayTabs tabs={tabData} />
                        </div>
                    </div>

                    {/* Bottom Description section */}
                    <div className="flex flex-col lg:flex-row   ">
                        {/* Code Description (bottom left box within right) */}
                        <div className="flex flex-col px-[2%] lg:pl-[2%]">
                            <h1 className="text-slate font-tungsten text-4xl pt-[2%] lg:pt-0 mb-3 text-center lg:text-left">Code Description</h1>
                            <div className="bg-cinnamon rounded-2xl p-6 overflow-auto scrollbar-hidden h-[45vh] lg:w-[52vh] lg:h-[32vh]">
                                {/* <h1 className="text-slate font-tungsten text-3xl lg:text-5xl mb-4 text-center lg:text-left">Code Description</h1> */}
                                <p className=" text-ivory font-consolas text-lg lg:text-xl">
                                    Example Code Description (Make possible to be dynamically filled with database later)
                                    Example Code Description (Make possible to be dynamically filled with database later)
                                    Example Code Description (Make possible to be dynamically filled with database later)
                                    Example Code Description (Make possible to be dynamically filled with database later)
                                    Example Code Description (Make possible to be dynamically filled with database later)
                                    Example Code Description (Make possible to be dynamically filled with database later)
                                    Example Code Description (Make possible to be dynamically filled with database later)
                                   Example Code Description (Make possible to be dynamically filled with database later)
                                    Example Code Description (Make possible to be dynamically filled with database later)
                                    Example Code Description (Make possible to be dynamically filled with database later)
                                    Example Code Description (Make possible to be dynamically filled with database later)
                                    Example Code Description (Make possible to be dynamically filled with database later)
                                    Example Code Description (Make possible to be dynamically filled with database later)

                                </p>
                            </div>
                        </div >
                        {/* Goodnotes Image (bottom right box within right) */}
                        <div className="flex flex-col pt-[2%] px-[2%] lg:px-0 lg:pt-0 pb-[2%] lg:pr-[2%]">
                            <h1 className="text-slate font-tungsten text-4xl mb-3 text-center lg:text-left">Written Notes</h1>

                            <div className=" bg-slate rounded-lg flex items-center justify-center pt-[8%] w-full h-[50vh] lg:w-[50vh] lg:h-[32vh]">
                                <h1 className=" text-slate font-tungsten text-5xl">Goodnotes Image</h1>
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
