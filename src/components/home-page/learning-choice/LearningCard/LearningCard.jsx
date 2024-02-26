import { Users, Youtube } from 'lucide-react'
import React from 'react'

function LearningCard() {
  return (
    <div className='flex items-center space-x-4'>
        <div className="w-full md:w-[350px] flex flex-col items-center text-center py-6 space-y-4">
            <Users className='text-white w-10 h-10'/>
            <h1 className='text-white font-bold'>Learn with Experts</h1>
            <p className='text-gray-200 font-light'>Curate anding area share pluralsight <br/> content to reach your</p>
        </div>
        <div className="w-full md:w-[350px] flex flex-col items-center text-center py-6 space-y-4">
            <Youtube className='text-white w-10 h-10'/>
            <h1 className='text-white font-bold'>Learn Anything</h1>
            <p className='text-gray-200 font-light'>Curate anding area share pluralsight <br/> content to reach your</p>
        </div>
        <div className="w-full md:w-[350px] flex flex-col items-center text-center py-6 space-y-4">
            <Users className='text-white w-10 h-10'/>
            <h1 className='text-white font-bold'>Get Online Certificate</h1>
            <p className='text-gray-200 font-light'>Curate anding area share pluralsight <br/> content to reach your</p>
        </div>
        <div className="w-full md:w-[350px] flex flex-col items-center text-center py-6 space-y-4">
            <Users className='text-white w-10 h-10'/>
            <h1 className='text-white font-bold'>E-mail Marketing</h1>
            <p className='text-gray-200 font-light'>Curate anding area share pluralsight <br/> content to reach your</p>
        </div>
    </div>
  )
}

export default LearningCard