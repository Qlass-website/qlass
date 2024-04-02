import React from "react";

export default function WhyQlass() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-[#FBF9F3] px-10 py-6">
        <div className="flex flex-col max-md:flex-col max-md:items-center">
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <div className="text-center space-y-2 md:space-y-0 max-md:mb-0 max-md:w-full xl:mt-0">
              <span className="text-2xl md:text-4xl font-bold">
                Why Qlass?
              </span>
              <p className="md:text-2xl font-thin text-black">
               Step wise method for guaranteed growth
              </p>
            </div>
          </div>
          <div className="w-full max-md:w-full -mb-6">
            <div className="relative items-center justify-center max-md:mt-10 max-md:max-w-full">
            <img loading="lazy" src="/whyQlass2.png" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* <div className="bg-[#FBF9F3]">
      <div>

      </div>
      <img loading="lazy" src="/whyQlass1.png" className="w-full h-[240px] md:h-[250px] lg:h-auto px-16" />
    </div> */}