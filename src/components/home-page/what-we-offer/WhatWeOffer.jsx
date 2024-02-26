import { Badge } from "@/components/ui/badge";
import React from "react";
import WhatWeOfferCards from "./WhatWeOfferCards/WhatWeOfferCards";

export default function WhatWeOffer() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-white p-10">
        <div className="flex flex-col max-md:flex-col-reverse max-md:items-center">
          <div className="text-center max-md:mb-10 max-md:w-full">
            <div className="text-4xl font-medium text-white">
              <Badge variant="primary">What We Offer</Badge>
            </div>
            <div className="mt-4 text-4xl font-medium text-black">
              {" "}
              {/* Adjusted margin here */}
              Learn New Skills When And <br /> Where You Like
            </div>
            <div className="mt-3 font-light text-gray-300">
              When known printer took a galley of type scrambl edmake
            </div>
          </div>
          <div className="w-full max-md:w-full">
            <div className="relative min-h-[330px] flex-grow items-center justify-center overflow-hidden max-md:mt-10 max-md:max-w-full">
              <div className="mt-16">
                <WhatWeOfferCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
