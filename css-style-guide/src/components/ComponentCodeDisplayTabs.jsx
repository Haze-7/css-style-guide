import React, { useState } from 'react';

function ComponentCodeDisplayTabs({ tabs }) {

    const [activeTab, setActiveTab] = useState(tabs[0]?.id || "")

    
    return (
        <>
        {/* Displayed content (code box that changes w/ tab) */}
        <div className="flex flex-col w-full h-full">
            {/* Tab buttons at the top */}
            <div className="flex overflow-x-auto scrollbar-hidden space-x-4 px-3 sm:px-4 pt-3 bg-gray rounded-t-2xl shrink-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-2 px-4 text-base font-semibold transition-all border-b-4 cursor-pointer
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


