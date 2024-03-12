import { Badge } from "@/components/ui/badge";
import React from "react";
import LearningCard from "./LearningCard/LearningCard";

export default function LearningChoice() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-indigo-800 p-10">
        <div className="flex flex-col max-md:flex-col max-md:items-center">
          <div className="text-center max-md:mb-0 max-md:w-full xl:mt-0">
            <div className="text-4xl font-medium text-white">
              <Badge variant="primary">Our Programs</Badge>
            </div>
            <div className=" text-4xl font-medium text-white">
              {" "}
              {/* Adjusted margin here */}
              Start Your Learning Journey Today!
            </div>
            <div className="mt-3 font-light text-white">
              Qlass's intuitive shared inbox helps team members organize and
              prioritize.
            </div>
          </div>
          <div className="w-full max-md:w-full">
            <div className="relative min-h-[337px] flex-grow items-center justify-center overflow-hidden shadow-sm max-md:mt-10 max-md:max-w-full">
              <div className="">
                <LearningCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
