import React from 'react'
import ImagesArea from './ImagesArea'

export default function ImageArea() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-10">
        <div className="flex flex-col max-md:flex-col max-md:items-center">
          <div className="text-center max-md:mb-10 max-md:w-full">
            <div className="mt-4 text-xl md:text-4xl font-bold">
              {" "}
              {/* Adjusted margin here */}
              A collection of unique experiences of parent and student journeys
            </div>
          </div>
          <div className="w-full max-md:w-full">
            <div className="relative min-h-[340px] flex-grow items-center justify-center overflow-hidden max-md:mt-10 max-md:max-w-full">
              <div className="md:mt-12 flex justify-center">
                <ImagesArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
