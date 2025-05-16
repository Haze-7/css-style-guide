//imports


function pxGuide() {

    const totalCols = 25; // 25 * 100px = 2500px
    const totalRows = 25; // 2500px height


    return (
        <div className="relative h-screen w-screen overflow-hidden bg-white text-black">
          {/* Horizontal Grid (vertical lines) */}
          <div
            className="absolute top-0 left-0 flex h-full z-0 pointer-events-none"
            style={{ width: `${totalCols * 100}px` }}
          >
            {Array.from({ length: totalCols }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="w-[100px] border-l-[1px] border-black h-full flex items-start pl-1 text-3xl font-tungsten"
              >
                {i * 100}px
              </div>
            ))}
          </div>
    
          {/* Vertical Grid (horizontal lines) */}
          <div
            className="absolute top-0 left-0 flex flex-col w-full z-10 pointer-events-none"
            style={{ height: `${totalRows * 100}px` }}
          >
            {Array.from({ length: totalRows }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="h-[100px] border-t-[1px] border-black w-full flex items-start pl-1 text-3xl font-tungsten"
              >
                 {/* Hide label at 0px to avoid overlap */}
                {i === 0 ? '' : `${i * 100}px`}
              </div>
            ))}
          </div>
        </div>
      );
    }
  

export default pxGuide;

//Create grid of px measurements / boxes vertically and horizontally
//items-center pl-1 text-3xl font-tungsten