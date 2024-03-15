import React from "react";

export default function AboutCardReverse({ title, description, imgUrl }) {
  return (
    <div className="flex flex-col">
      <div className="w-full pl-20 pr-6 pt-4 max-md:max-w-full max-md:px-5">
        <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="mb-10 flex w-[36%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative flex min-h-[497px] grow flex-col items-center justify-center overflow-hidden px-16 py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src={imgUrl}
                className="absolute size-full rounded-md object-contain"
              />
            </div>
          </div>
          <div className="ml-10 mb-6 md:mb-0 flex w-[46%] flex-col max-md:ml-0 max-md:w-full">
            <div className="z-10 my-auto space-y-4 self-stretch text-indigo-800 max-md:mt-10 max-md:max-w-full">
              <span className="text-xl md:text-3xl font-bold">{title}</span>
              <p className="text-lg md:text-2xl font-thin text-gray-500">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
