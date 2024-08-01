import React from 'react'
import card1 from "../../assets/icons/techicon-1.png"
import card2 from "../../assets/icons/techicon-2.png"
import bigmobile from "../../assets/icons/bigmobile.png"

function Technology() {
    return (
        <div className="mx-4 lg:mx-[8rem] mt-[2rem] lg:mt-[5rem]">
            <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
                Technology
            </h3>

            <div className='lg:flex justify-between items-center mt-8 mb-12'>

                <div className='bg-gradient-to-t from-[#f7f7f7] to-[transparent] rounded-[16px] px-8 py-10'>
                    <img className='h-[180px] mx-auto' src={card1} alt='' />
                    <h3 className='text-[#FF385C] font-bold mt-4'>Blockchain</h3>
                    <p className='text-[0.875rem] text-[#6a6a6a] lg:w-[180px] text-left mt-2'>Solana for fast and secure transactions.</p>
                </div>

                <div className='bg-gradient-to-t from-[#f7f7f7] to-[transparent] rounded-[16px] px-8 py-10'>
                    <img className='h-[180px] mx-auto' src={card2} alt='' />
                    <h3 className='text-[#FF385C] font-bold mt-4'>Blockchain</h3>
                    <p className='text-[0.875rem] text-[#6a6a6a] lg:w-[180px] text-left mt-2'>Ensure transparent and automatic revenue sharing.</p>
                </div>

                <div className='bg-gradient-to-t from-[#f7f7f7] to-[transparent] rounded-[16px] px-8 py-10'>
                    <img className='h-[180px] mx-auto' src={card1} alt='' />
                    <h3 className='text-[#FF385C] font-bold mt-4'>Blockchain</h3>
                    <p className='text-[0.875rem] text-[#6a6a6a] lg:w-[180px] text-left mt-2'>Represent partnership tiers and premium access.</p>
                </div>

            </div>

            <div className='bg-[#f7f7f7]  rounded-[16px] lg:px-10 lg:py-8 lg:mt-[5rem] grid lg:flex items-center relative'>
                <div className='order-2 mx-[2rem] lg:mx-0'>
                    <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-left mt-[1.8rem] lg:mt-0">
                        Key Difference
                    </h3>
                    <ul>
                        <li className='text-[1rem] leading-[2rem]'>No direct property ownership or management.</li>
                        <li className='text-[1rem] leading-[2rem]'>Focus on building and maintaining agency partnerships.</li>
                        <li className='text-[1rem] leading-[2rem] lg:w-[380px]'>Revenue tied to partner performance rather than specific properties.</li>
                        <li className='text-[1rem] leading-[2rem] lg:w-[380px]'>Potentially lower operational costs but higher dependence on partner quality.</li>
                    </ul>
                </div>

                <div className='lg:absolute lg:right-0'>
                    <img className='w-full max-w-[350px] mx-auto lg:max-w-[600px] lg:h-auto' src={bigmobile} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Technology
