import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";

export default function SchoolSupremacy() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-indigo-800 pl-20 pr-6 pt-2 max-md:max-w-full max-md:px-5">
        <div className="flex flex-col max-lg:flex-col max-md:items-center">
          <div className="text-center max-md:mb-10 max-md:w-full">
            <div className="mt-3 text-2xl md:w-auto lg:w-auto md:text-4xl font-bold text-white">
              Revolutionise Education with Qlass
            </div>
          </div>
        </div>
        <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex -mt-8 md:mt-0 w-[44%] flex-col max-md:ml-0 max-md:w-full">
            <div className="z-10 my-auto space-y-4 self-stretch text-white max-md:mt-10 max-md:max-w-full">
              <span className="text-2xl lg:text-3xl font-medium">Become the Best School Around With</span>
              <ul className="list-disc space-y-2 sm:w-[300px]  md:w-[300px] lg:w-auto text-gray-200 text-xs md:text-lg">
                <p className="flex items-center"><ChevronRight /><span>24 X 7 doubt solving: Solve your doubts seamlessly at any time of the day </span></p>
                <p className="flex items-center"><ChevronRight /><span>Tech Pioneer: Leverage the power of world’s best technology for your students</span></p>
                <p className="flex items-center"><ChevronRight />Interactive Engagement: Promote active participation and learning</p>
                <p className="flex items-center"><ChevronRight />Data Analytics: Generates insights for personalised teaching strategies</p>
              </ul>
            </div>
          </div>
          <div className="ml-5 flex w-[56%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative mt-12 flex min-h-[177px] md:min-h-[395px] grow flex-col items-center justify-center overflow-hidden px-16 py-12 shadow-sm max-md:mt-10 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="/aitutorImage.png"
                className="absolute inset-0 size-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
