import React from 'react'
import icon1 from "../../assets/icons/risk1.png"
import icon2 from "../../assets/icons/risk2.png"
import icon3 from "../../assets/icons/risk3.png"
import icon4 from "../../assets/icons/risk4.png"
import icon5 from "../../assets/icons/risk5.png"

function Risk() {
    return (
        <div className="lg:mx-[8rem] mt-[2rem] lg:mt-[4rem]">
            <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
                Risks and Challenges.
            </h3>

            <div className='grid gap-4 mx-4 lg:mx-0 lg:flex justify-between mt-6'>

                <div className='bg-white rounded-corners-gradient-borders w-full rounded-[50px] flex gap-5 items-center py-[0.75rem] lg:py-[1.4rem] px-[0.5rem] lg:px-[1.2rem]'>
                    <div>
                        <img className='w-[30px] lg:h-[50px]' src={icon1} alt='' />
                    </div>
                    <div>
                        <h3 className='text-[1rem] font-bold'>Regulatory Uncertainty</h3>
                        <p className='text-[0.7rem] text-[#6a6a6a] mt-2 w-full max-w-[250px] lg:w-[300px]'>Navigate the evolving regulatory landscape in the crypto space.</p>
                    </div>

                </div>


                <div className='bg-white rounded-corners-gradient-borders w-full rounded-[50px] flex gap-5 items-center py-[0.75rem] lg:py-[1.4rem] px-[0.5rem] lg:px-[1.2rem]'>
                    <div>
                        <img className='w-[30px] lg:h-[50px]' src={icon2} alt='' />
                    </div>
                    <div>
                        <h3 className='text-[1rem] font-bold'>Partner Dependence</h3>
                        <p className='text-[0.7rem] text-[#6a6a6a] mt-2 w-[200px]'>Performance reliant on partner agencies.</p>
                    </div>

                </div>


            </div>

            <div className='grid gap-4 mx-4 lg:mx-0 lg:flex justify-between mt-4'>

                <div className='bg-white rounded-corners-gradient-borders w-full rounded-[50px] flex gap-5 items-center py-[0.75rem] lg:py-[1.4rem] px-[0.5rem] lg:px-[1.2rem]'>
                    <div>
                        <img className='w-[30px] lg:h-[50px]' src={icon3} alt='' />
                    </div>
                    <div>
                        <h3 className='text-[1rem] font-bold'>Market Volatility</h3>
                        <p className='text-[0.7rem] text-[#6a6a6a] mt-2  lg:w-[300px]'>Mitigate the effects of market fluctuations in both crypto and travel industries.</p>
                    </div>

                </div>


                <div className='bg-white rounded-corners-gradient-borders w-full rounded-[50px] flex gap-5 items-center py-[0.75rem] lg:py-[1.4rem] px-[0.5rem] lg:px-[1.2rem]'>
                    <div>
                        <img className='w-[30px] lg:h-[50px]' src={icon4} alt='' />
                    </div>
                    <div>
                        <h3 className='text-[1rem] font-bold'>Smart Contract Vulnerabilities</h3>
                        <p className='text-[0.7rem] text-[#6a6a6a] mt-2 w-[200px] lg:w-[200px]'>Ensure security against potential vulnerabilities.</p>
                    </div>

                </div>


            </div>

            <div className='mx-4 lg:mx-0 mt-4'>

                <div className='bg-white rounded-corners-gradient-borders w-full rounded-[50px] flex gap-5 items-center py-[0.75rem] lg:py-[1.4rem] px-[0.5rem] lg:px-[1.2rem]'>
                    <div>
                        <img className='w-[30px] lg:h-[50px]' src={icon5} alt='' />
                    </div>
                    <div>
                        <h3 className='text-[1rem] font-bold'>Quality Control</h3>
                        <p className='text-[0.7rem] text-[#6a6a6a] mt-2 w-[220px] lg:max-w-[200px] lg:w-[300px]'>Maintain high-quality standards across partnerships.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Risk
