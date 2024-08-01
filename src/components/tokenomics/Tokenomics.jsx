import React from 'react'
import { Link } from 'react-router-dom'

function Tokenomics() {
    return (
        <div className="bg-[#f7f7f7] lg:mt-[5rem] w-full">
            <div className='mx-4 lg:mx-[8rem] lg:pt-[4rem] mt-[2rem]'>
                <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
                    Core concept
                </h3>

                <div className='grid grid-cols-2 lg:flex flex-wrap mt-8 w-full justify-center lg:justify-start gap-4'>
                    <div className='bg-white border rounded-[18px] w-[100%] max-w-[200px] px-8 py-6'>
                        <div>
                            <svg class="w-full h-full" viewBox="0 0 100 100">

                                <circle
                                    class="text-[#f7f7f7] stroke-current"
                                    stroke-width="10"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                ></circle>

                                <circle
                                    class="text-[#FF385C]  progress-ring__circle stroke-current"
                                    stroke-width="10"
                                    stroke-linecap=""
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    stroke-dasharray="251.2"
                                    stroke-dashoffset="calc(251.2 - (251.2 * 30) / 100)"
                                ></circle>


                                <text className='font-bold' fill="#FF385C" x="50" y="50" color='red' text-anchor="middle" alignment-baseline="middle">30%</text>

                            </svg>

                            <h3 className='text-center text-[1rem] font-bold mt-2'>Presale</h3>
                        </div>

                    </div>

                    <div className='bg-white border rounded-[18px] w-[100%] max-w-[200px] px-8 py-6'>
                        <div>
                            <svg class="w-full h-full" viewBox="0 0 100 100">

                                <circle
                                    class="text-[#f7f7f7] stroke-current"
                                    stroke-width="10"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                ></circle>

                                <circle
                                    class="text-[#FF385C]  progress-ring__circle stroke-current"
                                    stroke-width="10"
                                    stroke-linecap=""
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    stroke-dasharray="251.2"
                                    stroke-dashoffset="calc(251.2 - (251.2 * 50) / 100)"
                                ></circle>


                                <text className='font-bold' fill="#FF385C" x="50" y="50" color='red' text-anchor="middle" alignment-baseline="middle">50%</text>

                            </svg>

                            <h3 className='text-center text-[1rem] font-bold mt-2'>Staking</h3>
                        </div>

                    </div>

                    <div className='bg-white border rounded-[18px] w-[100%] lg:max-w-[200px] px-8 py-6'>
                        <div>
                            <svg class="w-full -fhull" viewBox="0 0 100 100">

                                <circle
                                    class="text-[#f7f7f7] stroke-current"
                                    stroke-width="10"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                ></circle>

                                <circle
                                    class="text-[#FF385C]  progress-ring__circle stroke-current"
                                    stroke-width="10"
                                    stroke-linecap=""
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    stroke-dasharray="251.2"
                                    stroke-dashoffset="calc(251.2 - (251.2 * 40) / 100)"
                                ></circle>


                                <text className='font-bold' fill="#FF385C" x="50" y="50" color='red' text-anchor="middle" alignment-baseline="middle">40%</text>

                            </svg>

                            <h3 className='text-center text-[1rem] font-bold mt-2'>Community
                            Rewards</h3>
                        </div>

                    </div>

                    <div className='bg-white border rounded-[18px] w-[100%] max-w-[200px] px-8 py-6'>
                        <div>
                            <svg class="w-full h-full" viewBox="0 0 100 100">

                                <circle
                                    class="text-[#f7f7f7] stroke-current"
                                    stroke-width="10"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                ></circle>

                                <circle
                                    class="text-[#FF385C]  progress-ring__circle stroke-current"
                                    stroke-width="10"
                                    stroke-linecap=""
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    stroke-dasharray="251.2"
                                    stroke-dashoffset="calc(251.2 - (251.2 * 70) / 100)"
                                ></circle>


                                <text className='font-bold' fill="#FF385C" x="50" y="50" color='red' text-anchor="middle" alignment-baseline="middle">70%</text>

                            </svg>

                            <h3 className='text-center text-[1rem] font-bold mt-2'>DEX/CEX
                            Liquidity</h3>
                        </div>

                    </div>

                    <div className='bg-white border rounded-[18px] w-[100%] max-w-[200px] px-8 py-6'>
                        <div>
                            <svg class="w-full h-full" viewBox="0 0 100 100">

                                <circle
                                    class="text-[#f7f7f7] stroke-current"
                                    stroke-width="10"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                ></circle>

                                <circle
                                    class="text-[#FF385C]  progress-ring__circle stroke-current"
                                    stroke-width="10"
                                    stroke-linecap=""
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    stroke-dasharray="251.2"
                                    stroke-dashoffset="calc(251.2 - (251.2 * 75) / 100)"
                                ></circle>


                                <text className='font-bold' fill="#FF385C" x="50" y="50" color='red' text-anchor="middle" alignment-baseline="middle">75%</text>

                            </svg>

                            <h3 className='text-center text-[1rem] font-bold mt-2'>Marketing</h3>
                        </div>

                    </div>
                </div>

                <div className='w-full text-center mt-[2.8rem] pb-[4rem]'>
                    <Link className='text-[#FF385C] text-sm lg:text-[1.5rem] font-bold border-[1px] border-[#FF385C] rounded-[50px] py-3 px-10'>Token Supply : 69.000.000.000</Link>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
