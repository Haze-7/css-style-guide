import React, { useState, useEffect } from "react";

function PercentGrid() {
  const totalCols = 20; // 5% increments
  const totalRows = 20;
  const [activeCells, setActiveCells] = useState(new Set());
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Track screen resize to keep grid accurate
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCell = (id) => {
    setActiveCells((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const cellWidth = screenSize.width / totalCols;
  const cellHeight = screenSize.height / totalRows;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white text-black">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-[4.8%] left-[2%] z-50 bg-[#5E5E5E] hover:bg-[#B98857] active:bg-[#5E5E5E] active:shadow-[7px_6px_28px_1px_rgba(0,0,0,0.24)] active:translate-y-[1px] text-white text-xl px-10 py-[10.4px] rounded-4xl font-jersey"
      >
        Back
      </button>

      {/* Grid */}
      <div
        className="absolute top-0 left-0 z-10"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${totalCols}, 1fr)`,
          gridTemplateRows: `repeat(${totalRows}, 1fr)`,
          width: "100vw",
          height: "100vh",
        }}
      >
        {Array.from({ length: totalRows * totalCols }).map((_, index) => {
          const row = Math.floor(index / totalCols);
          const col = index % totalCols;
          const id = `cell-${row}-${col}`;
          const isActive = activeCells.has(id);

          return (
            <div
              key={id}
              onClick={() => toggleCell(id)}
              className={`border border-black cursor-pointer select-none ${
                isActive ? "bg-[#EABA8C]" : "bg-white"
              }`}
              style={{
                width: `${cellWidth}px`,
                height: `${cellHeight}px`,
              }}
            />
          );
        })}
      </div>

      {/* Horizontal (Top) Ruler */}
      <div className="absolute top-0 left-0 z-20 flex w-full">
        {Array.from({ length: totalCols }).map((_, col) => (
          <div
            key={`col-label-${col}`}
            className="border-l border-black flex items-center justify-start pl-1 md:text-3xl sm:text-2xl  font-tungsten"
            style={{
              width: `${100 / totalCols}%`,
              height: "40px",
            }}
          >
            {col * (100 / totalCols)}%
          </div>
        ))}
      </div>

      {/* Vertical (Left) Ruler */}
      <div className="absolute top-0 left-0 z-20 flex flex-col h-full">
        {Array.from({ length: totalRows }).map((_, row) => (
          <div
            key={`row-label-${row}`}
            className="border-t border-black flex items-start justify-start pl-1 md:text-3xl sm:text-2xl font-tungsten"
            style={{
              height: `${100 / totalRows}%`,
              width: `${cellWidth}px`,
            }}
          >
            {row === 0 ? "" : `${row * (100 / totalRows)}%`}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PercentGrid;