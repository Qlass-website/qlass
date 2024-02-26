import { Badge } from "@/components/ui/badge";
import React from "react";
import LearningCard from "./LearningCard/LearningCard";

export default function LearningChoice() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-indigo-800 p-10">
        <div className="flex flex-col max-md:flex-col-reverse max-md:items-center">
          <div className="mt-10 text-center max-md:mb-10 max-md:w-full">
            <div className="text-4xl font-medium text-white">
              <Badge variant="primary">How We Start Journey</Badge>
            </div>
            <div className="mt-4 text-4xl font-medium text-white">
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
              <div className="mt-16">
                <LearningCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
