import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/icons/logo.png"

import x from "../../assets/icons/x.png"
import telegram from "../../assets/icons/telegram.png"
import fb from "../../assets/icons/fb.png"
import insta from "../../assets/icons/insta.png"
import linkdin from "../../assets/icons/linkdin.png"
import discord from "../../assets/icons/discord.png"
import world from "../../assets/icons/world.png"

function Footer() {
    return (
        <div className='bg-[#f7f7f7] pt-[4rem] border-t border-b'>
            <div className='mx-4 lg:mx-[8rem]'>
                <img className='mx-auto lg:mx-0 lg:ml-[1rem]' src={logo} alt='' />
            </div>
            <div className='mx-auto px-4 grid grid-cols-2 lg:mx-[8rem] mt-[2rem] lg:mt-[2rem] lg:flex justify-between flex-wrap gap-8 lg:gap-0'>
                <ul>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Home</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>RoadMap</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Whitepaper</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Key Features</Link></li>
                </ul>
                <ul>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Key Difference</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Risks and Challenges</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Legal Consideration</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Key Differences</Link></li>
                </ul>
                <ul>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Risk and Challenges</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Lega Consideration</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Core concept</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Token Utility</Link></li>
                </ul>
                <ul>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Revenue Model</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Tokenomics</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Technology</Link></li>
                    <li className='leading-[1.6rem] text-[0.875rem]'><Link>Partnerships Strategy</Link></li>
                </ul>
            </div>

            <div className='grid justify-center lg:flex lg:justify-between border-t lg:px-[2rem] py-[2rem] lg:py-[1rem] mt-[2rem]'>
                <div className='text-center lg:text-left order-3 lg:order-1'>
                    <Link>Privacy</Link>
                </div>
                <div className='flex items-center justify-center gap-6 my-[3rem] lg:my-0 order-1 lg:order-2'>
                    <Link><img src={x} alt='' /></Link>
                    <Link><img src={telegram} alt='' /></Link>
                    <Link><img src={fb} alt='' /></Link>
                    <Link><img src={insta} alt='' /></Link>
                    <Link><img src={linkdin} alt='' /></Link>
                    <Link><img src={discord} alt='' /></Link>
                </div>
                <div className='flex justify-center order-2 mb-[3rem] lg:mb-0 lg:order-3'>
                    <Link className='flex gap-4 mx-auto'><img src={world} alt='' /> English (US)</Link>
                </div>
            </div>
        </div>

    )
}

export default Footer
