import { BookDashed, Settings, Youtube } from "lucide-react";
import React, { useState } from "react";

export default function HowToStart() {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-[#251442] p-10">
        <div className="flex flex-col max-md:flex-col-reverse max-md:items-center">
          <div className="text-center max-md:mb-10 max-md:w-full">
            <div className="mt-4 text-4xl font-medium text-white">
              {" "}
              {/* Adjusted margin here */}
              Don't Know How To Start with <br /> Qlass Courses
            </div>
          </div>
          <div className="w-full max-md:w-full">
            <div className="relative flex min-h-[397px] flex-grow items-center justify-between overflow-hidden shadow-sm max-md:mt-10 max-md:max-w-full">
              <div className="w-1/4 bg-transparent text-white">
                <div
                  className={`flex cursor-pointer items-center space-x-4 p-4 ${selectedTab === "tab1" ? "text-white underline underline-offset-8" : ""}`}
                  onClick={() => handleTabClick("tab1")}
                >
                  <Youtube /> <h1>Smart LMS</h1>
                </div>
                <div
                  className={`flex cursor-pointer items-center space-x-4 p-4 ${selectedTab === "tab2" ? "text-white underline underline-offset-8" : ""}`}
                  onClick={() => handleTabClick("tab2")}
                >
                  <Settings /> <h1>Easy To Customize</h1>
                </div>
                <div
                  className={`flex cursor-pointer items-center space-x-4 p-4 ${selectedTab === "tab3" ? "text-white underline underline-offset-8" : ""}`}
                  onClick={() => handleTabClick("tab3")}
                >
                  <BookDashed /> <h1>Powerful Dashboard</h1>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-grow p-4 text-white">
                {selectedTab === "tab1" && (
                  <div>
                    <h1>Content for Tab 1</h1>
                  </div>
                )}
                {selectedTab === "tab2" && (
                  <div>
                    <p>Content for Tab 2</p>
                  </div>
                )}
                {selectedTab === "tab3" && (
                  <div>
                    <p>Content for Tab 3</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
