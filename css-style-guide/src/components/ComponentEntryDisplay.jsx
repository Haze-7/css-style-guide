//this is where I handle the component display, code, description, and anything else display
import ComponentCodeDisplayTabs from './ComponentCodeDisplayTabs.jsx';

//Decide tab data / display properties
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
          <div className="relative top-[8%] h-[90vh] w-[95%] mx-auto bg-gray rounded-2xl">
            {/* Left side */}
            <h1 className="absolute top-[8%] left-[13%] font-tungsten text-6xl">Component Display</h1>
            {/* Component Display (ideally w/o background) */}
            <div className="absolute bg-slate w-[40%] h-[78%] top-[20%] left-[3%] rounded-2xl">
                <p className="font-tungsten text-4xl text-ivory  px-[5%] py-[3%] ">
                    Temp background, will display components from code here 
                    (dynamic render)
                </p>
            </div>
            {/* Right side */}
            <div className="absolute bg-caramel w-[55%] h-full right-0 rounded-tr-2xl rounded-br-2xl">
                {/* Code box outer Shell */}
                <div className="relative bg-slate h-[50%] w-[94%] mt-[3%] mx-auto rounded-2xl">
                    {/* Code box inner shell / window (connects w/ tabs) */}
                    <div className="relative bg-gray h-[94%] w-[96.6%] top-[3%] mx-auto rounded-2xl text-xl font-consolas">

                    {/* Renders tabs */}
                    <ComponentCodeDisplayTabs tabs={tabData} />
                    </div>
                </div>

                {/* Bottom Description section */}
                <div className="mt-[3%]">
                    {/* Code Description (bottom left box within right) */}
                    <div className="absolute bg-cinnamon h-[40%] w-[50%] left-[3%] rounded-2xl ">
                        <h1 className="absolute top-[8%] flex left-[27%] text-slate font-tungsten text-5xl">Code Description</h1>
                    </div>
                    {/* Goodnotes Image (bottom right box within right) */}
                    <div className="absolute bg-cinnamon h-[40%] w-[42%] right-[3%] rounded-2xl ">
                        <h1 className="absolute top-[8%] left-[20%] text-slate font-tungsten text-5xl">Goodnotes Image</h1>
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
