import React from "react";
import BrandCards from "./BrandCards/BrandCards";

export default function Brands() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-[#FCFCFC] p-10">
        <div className="flex flex-col max-md:flex-col max-md:items-center px-10">
          <div className="mt-10 text-center max-md:mb-0 max-md:w-full">
            <div className="mt-4 text-2xl md:text-4xl font-medium text-[#50536A]">
              Trusted by <span className="text-[#22163F]">1000+</span> Students all over India <br/> Recommended by Govt. of Bihar.
            </div>
          </div>
          <div className="w-full max-md:w-full">
            <div className="relative lg:min-h-[137px] flex-grow items-center justify-center overflow-hidden max-md:mt-10 max-md:max-w-full">
              <div className="md:ml-0 lg:mt-8">
                <BrandCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
