import React from 'react'
import { ChevronRight  } from 'lucide-react';

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-6'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold text-gray-500'>{props.id +1}</h2>
        <div >
            <p className='text-l leading-normal text-white mb-10'>{props.intro}</p>
           <div className="flex justify-between ">
  <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full ">
    {props.tag}
  </button>

  <button className="bg-blue-600 text-white font-medium px-2 py-2 rounded-full">
    <ChevronRight />
  </button>
</div>
        </div>
      </div>
  )
}

export default RightCardContent
