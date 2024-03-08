import React from "react";
import ResultsDisplayCards from "./ResultsDisplayCards/ResultsDisplayCards";
import Marquee from "react-fast-marquee";

export default function OurResults() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-white p-10">
        <div className="flex flex-col max-md:flex-col max-md:items-center">
          <div className="text-center max-md:mb-10 max-md:w-full">
            <div className="mt-4 text-3xl md:text-4xl font-bold text-indigo-800">
              {" "}
              {/* Adjusted margin here */}
              Our Result Speaks For US
            </div>
          </div>
          <div className="w-full max-md:w-full">
            <Marquee speed={100} direction="left">
              <div className="relative min-h-[197px] flex-grow items-center justify-center overflow-hidden max-md:mt-10 max-md:max-w-full">
                <div className="md:mt-10 space-y-5">
                  <ResultsDisplayCards />
                </div>
              </div>
            </Marquee>
            <Marquee speed={100} direction="right">
              <div className="relative min-h-[197px] flex-grow items-center justify-center overflow-hidden max-md:mt-0 max-md:max-w-full">
                <div className="md:mt-0 space-y-5">
                  <ResultsDisplayCards />
                </div>
              </div>
            </Marquee>
            <Marquee speed={100} direction="left">
              <div className="relative min-h-[197px] flex-grow items-center justify-center overflow-hidden max-md:mt-0 max-md:max-w-full">
                <div className="md:mt-0 space-y-5">
                  <ResultsDisplayCards />
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
