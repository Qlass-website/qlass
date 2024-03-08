import React from "react";

export default function SchoolSupremacy() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-indigo-800 pl-20 pr-6 pt-12 max-md:max-w-full max-md:px-5">
        <div className="flex flex-col max-md:flex-col-reverse max-md:items-center">
          <div className="text-center max-md:mb-10 max-md:w-full">
            <div className="mt-3 text-4xl w-[300px] md:w-auto md:text-4xl font-bold text-white">
              Revolutionise Education with Qlass
            </div>
          </div>
        </div>
        <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-[44%] flex-col max-md:ml-0 max-md:w-full">
            <div className="z-10 my-auto space-y-4 self-stretch text-white max-md:mt-10 max-md:max-w-full">
              <span className="text-3xl font-medium">Become the Best School Around With</span>
              <ul className="list-disc space-y-2 w-[300px] md:w-auto pl-5 text-gray-200">
                <li>24 X 7 doubt solving: Solve your doubts seamlessly at any time of the day</li>
                <li>Tech Pioneer: Leverage the power of world’s best technology for your students</li>
                <li>Interactive Engagement: Promote active participation and learning</li>
                <li>Data Analytics: Generates insights for personalised teaching strategies </li>
              </ul>
            </div>
          </div>
          <div className="ml-5 flex w-[56%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative mt-12 flex min-h-[195px] md:min-h-[395px] grow flex-col items-center justify-center overflow-hidden px-16 py-12 shadow-sm max-md:mt-10 max-md:max-w-full max-md:px-5">
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
