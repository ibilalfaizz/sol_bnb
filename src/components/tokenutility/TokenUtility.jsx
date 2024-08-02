import React from 'react'
import Slider from './Slider'

function TokenUtility() {
    return (
        <div className='lg:px-[8rem] mt-[2rem] lg:mt-[5rem]'>
            <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left leading-8 mb-4">
                Token utility
            </h3>

            <div>
                <Slider />
            </div>
        </div>
    )
}

export default TokenUtility
