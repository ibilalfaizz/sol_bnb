import React, { useState } from "react";
import logo from "../../assets/icons/logo.png";
import menuIcon from "../../assets/icons/menu-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [hideNavbar, openNavbar] = useState(0);

  return (
    <div className="navbar w-[100%] border-b">
      <div className="px-[1rem] xl:px-[6rem] py-[1.4rem] block xl:flex lg:flex justify-between items-center max-w-[1500px] mx-auto">
        <div className="logo-icon  flex items-center justify-between">
          <div>
            <img className="h-[30px] xl:h-auto" src={logo} alt="" />
          </div>
          <div>
            <Link className="block xl:hidden md:hidden text-center items-center w-[115px] py-[0.4rem] lg:mt-0 border-[black] rounded-[50px] text-[14px] font-md bg-[#FF385C] border-0 text-[white]">
              Buy Soldbnb
            </Link>
          </div>
          <div className="block xl:hidden lg:hidden">
            <button
              className="border-0 flex items-center"
              onClick={() => openNavbar(!hideNavbar)}
            >
              <img className="h-[20px]" src={menuIcon} alt="" />
            </button>
          </div>
        </div>

        <div className="navs ">
          <ul
            className={`${
              hideNavbar ? "block" : "hidden"
            } h-[100vh] lg:h-auto text-center lg:text-start xl:flex lg:flex xl:justify-center gap-8`}
          >
            <li className="mt-[4rem] xl:mt-0">
              <Link>Home</Link>
            </li>
            <li className="mt-[2rem] xl:mt-0">
              <Link>About</Link>
            </li>
            <li className="mt-[2rem] xl:mt-0">
              <Link>Roadmap</Link>
            </li>
            <li className="mt-[2rem] xl:mt-0">
              <Link>Whitepaper</Link>
            </li>
            <li className="mt-[2rem] xl:mt-0">
              <Link>FAQs</Link>
            </li>
          </ul>
        </div>

        <div className="right-navs">
          <ul className="block xl:flex lg:flex items-center gap-4 justify-end">
            <li>
              <Link className="border hidden lg:flex text-center items-center w-full  xl:w-[168px] justify-center py-1 mt-3 lg:mt-0 border-[#6a6a6a] rounded-[50px] text-[15px] font-normal text-[#6a6a6a]">
                Connect Wallet
              </Link>
            </li>
            <li>
              <Link className="hidden lg:flex text-center items-center w-[168px] justify-center py-1 mt-3 lg:mt-0 border-[black] rounded-[50px] text-[15px] font-normal bg-[#FF385C] border border-transparent text-[white]">
                Buy Soldbnb
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
