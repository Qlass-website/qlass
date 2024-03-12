import React from "react";

export default function PyramidLearning() {
  return (
    <div className="flex flex-col">
      <div className="w-full pl-20 pr-6 max-md:max-w-full max-md:px-5">
        <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-[44%] flex-col max-md:ml-0 max-md:w-full">
            <div className="z-10 my-auto space-y-4 self-stretch text-indigo-800 max-md:mt-10 max-md:max-w-full">
              <span className="text-4xl font-bold">
                The Pyramid of <br /> Learning
              </span>
              <p className="text-2xl font-thin text-gray-500">
                Struggling to remember what you learn? Explore the Learning{" "}
                <br /> Pyramid: a science-backed approach to maximize your{" "}
                <br /> learning potential. Master information, not just memorize
                it!
              </p>
            </div>
          </div>
          <div className="mb-10 ml-5 flex w-[56%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative flex min-h-[300px] lg:min-h-[497px] grow flex-col items-center justify-center overflow-hidden px-16 py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="/pyramidLearn.png"
                className="absolute rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
