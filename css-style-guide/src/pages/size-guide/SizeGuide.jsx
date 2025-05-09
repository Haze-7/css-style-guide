//imports 


function SizeGuide() {
    return (
        <>
            <div className="bg-[#D4AA7D] text-white w-screen flex flex-col justify-between ">
                <section className="h-screen w-screen flex flex-col justify-between">
                    <div className="flex flex-col items-center h-screen">
                        <h1 className="relative text-8xl font-tungsten text-[#272727] top-[30%]">Size Guide</h1>
                    </div>
                </section>
                <section className="bg-[#F3F0E8] h-[200rem] w-screen flex flex-col justify-between">
                    <div className="flex flex-col justify-center items-center relative top-[8%]">
                        <h1 className="text-7xl font-tungsten text-[#9E7153]">Sizing Units</h1>
                        <p className="text-4xl font-tungsten text-[#272727] mt-6">
                            Pixels (px), Percentages (%), and Viewport Units (vw, vh)
                        </p>
                        
                        {/* Box here for each */}
                        {/* Have toggable box that shows differences (modal box) */}
                        <div className="relative bg-[#2B2E35] w-[80%] h-[40rem] mt-10 flex flex-col justify-center  rounded-3xl shadow-xl">
                            <div className="absolute bg-[#D4AA7D] w-[60%] h-full rounded-2xl shadow-md ">
                                <h1 className="text-5xl font-tungsten text-[#272727] text-center pt-10">Pixels (px)</h1>
                                <p className="text-2xl font-tungsten text-[#272727] text-center mt-6">
                                    Pixels are the most common unit of measurement in web design. They are fixed-size units that do not scale with the screen size.
                                </p>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </section>

                <section className="bg-[#2B2E35] h-screen w-screen flex flex-col justify-between">
                    <div className="flex flex-col justify-center items-center h-screen">
                        <h1 className="text-5xl font-tungsten text-[#2B2E35]">ABD</h1>
                    </div>
                </section>
            </div>   
        </>
    );
};

export default SizeGuide;