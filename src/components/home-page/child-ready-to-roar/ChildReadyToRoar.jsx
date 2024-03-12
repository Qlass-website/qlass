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
          <div className="w-full max-md:w-full">
            <div className="relative md:min-h-[340px] flex-grow items-center justify-center overflow-hidden max-md:mt-10 max-md:max-w-full">
              <div className=" flex justify-center">
                <img
                  loading="lazy"
                  src="/image.png"
                  // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed28db2ff7152867743dc49785f85046d9d60e9523bb06a47d6876533c85924c?apiKey=ff29eb85e7464976a6d2464dcda446db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed28db2ff7152867743dc49785f85046d9d60e9523bb06a47d6876533c85924c?apiKey=ff29eb85e7464976a6d2464dcda446db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed28db2ff7152867743dc49785f85046d9d60e9523bb06a47d6876533c85924c?apiKey=ff29eb85e7464976a6d2464dcda446db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed28db2ff7152867743dc49785f85046d9d60e9523bb06a47d6876533c85924c?apiKey=ff29eb85e7464976a6d2464dcda446db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed28db2ff7152867743dc49785f85046d9d60e9523bb06a47d6876533c85924c?apiKey=ff29eb85e7464976a6d2464dcda446db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed28db2ff7152867743dc49785f85046d9d60e9523bb06a47d6876533c85924c?apiKey=ff29eb85e7464976a6d2464dcda446db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed28db2ff7152867743dc49785f85046d9d60e9523bb06a47d6876533c85924c?apiKey=ff29eb85e7464976a6d2464dcda446db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed28db2ff7152867743dc49785f85046d9d60e9523bb06a47d6876533c85924c?apiKey=ff29eb85e7464976a6d2464dcda446db&"
                  className="xl:ml-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
