import React from "react";

export default function BrandCards() {
  return (
    <div className="flex items-center justify-center space-x-32">
      <div className="flex w-full transform flex-col items-center space-y-4 py-6 text-center transition-transform hover:scale-105 md:w-[200px]">
        <img
          src="/Brand/brandnew1.png"
          className="mx-auto h-auto w-full object-cover"
          alt="Brand 1"
        />
      </div>
      <div className="flex w-full transform flex-col items-center space-y-4 py-6 text-center transition-transform hover:scale-105 md:w-[200px]">
        <img
          src="/Brand/brandnew2.png"
          className="mx-auto h-auto w-full object-cover"
          alt="Brand 2"
        />
      </div>
      <div className="flex w-full transform flex-col items-center space-y-4 py-6 text-center transition-transform hover:scale-105 md:w-[150px]">
        <img
          src="/Brand/brandnew3.png"
          className="h-auto mx-auto w-full object-cover"
          alt="Brand 3"
        />
      </div>
      <div className="flex w-full transform flex-col items-center space-y-4 text-center transition-transform hover:scale-105 md:w-[120px]">
        <img
          src="/Brand/brandnew4.png"
          className="h-auto mx-auto w-full object-cover"
          alt="Brand 4"
        />
      </div>
    </div>
  );
}
