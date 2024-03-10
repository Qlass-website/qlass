import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <div className="flex flex-col">
      <div className="w-full pl-20 pr-6 pt-12 max-md:max-w-full max-md:px-5">
        <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-[44%] flex-col max-md:ml-0 max-md:w-full">
            <div className="z-10 my-auto space-y-4 self-stretch text-indigo-800 max-md:mt-10 max-md:max-w-full">
              <span className="text-4xl font-bold">
                AI Personal tutor/ Chatbot
              </span>
              <p className="text-2xl font-thin text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in libero maxime sunt, illo, sapiente iure error explicabo eligendi, quidem tempora obcaecati? Perferendis debitis minus voluptatibus iste repudiandae, ut fugiat!
              </p>
             <div>
                <Link to="/ai-homework"><Button className="items-center justify-center rounded-[34px] bg-indigo-800 py-4 text-white md:px-8">Know More</Button></Link>
             </div>
            </div>
          </div>
          <div className="ml-5 flex w-[56%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative flex min-h-[497px] grow flex-col items-center justify-center overflow-hidden px-16 py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">
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
