

function ComponentSelection({
  componentList,
  selectedComponentId,
  setSelectedComponentId,
}) {

  if (!componentList || componentList.length === 0) {
    return <p className="text-center text-ivory mt-4">No components available.</p>;
  }
  return (
<div className="relative top-[10vh] h-[80vh] w-[95%] mx-auto rounded-2xl bg-caramel z-0 flex">
  {/* Left: Main Content Area */}
  <div className="flex-1 w-[95%] bg-slate rounded-2xl z-10 p-4 overflow-auto">
    <h1 className="text-6xl font-tungsten flex justify-center pt-[5vh]">
      Component Selection
    </h1>
    <div className="flex justify-center gap-12 py-4 flex-wrap pt-[10vh]">
      {componentList.map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedComponentId(item.id)}
          className={`h-[8vh] w-[15%] text-4xl font-tungsten px-8 py-4 gap rounded-lg transition duration-200 ${
            item.id === selectedComponentId
              ? "bg-caramel text-slate"
              : "bg-gray text-ivory"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  </div>

  {/* Right: Framework List Tray */}
  <div className="w-[5%] h-full  flex flex-col items-center pt-[2vh] rounded-2xl z-10 gap-4">
    {/* icon */}
    <button className="w-[75%] h-[10%] text-slate z-10 rounded-2xl">
        <img src="./src/assets/icons/vite-icon.svg" alt="Icon 1" className="" />
    </button>

    <button className="w-[75%] h-[10%] text-slate z-10 rounded-2xl">
        <img src="./src/assets/icons/react-icon.svg" alt="Icon 1" className="" />
    </button>

    <button className="w-[75%] h-[10%] text-slate z-10 rounded-2xl">
        <img src="./src/assets/icons/firebase-icon.svg" alt="Icon 1" className="" />
    </button>

    <button className="w-[75%] h-[10%] text-slate z-10 rounded-2xl">
        <img src="./src/assets/icons/next-icon.svg" alt="Icon 1" className="" />
    </button>

    <button className="w-[75%] h-[10%] text-slate z-10 rounded-2xl">
        <img src="./src/assets/icons/python-icon.svg" alt="Icon 1" className="" />
    </button>


    {/* <img src="./src/assets/icons/python-icon.svg" alt="Icon 1" className="w-[75%] h-[10%] text-slate z-10 rounded-2xl" /> */}

    <div className="w-[75%] h-[10%] bg-white text-slate z-10 rounded-2xl pt-[vh]  ">
        Icon    
    </div>
    <div className="w-[75%] h-[10%] bg-white text-slate z-10 rounded-2xl pt-[vh]  ">
        Icon    
    </div>
  </div>
</div>

  );
}

export default ComponentSelection;