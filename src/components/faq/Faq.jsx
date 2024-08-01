import React from 'react'
import AccordianData from '../../components/faq/AccordianData'
import { Link } from "react-router-dom";

function Faq() {
    return (
        <div className="bg-[#f7f7f7]">
            <div className='lg:flex justify-between lg:mx-[8rem] mt-[2rem] lg:mt-[5rem] pt-[4rem]'>
                <div>
                    <h3 className="text-[1.5rem] lg:text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0 lg:w-[280px] leading-8">
                        Your questions,
                        answered
                    </h3>
                </div>
                <div className='w-full max-w-[600px]'>
                    <div className="">
                        <AccordianData title="Is my place right for Solbnb?">
                            <p>This is the content of the first accordion item.</p>
                        </AccordianData>
                        <AccordianData title="Is my place right for Solbnb?">
                            <p>This is the content of the second accordion item.</p>
                        </AccordianData>
                        <AccordianData title="Is my place right for Solbnb?">
                            <p>This is the content of the third accordion item.</p>
                        </AccordianData>
                        <AccordianData title="Is my place right for Solbnb?">
                            <p>This is the content of the third accordion item.</p>
                        </AccordianData>
                    </div>
                </div>


            </div>
            <div className='bg-[#f7f7f7] w-full lg:flex justify-center pt-[2rem] lg:pt-[5rem] lg:pb-[3rem]'>
                <div className='bg-white box-border faq w-full lg:max-w-[1100px] flex justify-center lg:justify-end items-center rounded-[16px] py-[8rem] lg:py-[4rem] lg:px-[2rem]'>
                    <div className='text-center lg:text-left'>
                        <h3 className='text-[1.5rem]'>
                            Still have questions?
                        </h3>
                        <p className='text-[0.875rem]'>Get answers from an experienced superhost near you.</p>
                        <div>
                            <Link className='border rounded-[4px] text-[0.8rem] flex justify-center items-center w-full lg:w-[150px] h-[40px] mt-6'>Contact Us</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
