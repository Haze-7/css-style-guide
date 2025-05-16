//imports
import React, { useState } from "react";


function pxGrid() {

    const totalCols = 25; // 25 * 100px = 2500px
    const totalRows = 25; // 2500px height
    const cellSize = 100;

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
              {/* Back Button - non-intrusive */}
      <button
        onClick={() => window.history.back()} // or a router navigate
        className="absolute top-[4.5%] left-[1%] z-50 bg-[#5E5E5E] hover:bg-[#B98857] active:bg-[#5E5E5E] active:shadow-[7px_6px_28px_1px_rgba(0,0,0,0.24)] active:translate-y-[1px] text-white text-xl px-10 py-[10.4px] rounded-4xl font-jersey "
      >
         Back
        </button>
        {/* Main Grid */}
        <div
          className="absolute top-0 left-0 z-10"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${totalCols}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${totalRows}, ${cellSize}px)`,
            width: `${totalCols * cellSize}px`,
            height: `${totalRows * cellSize}px`,
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
                style={{ width: cellSize, height: cellSize }}
              />
            );
          })}
        </div>
  
        {/* Column Labels (Top Horizontal Ruler) */}
        <div className="absolute top-0 left-0 z-20 flex">
          {Array.from({ length: totalCols }).map((_, col) => (
            <div
              key={`col-label-${col}`}
              className="w-[100px] h-[40px] border-l border-black flex items-center justify-start pl-1 text-3xl font-tungsten"
            >
              {col * 100}px
            </div>
          ))}
        </div>
  
        {/* Row Labels (Left Vertical Ruler) */}
        <div className="absolute top-0 left-0 z-20 flex flex-col">
          {Array.from({ length: totalRows }).map((_, row) => (
            <div
              key={`row-label-${row}`}
              className="h-[100px] w-[100px] border-t border-black flex items-start justify-start pl-1 text-3xl font-tungsten"
            >
              {row === 0 ? "" : `${row * 100}px`}
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default pxGrid;

//Create grid of px measurements / boxes vertically and horizontally
//items-center pl-1 text-3xl font-tungsten