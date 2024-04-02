import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <div className="flex flex-col bg-indigo-800 xl:-mb-[50px] px-10">
      <div className="w-full pl-20 pr-6 max-md:max-w-full max-md:px-5">
        <div className="max-md: flex gap-5 items-center justify-between max-md:flex-col max-md:gap-0">
          <div className="flex w-[54%] lg:ml-20 flex-col max-md:ml-0 max-md:w-full">
            <div className="z-10 my-auto space-y-4 self-stretch text-white max-md:mt-10 max-md:max-w-full">
              <span className="text-2xl md:text-4xl font-bold">
                AI Personal tutor/ Chatbot
              </span>
              <p className="text-xl md:text-2xl font-thin text-white">
              Embrace innovation, transform education, and lead the way in nurturing the next generation of learners.
              </p>
             <div>
                <Link to="/ai-homework"><Button className="items-center justify-center rounded-[34px] bg-white py-4 text-black md:px-8">Know More</Button></Link>
             </div>
            </div>
          </div>
          <div className="flex w-[86%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative flex min-h-[207px] md:min-h-[500px] grow flex-col items-center justify-center overflow-hidden md:px-16 md:py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="/iphoneCTA.png"
                className="absolute rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
