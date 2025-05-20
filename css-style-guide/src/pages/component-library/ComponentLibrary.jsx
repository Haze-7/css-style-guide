//imports

function ComponentLibrary() {
    return (
        <>
          <div className="bg-dark text-white w-screen flex flex-col justify-between">
            <section className="h-screen w-full flex flex-col justify-between ">
                <div className="flex flex-col items-center h-screen ">
                    <h1 className="relative text-8xl font-tungsten text-gold top-[30%]">Components</h1>
                </div>
            </section>
            <section className="bg-gold h-[200rem] w-screen  ">
              {/* 3 Levels */}
              {/* Intro / slide in w/ base css / tailwind css, etc */}
              {/* select to get list of component types/ add search? */}
              {/* Display component management screen (or put below / in middle) */}
              {/* overall page div */}
              <div className="relative   ">
                 <h1 className="relative text-8xl font-tungsten text-dark pt-[7%] flex justify-center">Previous Projects</h1>

              {/*Infinite  Horizontal Scroll Animation */}
                <div className="relative pt-[5%] w-[80%] mx-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"> 
                  {/* flex flex-col justify-center items-center relative */}
                  <div class="w-full inline-flex flex-nowrap animate-infinite-scroll  ">
                    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none">
                        <li>
                            <img height={200} width={200} src="./barber.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img height={200} width={200} src="./barber.svg" alt="Disney" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./barber.svg" alt="Airbnb" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./barber.svg" alt="Apple" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./barber.svg" alt="Spark" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./barber.svg" alt="Samsung" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./barber.svg" alt="Quora" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./barber.svg" alt="Sass" />
                        </li>
                    </ul> 
                      {/*LIst 2  */}
                      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none" aria-hidden="true">
                      <li>
                            <img height={200} width={200} src="./CSG.svg" alt="Facebook" />
                        </li>
                        <li>
                            <img height={200} width={200} src="./CSG.svg" alt="Disney" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./CSG.svg" alt="Airbnb" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./CSG.svg" alt="Apple" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./CSG.svg" alt="Spark" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./CSG.svg" alt="Samsung" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./CSG.svg" alt="Quora" />
                        </li>
                        <li>
                            <img height={200} width={200}  src="./CSG.svg" alt="Sass" />
                        </li>
                    </ul>             
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-dark h-screen w-screen flex flex-col justify-between ">
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