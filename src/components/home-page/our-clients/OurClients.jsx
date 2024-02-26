import React from "react";
import Testimonials from "./testimonials/Testimonials";

export default function OurClients() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-[#FBF9F4] p-10">
        <div className="flex flex-col max-md:flex-col-reverse max-md:items-center">
          <div className="text-center max-md:mb-10 max-md:w-full">
            <div className="mt-4 text-xl font-medium text-gray-500">
              {" "}
              {/* Adjusted margin here */}
              OUR CLIENTS
            </div>
            <div className="mt-3 text-4xl font-medium text-black">
              What's Our Real Client Stories About Our <br /> Work & Passion
            </div>
            <div className="mt-3 font-light text-gray-500">
              When An Unkown Printer Took A Galley Of Type And Scrambled it To
              Make A Type Specimen <br /> Book it Has Survived Not Only Five
              Centuries
            </div>
          </div>
          <div className="w-full max-md:w-full">
            <div className="relative min-h-[397px] flex-grow items-center justify-center overflow-hidden max-md:mt-10 max-md:max-w-full">
              <Testimonials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
