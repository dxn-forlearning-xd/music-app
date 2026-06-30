import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        {/* header */}
        <div className='flex gap-[17px]'>
            <div className='w-[34px] h-[34px] rounded-full ring-[2.5px] ring-[#09B3C8]'>
            <Image/>

        </div>
            <div>
                <p className='text-[15px] text-white'>Welcome back!</p>
                <p className='opacity-58 text-[12px] text-white leading-2'>user.name</p>
            </div>
          
        </div>
          <div>
                <h1 className='text-[20px]'>Continue Listening</h1>
            </div>
    </div>
  )
}

export default HomePage