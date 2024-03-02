import React from "react";

export default function SchoolSupremacy() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-indigo-800 pl-20 pr-6 pt-12 max-md:max-w-full max-md:px-5">
        <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-[44%] flex-col max-md:ml-0 max-md:w-full">
            <div className="z-10 my-auto space-y-4 self-stretch text-white max-md:mt-10 max-md:max-w-full">
              <span className="text-4xl font-medium">School Supremacy</span>
              <ul className="list-disc space-y-2 pl-5 text-gray-200">
                <li>Become Parents Go-to-School</li>
                <li>Make Academics the invincible in your schoo</li>
                <li>Be the technology Pioneer in your region</li>
                <li>Early access to ongoing tools in AR and VR domain</li>
                <li>
                  Your teachers becomes the best as do what you want them to do
                  rigorously. No more administrative stuffs.
                </li>
                <li>Have your AI friend to assist you in all crisis pieces.</li>
                <li>
                  Be it Academics, Marketing , Referrals or Parent Communication
                  (Leave no room for manual error)
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-5 flex w-[56%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative mt-12 flex min-h-[497px] grow flex-col items-center justify-center overflow-hidden px-16 py-12 shadow-sm max-md:mt-10 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="/school.png"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
