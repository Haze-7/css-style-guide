//this is where I handle the component display, code, description, and anything else display

function ComponentEntryDisplay() {
    return (
        <>
        {/* Outer shell / background */}
          <div className="relative top-[8%] h-[90vh] w-[95%] mx-auto bg-gray rounded-2xl">
            {/* Left side */}
            <h1 className="absolute top-[8%] left-[13%] font-tungsten text-6xl">Component Display</h1>

            {/* Right side */}
            <div className="absolute bg-caramel w-[55%] h-full right-0 rounded-2xl">
                {/* Code box outer Shell */}
                <div className="relative bg-slate h-[50%] w-[94%] mt-[3%] mx-auto rounded-2xl">
                    {/* Code box inner shell / window (connects w/ tabs) */}
                    <div className="relative bg-gray h-[94%] w-[96.6%] top-[3%] mx-auto rounded-2xl">

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