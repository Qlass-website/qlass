import React from "react";

export default function BannerQr() {
  return (
    <div className="flex flex-col bg-black px-10">
      <div className="w-full pl-20 pr-6 max-md:max-w-full max-md:px-5">
        <div className="max-md: flex gap-5 items-center justify-between max-md:flex-col max-md:gap-0">
          <div className="flex w-[54%] lg:ml-20 flex-col max-md:ml-0 max-md:w-full">
            <div className="z-10 my-auto space-y-4 self-stretch text-white max-md:mt-10 max-md:max-w-full">
              <span className="text-4xl font-bold">
                Scan QR to experience our 24X7 AI tutor on your Whatsapp
              </span>
              <div className="">
        <img loading="lazy" src="/qr.png" className="w-[150px] h-[150px items-center mb-5 md:mb-0 mt-5 rounded-md" alt="" />
        </div>
            </div>
          </div>
          <div className="flex w-[86%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative flex min-h-[307px] md:min-h-[500px] grow flex-col items-center justify-center overflow-hidden md:px-16 md:py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="/ai1.png"
                className="absolute rounded-md w-36 md:w-56"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
