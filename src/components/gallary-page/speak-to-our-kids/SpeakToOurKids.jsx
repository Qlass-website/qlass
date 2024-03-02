import React from "react";
import KidsGallary from "./KidsGallary/KidsGallary";

export default function SpeakToOurKids() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-10">
        <div className="flex flex-col max-md:flex-col-reverse max-md:items-center">
          <div className="text-center max-md:mb-10 max-md:w-full">
            <div className="mt-4 text-4xl font-bold">
              {" "}
              {/* Adjusted margin here */}
              Speak to our kids
            </div>
          </div>
          <div className="w-full max-md:w-full">
            <div className="relative min-h-[340px] flex-grow items-center justify-center overflow-hidden max-md:mt-10 max-md:max-w-full">
              <div className="mt-12 flex justify-center">
                <KidsGallary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
