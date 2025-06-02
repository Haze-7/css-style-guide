import React, { useState } from 'react';

 const tabData = [
  {
    id: "vite",
    icon: "/src/assets/icons/vite-icon.svg",
    content: <div>Vite code example...</div>,
  },
  {
    id: "react",
    icon: "/src/assets/icons/react-icon.svg",
    content: <div>React code example...</div>,
  },
  {
    id: "firebase",
    icon: "/src/assets/icons/firebase-icon.svg",
    content: <div>Firebase code example...</div>,
  },
  {
    id: "next",
    icon: "/src/assets/icons/next-icon.svg",
    content: <div>Next.js code example...</div>,
  },
  {
    id: "python",
    icon: "/src/assets/icons/python-icon.svg",
    content: <div>Python code example...</div>,
  },
  {
    id: "c",
    icon: "/src/assets/icons/C-icon.svg",
    content: <div>C code example...</div>,
  },
  {
    id: "java",
    icon: "/src/assets/icons/java-icon.svg",
    content: <div>Java code example...</div>,
  },
  {
    id: "node",
    icon: "/src/assets/icons/node-icon.svg",
    content: <div>Node.js code example...</div>,
  },
];




function ComponentSelection({
  componentList,
  selectedComponentId,
  setSelectedComponentId,
}) {

  const [activeTab, setActiveTab] = useState(tabData[0]?.id || '');
  const currentTab = tabData.find((tab) => tab.id === activeTab);

  if (!componentList || componentList.length === 0) {
    return <p className="text-center text-ivory mt-4">No components available.</p>;
  }
  return (
<div className="relative h-[90vh] w-[95%] mx-auto rounded-2xl bg-caramel z-0 flex flex-col md:flex-row  ">
  {/* Left: Main Content Area */}
  <div className="flex-1 flex-grow w-[100%] md:w-[95%] h-[87%] md:h-[90vh] pt-[2.4vh] md:mt-0 bg-slate rounded-2xl z-10 p-4 flex-nowrap order-2 md:order-1 ">
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

        {/* Display Tab Content */}
        <div className="mt-8 p-4 rounded-xl bg-gray text-ivory">
          {currentTab?.content || <p>No framework selected</p>}
        </div>
  </div>

      {/* Right: Framework List Tray */}

      <div className="h-[11vh] md:h-full md:w-[5%] min-w-[6%] xl:min-w-0 flex flex-row md:flex-col md:items-center pt-[1vh] px-[2vw] md:px-0 md:pt-[2vh] rounded-2xl z-10 sm:gap-2 flex-nowrap order-1 md:order-2 overflow-x-auto md:overflow-y-auto scrollbar-hidden">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center rounded-2xl p-2 md:p-[14%]  flex-shrink-0 transition-all ${
              activeTab === tab.id
                ? " scale-110 max-w-[20vw]"
                : "bg-caramel hover:scale-105 max-w-[20vw]" 
            }`}
          >
            <img
              src={tab.icon}
              alt={tab.id}
              className="min-w-[30px] min-h-[30px]"
            />
          </button>
        ))}
      </div>
</div>

  );
}

export default ComponentSelection;

    {/* <img src="./src/assets/icons/python-icon.svg" alt="Icon 1" className="w-[75%] h-[10%] text-slate z-10 rounded-2xl" /> */}

    {/* <div className="w-[75%] h-[10%] bg-white text-slate z-10 rounded-2xl pt-[vh]  ">
        Icon    
    </div>
    <div className="w-[75%] h-[10%] bg-white text-slate z-10 rounded-2xl pt-[vh]  ">
        Icon    
    </div> */}

     {/* <button className=" sm:w-[75%] sm:h-[10%] text-slate z-10 rounded-2xl cursor-pointer hover: active: ">
        <img src="./src/assets/icons/vite-icon.svg" alt="Icon 1" className=" min-w-[30px] min-h-[30px] object-contain" />
    </button>

    <button className="sm:w-[75%] sm:h-[10%] text-slate z-10 cursor-pointer rounded-2xl">
        <img src="./src/assets/icons/react-icon.svg" alt="Icon 1" className=" min-w-[30px] min-h-[30px] object-contain" />
    </button>

    <button className="sm:w-[75%] sm:h-[10%] text-slate z-10 cursor-pointer rounded-2xl">
        <img src="./src/assets/icons/firebase-icon.svg" alt="Icon 1" className=" min-w-[30px] min-h-[30px] object-contain" />
    </button>

    <button className="sm:w-[75%] sm:h-[10%] text-slate z-10 cursor-pointer rounded-2xl">
        <img src="./src/assets/icons/next-icon.svg" alt="Icon 1" className=" min-w-[30px] min-h-[30px] object-contain" />
    </button>

    <button className="sm:w-[75%] sm:h-[10%] text-slate z-10 cursor-pointer rounded-2xl">
        <img src="./src/assets/icons/python-icon.svg" alt="Icon 1" className=" min-w-[30px] min-h-[30px] object-contain" />
    </button>

        <button className="sm:w-[75%] sm:h-[10%] text-slate z-10 cursor-pointer rounded-2xl">
        <img src="./src/assets/icons/C-icon.svg" alt="Icon 1" className=" min-w-[30px] min-h-[30px] object-contain" />
    </button>

    <button className="sm:w-[75%] sm:h-[10%] text-slate z-10 cursor-pointer rounded-2xl">
        <img src="./src/assets/icons/java-icon.svg" alt="Icon 1" className=" min-w-[30px] min-h-[30px] object-contain" />
    </button>

    <button className="sm:w-[75%] sm:h-[10%] text-slate z-10 cursor-pointer rounded-2xl">
        <img src="./src/assets/icons/node-icon.svg" alt="Icon 1" className=" min-w-[30px] min-h-[30px] object-contain" />
    </button> */}