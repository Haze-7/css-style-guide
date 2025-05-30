//imports 
import {Link} from "react-router-dom";
import {useRef, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

function SizeGuide() {

    const { ref: pxRef, inView: pxIsVisible } = useInView({
        threshold: 0.5, // Triggers when 50% of the element is visible
      });

      const { ref: percentRef, inView: percentIsVisible } = useInView({
        threshold: 0.5, // Triggers when 50% of the element is visible
      });

      const { ref: remRef, inView: remIsVisible } = useInView({
        threshold: 0.5, // Triggers when 50% of the element is visible
      });

      const { ref: viewRef, inView: viewIsVisible } = useInView({
        threshold: 0.5, // Triggers when 50% of the element is visible
      });



    return (
        <>
            <div className="shadow-2xl bg-gold text-white w-screen flex flex-col justify-between">
                <section className="h-screen w-full flex flex-col justify-between ">
                    <div className="flex flex-col items-center h-screen ">
                        <h1 className="relative text-8xl font-tungsten text-carbon top-[30%]">Size Guide</h1>
                    </div>
                </section>
                <section className="bg-ivory h-[200rem] w-screen  ">
                    <div className="flex flex-col justify-center items-center relative top-[8%] ">
                        <h1 className="text-7xl font-tungsten text-cinnamon">Sizing Units</h1>
                        <p className="text-4xl font-tungsten text-carbon mt-6">
                            Pixels (px), Percentages (%), REM, and Viewport Units (vw, vh)
                        </p>
                        
                        {/* Box here for each */}
                        {/* Have toggable box that shows differences (modal box) */}
                        <div className="relative bg-slate w-[80%] h-[40rem] mt-10 flex flex-col justify-center  rounded-3xl shadow-xl">
                            <div className="absolute bg-gold w-[52%] h-full rounded-2xl shadow-md ">
                                <h1 className="text-5xl font-tungsten text-carbon text-center pt-10">Pixels (px)</h1>
                                <p className="text-2xl font-tungsten text-carbon text-center mt-6">
                                    Pixels are the most common unit of measurement in web design. They are fixed-size units that do not scale with the screen size.
                                </p>
                                
                            </div>
                        </div>
                        {/* Create slide in blocks for each style size/ typee */}
                        <div className=" relative top-[8%] h-min-screen w-full">
                            {/* Title Header */}
                                <h1 className="text-8xl font-tungsten text-cinnamon flex justify-center pt-24 text-shadow-lg shadow-gray-400">Try these Units</h1>

                            {/* Right side px bar */}
                            <div ref={pxRef} className={`shadow-lg shadow-gray-400 absolute bg-gray w-[40%] h-[20rem] top-[28rem] right-0 rounded-2xl border-10 border-gold slide-animate-right ${pxIsVisible ? 'show' : ''}`}
                                >
                                <Link to="/px" className="absolute top-[38%] left-[5%] font-tungsten text-white text-6xl hover:text-[#EABA8C] cursor-pointer "> Pixels (px)</Link>
                            </div>

                            {/* Left side % bar */}
                            <div ref={percentRef} className={`shadow-lg shadow-gray-400 absolute bg-gray w-[40%] h-[20rem] top-[50rem] left-0  rounded-2xl border-10 border-gold slide-animate-left ${percentIsVisible ? 'show' : ''}`}>
                                    <Link to="/percent" className="absolute top-[38%] right-[5%] font-tungsten text-white text-6xl hover:text-[#EABA8C] cursor-pointer"> Percentage (%)</Link>
                            </div>

                            {/* Right side Rem bar */}
                            <div ref={remRef} className={`shadow-lg shadow-gray-400 absolute bg-gray w-[40%] h-[20rem] top-[71rem] right-0  rounded-2xl border-10 border-gold slide-animate-right ${remIsVisible ? 'show' : ''}`}>
                                    <Link to="/rem" className="absolute top-[38%] left-[5%] font-tungsten text-white text-6xl hover:text-[#EABA8C] cursor-pointer"> REM (rem)</Link>
                            </div>

                            {/* Left side View bar */}
                            <div ref={viewRef} className={`shadow-lg shadow-gray-400 absolute bg-gray w-[40%] h-[20rem] top-[93rem] left-0  rounded-2xl border-10 border-gold slide-animate-left ${viewIsVisible ? 'show' : ''}`}>
                                <Link to="/view" className="absolute top-[38%] right-[5%] font-tungsten text-white text-6xl hover:text-[#EABA8C] cursor-pointer"> View (vw)</Link>
                            </div>                       

                        </div>
                    
                    </div>
                </section>

                <section className="bg-slate h-screen w-screen flex flex-col justify-between ">
                    <div className="flex flex-col justify-center items-center h-screen ">
                        <h1 className="text-5xl font-tungsten text-[#white]">Measurement Rulers</h1>
                        <p className="text-2xl font-tungsten text-cinnamon mt-6">
                            Your one stop measurement shop
                        </p>
                    </div>
                </section>
            </div>   
        </>
    );
};

export default SizeGuide;