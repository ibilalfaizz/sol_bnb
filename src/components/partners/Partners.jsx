import React from 'react'
import partner1 from "../../assets/icons/partner1.png"
import partner2 from "../../assets/icons/partner2.png"
import partner3 from "../../assets/icons/partner3.png"
import partner4 from "../../assets/icons/partner4.png"
import partner5 from "../../assets/icons/partner5.png"
import partner6 from "../../assets/icons/partner6.png"
import partner7 from "../../assets/icons/partner7.png"
import partner8 from "../../assets/icons/partner8.png"
import partner9 from "../../assets/icons/partner9.png"
import partner10 from "../../assets/icons/partner10.png"
import partner11 from "../../assets/icons/partner11.png"
import partner12 from "../../assets/icons/partner12.png"
import partner13 from "../../assets/icons/partner13.png"
import partner14 from "../../assets/icons/partner14.png"
import partner15 from "../../assets/icons/partner15.png"


function Partners() {
    return (
        <div className="lg:mx-[8rem] mt-[2rem] lg:mt-[5rem]">
            <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
                Partners & Friends.
            </h3>

            <div className='mx-4 lg:mx-0 grid grid-cols-2 lg:flex flex-row flex-wrap justify-center text-center gap-6 relative mt-[1rem] lg:mt-4'>
                <div className='item'>
                    <img className='w-[180px]' src={partner1} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner2} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner3} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner4} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner5} alt='' />
                </div>

                <div className='item'>
                    <img className='w-[180px]' src={partner6} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner7} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner8} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner9} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner10} alt='' />
                </div>

                <div className='item'>
                    <img className='w-[180px]' src={partner11} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner12} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner13} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner14} alt='' />
                </div>
                <div className='item'>
                    <img className='w-[180px]' src={partner15} alt='' />
                </div>

            </div>

        </div>
    )
}

export default Partners
