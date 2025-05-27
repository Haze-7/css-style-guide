
import React, { useState } from 'react';

function ComponentSelectionTabs({ tabs }) {

    const [activeTab, setActiveTab] = useState(tabs[0]?.id || "")

    
    return (
        <>
        {/* Displayed content (code box that changes w/ tab) */}
            <div className="sm:w-[75%] sm:h-[10%] text-slate z-10 rounded-2xl cursor-pointer hover: active: ">
                <div className="">
                    {tabs.map((tab) => (
                        <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={` flex flex-row md:flex-col my-[2vh] rounded-2xl z-10 cursor-pointer transition-all ${
                            activeTab === tab.id ? "w-[3.6vw]" : "bg-caramel hover:bg-gold"
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

              {/* <div className="h-[11vh] md:h-full md:w-[5%] flex flex-row md:flex-col md:items-center pt-[1vh] px-[2vw] md:px-0 md:pt-[2vh] rounded-2xl z-10 gap-2 sm:gap-4 flex-nowrap order-1 md:order-2">
=

            {/* Tab content below */}
            {/* <div className="p-4 overflow-y-auto flex-grow text-ivory scrollbar-hidden">
              {tabs.map((tab) => (
                <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
                  {tab.content}
                </div>
              ))}
            </div> */}
          </div>
        </>
    );
}

export default ComponentSelectionTabs;
