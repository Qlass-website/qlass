import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function WhatWeOffer() {
  return (
   <div className="flex justify-center items-center">
        <div className="bg-white p-10 w-full">
            <div className="flex flex-col max-md:flex-col-reverse max-md:items-center">
            <div className="text-center max-md:mb-10 max-md:w-full">
                <div className="text-4xl text-white font-medium">
                    <Badge variant="primary">What We Offer</Badge>
                </div>
                <div className="mt-4 text-4xl text-black font-medium"> {/* Adjusted margin here */}
                    Learn New Skills When And <br/> Where You Like
                </div>
                <div className="text-gray-300 font-light mt-3">
                    When known printer took a galley of type scrambl edmake
                </div>
            </div>
                <div className="w-full max-md:w-full">
                <div className="overflow-hidden relative flex-grow justify-center items-center min-h-[397px] max-md:mt-10 max-md:max-w-full">

                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
