import { Badge } from '@/components/ui/badge';
import React from 'react';

export default function LearningChoice() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-indigo-800 p-10 w-full">
        <div className="flex flex-col max-md:flex-col-reverse max-md:items-center">
        <div className="text-center max-md:mb-10 max-md:w-full">
          <div className="text-4xl text-white font-medium">
            <Badge variant="primary">How We Start Journey</Badge>
          </div>
          <div className="mt-4 text-4xl text-white font-medium"> {/* Adjusted margin here */}
            Start Your Learning Journey Today!
          </div>
          <div className="text-white font-light mt-3">
            Qlass's intuitive shared inbox helps team members organize and prioritize.
          </div>
        </div>
          <div className="w-full max-md:w-full">
            <div className="overflow-hidden relative flex-grow justify-center items-center shadow-sm min-h-[497px] max-md:mt-10 max-md:max-w-full">
              {/* <img
                loading="lazy"
                src="/HeroImage.png"
                className="object-cover w-full h-full"
                alt="Hero"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
