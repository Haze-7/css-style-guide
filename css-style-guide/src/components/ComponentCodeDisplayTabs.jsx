import React, { useState } from 'react';

function ComponentCodeDisplayTabs({ tabs }) {

    const [activeTab, setActiveTab] = useState(tabs[0]?.id || "")

    const handleTabClick = (tabId) => {
        setActiveTab(tabId)
      }
    
    return (
        <>
        {/* Displayed content (code box that changes w/ tab) */}
        <div className="flex flex-col w-full h-full">
      {/* Tab buttons at the top */}
      <div className="flex space-x-4 px-4 pt-3 bg-gray rounded-t-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 px-4 text-base font-semibold transition-all border-b-4
              ${
                activeTab === tab.id
                  ? "border-caramel text-caramel"
                  : "border-transparent text-ivory hover:text-caramel hover:border-caramel"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab content below */}
      <div className="p-4 overflow-y-auto flex-grow text-ivory scrollbar-hidden">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
        </>
    );
}

export default ComponentCodeDisplayTabs;


//Renders the selected page (from the tab)
//example: in task, it displayes the task pages iteself / hide / show based on tab id selected
{/* <div className="relative h-[88%] w-[70%] flex m-auto items-center bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-xl top-[4%]">
{tabs.map((tab) => (
  <div key={tab.id} className={`h-full ${activeTab === tab.id ? "block" : "hidden"}`}>
    {tab.content}
  </div>
))}
</div> */}

//the tab buttons themselves (find away to put up top)
    //   {/* Right box - Tab buttons */}
    //   {/* <div className="absolute h-full w-[50%] right-0 bg-[#1E1F33] rounded-r-lg flex flex-col justify-center"> */} 
    //   <div className="flex flex-row-reverse absolute left-[85%] top-[13%]"> positions tab buttons
    //     {/* Tabs on the right */}
    //     <div className="flex flex-col"> div holding buttons
    //       {tabs.map((tab) => (
    //         <button
    //           key={tab.id}
    //           className={`
    //             border-4 border-[#C4F7BC] outline-none cursor-pointer py-10 px-4 rounded-r-xl 
    //             transition-colors duration-300 text-base text-left tab-text border-l-0 my-2 
    //             ${activeTab === tab.id ? "bg-[#0B0C2A] border-r-4 border-l-0 relative z-10 " : "bg-[#C4F7BC] hover:[#C4F7BC] tab-text text-[#0B0C2A] border border-[#0B0C2A] hover:bg-[#0B0C2A] hover:text-[#C4F7BC]"}
    //           `}
    //           onClick={() => handleTabClick(tab.id)}
    //         >
    //           {tab.title}
    //         </button>
    //       ))}
    //     </div>
    //     </div>