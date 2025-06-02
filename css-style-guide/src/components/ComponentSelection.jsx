import { useState } from 'react';

function ComponentSelection({
  componentList,
  selectedComponentId,
  setSelectedComponentId,
}) {

   const tabData = [
  {
    id: "react",
    icon: "/src/assets/icons/react-icon.svg",
    content:     
    <div className="flex justify-center gap-12 py-4 flex-wrap rounded-xl">
      {componentList
      .filter((item) => item.language?.toLowerCase() === "react")
      .map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedComponentId(item.id)}
          className={`h-[8vh] w-[13vw] text-2xl sm:text-4xl flex justify-center items-center font-tungsten px-8 py-4 gap rounded-lg cursor-pointer transition duration-200 ${
            item.id === selectedComponentId
              ? "bg-caramel text-slate"
              : "bg-dark text-ivory"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>,
  },
  {
    id: "vite",
    icon: "/src/assets/icons/vite-icon.svg",
    content:     
    <div className="flex justify-center gap-12 py-4 flex-wrap rounded-xl">
      {componentList
      .filter((item) => item.language?.toLowerCase() === "vite")
      .map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedComponentId(item.id)}
          className={`h-[8vh] w-[13vw] text-2xl sm:text-4xl flex justify-center items-center font-tungsten px-8 py-4 gap rounded-lg cursor-pointer transition duration-200 ${
            item.id === selectedComponentId
              ? "bg-caramel text-slate"
              : "bg-gray text-ivory"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>,
  },
  {
    id: "firebase",
    icon: "/src/assets/icons/firebase-icon.svg",
    content:     
    <div className="flex justify-center gap-12 py-4 flex-wrap bg-gray rounded-xl">
      {componentList
      .filter((item) => item.language?.toLowerCase() === "firebase")
      .map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedComponentId(item.id)}
          className={`h-[8vh] w-[13vw] text-2xl sm:text-4xl flex justify-center items-center font-tungsten px-8 py-4 gap rounded-lg cursor-pointer transition duration-200 ${
            item.id === selectedComponentId
              ? "bg-caramel text-slate"
              : "bg-gray text-ivory"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>,
  },
  {
    id: "next",
    icon: "/src/assets/icons/next-icon.svg",
    content:     
    <div className="flex justify-center gap-12 py-4 flex-wrap bg-gray rounded-xl">
      {componentList
      .filter((item) => item.language?.toLowerCase() === "next")
      .map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedComponentId(item.id)}
          className={`h-[8vh] w-[13vw] text-2xl sm:text-4xl flex justify-center items-center font-tungsten px-8 py-4 gap rounded-lg cursor-pointer transition duration-200 ${
            item.id === selectedComponentId
              ? "bg-caramel text-slate"
              : "bg-gray text-ivory"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>,
  },
  {
    id: "python",
    icon: "/src/assets/icons/python-icon.svg",
    content:     
    <div className="flex justify-center gap-12 py-4 flex-wrap  rounded-xl">
      {componentList
      .filter((item) => item.language?.toLowerCase() === "python")
      .map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedComponentId(item.id)}
          className={`h-[8vh] w-[13vw] text-2xl sm:text-4xl flex justify-center items-center font-tungsten px-8 py-4 gap rounded-lg cursor-pointer transition duration-200 ${
            item.id === selectedComponentId
              ? "bg-caramel text-slate"
              : "bg-gray text-ivory"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>,
  },
  {
    id: "c",
    icon: "/src/assets/icons/C-icon.svg",
    content:     
    <div className="flex justify-center gap-12 py-4 flex-wrap bg-gray rounded-xl">
      {componentList
      .filter((item) => item.language?.toLowerCase() === "c")
      .map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedComponentId(item.id)}
          className={`h-[8vh] w-[13vw] text-2xl sm:text-4xl flex justify-center items-center font-tungsten px-8 py-4 gap rounded-lg cursor-pointer transition duration-200 ${
            item.id === selectedComponentId
              ? "bg-caramel text-slate"
              : "bg-gray text-ivory"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>,
  },
  {
    id: "java",
    icon: "/src/assets/icons/java-icon.svg",
    content:     
    <div className="flex justify-center gap-12 py-4 flex-wrap bg-gray rounded-xl">
      {componentList
      .filter((item) => item.language?.toLowerCase() === "java")
      .map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedComponentId(item.id)}
          className={`h-[8vh] w-[13vw] text-2xl sm:text-4xl flex justify-center items-center font-tungsten px-8 py-4 gap rounded-lg cursor-pointer transition duration-200 ${
            item.id === selectedComponentId
              ? "bg-caramel text-slate"
              : "bg-gray text-ivory"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>,
  },
  {
    id: "node",
    icon: "/src/assets/icons/node-icon.svg",
    content:     
    <div className="flex justify-center gap-12 py-4 flex-wrap bg-gray rounded-xl">
      {componentList
      .filter((item) => item.language?.toLowerCase() === "node")
      .map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedComponentId(item.id)}
          className={`h-[8vh] w-[13vw] text-2xl sm:text-4xl flex justify-center items-center font-tungsten px-8 py-4 gap rounded-lg cursor-pointer transition duration-200 ${
            item.id === selectedComponentId
              ? "bg-caramel text-slate"
              : "bg-gray text-ivory"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>,
  },
];

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
  {/* Component Selection Buttons (displayed through tab content)*/}
    {/* Display Tab Content */}
    {/* Add flexbox/ grid/ wrap after certain #, responsiveness */}
    <div className=" mt-6 gap-4 rounded-xl  text-ivory">
      {currentTab?.content || <p>No framework selected</p>}
    </div>
  </div>

      {/* Right: Framework List Tray */}

      <div className="h-[11vh] md:h-full md:w-[5%] min-w-[6%] xl:min-w-0 flex flex-row md:flex-col md:items-center pt-[1vh] px-[2vw] md:px-0 md:pt-[2vh] rounded-2xl z-10 sm:gap-2 flex-nowrap order-1 md:order-2 overflow-x-auto  md:overflow-y-auto scrollbar-hidden">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center rounded-2xl p-2 md:p-[14%] cursor-pointer flex-shrink-0 transition-all ${
              activeTab === tab.id
                ? "scale-110 max-w-[20vw]"
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
