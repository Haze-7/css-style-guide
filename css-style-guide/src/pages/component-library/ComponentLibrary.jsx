//imports

function ComponentLibrary() {
    return (
        <>
          <div className="bg-[#2E2927] text-white w-screen flex flex-col justify-between">
            <section className="h-screen w-full flex flex-col justify-between ">
                <div className="flex flex-col items-center h-screen ">
                    <h1 className="relative text-8xl font-tungsten text-[#D4AA7D] top-[30%]">Components</h1>
                </div>
            </section>
            <section className="bg-[#D4AA7D] h-[200rem] w-screen  ">
              {/* 3 Levels */}
              {/* Intro / slide in w/ base css / tailwind css, etc */}
              {/* select to get list of component types/ add search? */}
              {/* Display component management screen (or put below / in middle) */}

              
            </section>
            <section className="bg-[#2B2E35] h-screen w-screen flex flex-col justify-between ">
                    <div className="flex flex-col justify-center items-center h-screen ">
                        <h1 className="text-5xl font-tungsten text-[#white]">Component Garage</h1>
                        <p className="text-2xl font-tungsten text-[#white] mt-6">
                            Your one stop Component shop
                        </p>
                    </div>
                </section>
          </div>
        </>
    );
};

export default ComponentLibrary;