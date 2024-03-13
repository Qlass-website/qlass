import React from "react";
import Testimonials from "./testimonials/Testimonials";

export default function OurClients() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-[#FBF9F4] px-10 py-4">
        <div className="flex flex-col max-md:flex-col max-md:items-center">
          <div className="text-center max-md:mb-10 max-md:w-full">
            {/* <div className="mt-4 text-xl font-medium text-gray-500">
              {" "}
              OUR CLIENTS
            </div> */}
            <div className="mt-3 text-4xl font-medium text-black">
              What Our Students Say About Us?
            </div>
            {/* <div className="mt-3 font-light text-gray-500">
              When An Unkown Printer Took A Galley Of Type And Scrambled it To
              Make A Type Specimen <br /> Book it Has Survived Not Only Five
              Centuries
            </div> */}
          </div>
          <div className="w-full max-md:w-full">
            <div className="relative min-h-[340px] px-10 flex-grow items-center justify-center overflow-hidden max-md:mt-10 max-md:max-w-full">
              <div className="mt-8 flex justify-center">
                <Testimonials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
