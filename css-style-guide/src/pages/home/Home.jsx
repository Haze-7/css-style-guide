//imports (require ../../ to return to root folder of project)

function Home() {
    return (
        <>
        {/* Overall Background (for now) */}
            <div className="bg-[#EABA8C] text-white  w-screen flex flex-col justify-between ">

            <section className="h-screen w-screen flex flex-col justify-between">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-8xl font-tungsten text-[#2B2E35]">Welcome to CSG</h1>
                </div>
            </section>
            <section className="bg-[#2B2E35] h-screen w-screen flex flex-col justify-between">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-5xl font-tungsten text-[#EABA8C]">About</h1>
                </div>
            </section>

            <section className="bg-[#EABA8C] h-screen w-screen flex flex-col justify-between">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-5xl font-tungsten text-[#2B2E35]">What we do</h1>
                </div>
            </section>
            </div>    
        </>
    );
};

export default Home;

//Home Page Plan rn

//navbar/ header (fixed to top)
//3 major sections (scrollable/ fill page)

//1. hero section (full page height)
//2. about section (full page height)
//3. product section (full page height)

//footer (fixed to bottom) (only at bottom bottom of page (not sticky like header))