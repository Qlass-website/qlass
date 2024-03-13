import React from "react";

export default function ChildReadyToRoar() {
  return (
    <div className="lg:mt-5 flex items-center justify-center">
      <div className="w-full">
        <div className="flex flex-col max-md:flex-col max-md:items-center">
          <div className="text-center max-md:mb-0 max-md:w-full">
            <div className="mt-3 text-xl font-bold text-black md:text-4xl">
              The Qlass Advantage
            </div>
            {/* <div className="mt-3 text-md font-light text-black lg:text-3xl">
              At QLASS, we believe every child holds the potential for
              greatness. We're dedicated to <br /> building a strong foundation
              for their academic success, equipping them with the tools <br />{" "}
              and skills they need to thrive in primary and middle school.
            </div> */}
          </div>
          <div className="w-full max-md:w-full px-10 md:px-32">
            <div className="relative min-h-[240px] md:min-h-[440px] flex-grow items-center justify-center overflow-hidden max-md:mt-10 max-md:max-w-full">
              <div className=" flex justify-center">
                <img
                  loading="lazy"
                  src="/image.png"
                  className="absolute size-full xl:ml-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
