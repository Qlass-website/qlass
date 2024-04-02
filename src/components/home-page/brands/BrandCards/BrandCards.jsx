import React from "react";

export default function BrandCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-1 lg:gap-8 sm:grid-cols-2 ml-6 md:ml-32 lg:grid-cols-4">
      <div className="flex transform flex-col items-center space-y-4 py-6 text-center transition-transform hover:scale-105 w-[60px] md:w-[200px]">
        <img
          src="/Brand/brandnew1.png"
          className="mx-auto object-cover"
          alt="Brand 1"
        />
      </div>
      <div className="flex transform flex-col items-center space-y-4 py-6 text-center transition-transform hover:scale-105  w-[60px] md:w-[200px]">
        <img
          src="/Brand/brandnew2.png"
          className="mx-auto object-cover"
          alt="Brand 2"
        />
      </div>
      <div className="flex transform flex-col items-center space-y-4 py-6 text-center transition-transform hover:scale-105  w-[60px] md:w-[150px]">
        <img
          src="/Brand/brandnew3.png"
          className="mx-auto object-cover"
          alt="Brand 3"
        />
      </div>
      <div className="flex transform flex-col items-center space-y-4 py-6 text-center transition-transform hover:scale-105   w-[60px] md:w-[120px]">
        <img
          src="/Brand/brandnew4.png"
          className="mx-auto object-cover"
          alt="Brand 4"
        />
      </div>
    </div>
  );
}
