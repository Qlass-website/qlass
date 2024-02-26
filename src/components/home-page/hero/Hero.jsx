import React from 'react'

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="pt-12 pr-6 pl-20 w-full bg-indigo-800 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="z-10 self-stretch my-auto text-4xl text-white max-md:mt-10 max-md:max-w-full">
              <span className="font-medium">
                Unleash Your Child's Potential:
              </span>
              <br />
              <span className="font-light">Build a Strong Foundation for </span>
              <br />
              <span className="font-light">Future Success</span>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-12 mt-12 shadow-sm min-h-[497px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="/HeroImage.png"
                className="object-cover absolute inset-0 size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
