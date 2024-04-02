import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-indigo-800 pl-20 pr-6  max-md:max-w-full max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 px-10">
          <div className="flex w-[64%] flex-col max-md:ml-0 max-md:w-full">
            <div className="z-10 my-auto space-y-4 self-stretch text-center md:text-left md:text-5xl text-white max-md:mt-10 max-md:max-w-full">
              <span className="font-medium text-xl md:text-3xl">
                Unleash Your Child's Potential:
              </span>
              <br />
              <span className="font-thin text-xl md:text-3xl">Build a Strong Foundation for </span>
              <br />
              <span className="font-thin text-xl md:text-3xl">Future Success</span>
            </div>
          </div>
          <div className="ml-5 flex w-[56%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative flex min-h-[220px] -mb-1.5 md:-mb-4 md:min-h-[497px] grow flex-col items-center justify-center overflow-hidden px-16 py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="/Girlbanner.png"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
