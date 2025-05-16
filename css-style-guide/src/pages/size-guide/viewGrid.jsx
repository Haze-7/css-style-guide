// imports
import React, { useState } from "react";

function ViewGrid() {
  const totalCols = 20; // 20 * 5vw = 100vw
  const totalRows = 20; // 20 * 5vh = 100vh
  const colSize = "5vw";
  const rowSize = "5vh";

  const [activeCells, setActiveCells] = useState(new Set());

  const toggleCell = (id) => {
    setActiveCells((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white text-black">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-[4.5%] left-[2.3%] z-50 bg-[#5E5E5E] hover:bg-[#B98857] active:bg-[#5E5E5E] active:shadow-[7px_6px_28px_1px_rgba(0,0,0,0.24)] active:translate-y-[1px] text-white text-xl px-10 py-[10.4px] rounded-4xl font-jersey"
      >
        Back
      </button>

      {/* Main Grid */}
      <div
        className="absolute top-0 left-0 z-10"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${totalCols}, ${colSize})`,
          gridTemplateRows: `repeat(${totalRows}, ${rowSize})`,
          width: `100vw`,
          height: `100vh`,
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
              style={{ width: colSize, height: rowSize }}
            />
          );
        })}
      </div>

      {/* Column Labels (Top Horizontal Ruler) */}
      <div className="absolute top-0 left-0 z-20 flex">
        {Array.from({ length: totalCols }).map((_, col) => (
          <div
            key={`col-label-${col}`}
            className="h-[2.5vh] border-l border-black flex items-center justify-start pl-1 text-3xl font-tungsten pt-2"
            style={{ width: colSize }}
          >
            {col * 5}vw
          </div>
        ))}
      </div>

      {/* Row Labels (Left Vertical Ruler) */}
      <div className="absolute top-0 left-0 z-20 flex flex-col">
        {Array.from({ length: totalRows }).map((_, row) => (
          <div
            key={`row-label-${row}`}
            className="w-[5vw] border-t border-black flex items-start justify-start pl-1 text-3xl font-tungsten"
            style={{ height: rowSize }}
          >
            {row === 0 ? "" : `${row * 5}vh`}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewGrid;
