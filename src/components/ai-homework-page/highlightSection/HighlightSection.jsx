import React from "react";


const HighlightSection = ({ users, schools, states }) => {

  return (
    <div className="p-3 md:p-8 flex items-center justify-center">
      <div className="grid grid-cols-3 lg:grid-cols-3 items-center gap-x-2 md:gap-x-4 lg:gap-x-40">
        <div className="flex items-center space-x-2 md:space-x-5">
          <div className="border p-2 rounded-lg">
          <img src="/graduation.png"  className="w-10 h-10 md:w-16 md:h-16"/>
          </div>
          <div className="">
          <h1 className="text-md md:text-3xl font-bold">{users}+</h1>
          <p className="text-sm md:text-lg">Users</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-5">
          <div className="border p-2 rounded-lg">
          <img src="/video.png"  className="w-10 h-10 md:w-16 md:h-16"/>
          </div>
          <div className="">
          <h1 className="text-md md:text-3xl font-bold">{schools}+</h1>
          <p className="text-sm md:text-lg">Schools</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-5">
          <div className="border p-2 rounded-lg">
          <img src="/state.png"  className="w-10 h-10 md:w-16 md:h-16"/>
          </div>
          <div className="">
          <h1 className="text-md md:text-3xl font-bold">{states}+</h1>
          <p className=" text-sm md:text-lg">States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;