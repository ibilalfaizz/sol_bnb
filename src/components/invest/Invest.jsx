import React from "react";
import map from "../../assets/icons/map.png";
import line1 from "../../assets/icons/line-1.png";
import line2 from "../../assets/icons/line-2.png";
import investLeft from "../../assets/icons/invest-left.png";
import investRight from "../../assets/icons/invest-right.png";
import invetMobileIcon from "../../assets/icons/investMobileIcon.png";

function Invest() {
  return (
    <div className="mt-[5rem]">
      <h3 className="text-[1.875rem] font-bold text-center">
        Invest, earn, and travel with{" "}
        <span className="text-[#FF385C]">SolBnB.</span>
      </h3>

      <div className="block w-full lg:flex justify-center items-center lg:px-[5rem] lg:mt-[4rem]">
        <div>
          <img
            className="w-full max-w-[350px] h-[300px] hidden xl:block lg:block md:hidden"
            src={investLeft}
            alt=""
          />
          <img
            className="w-full max-w-[400px] block xl:hidden lg:hidden md:block mx-auto"
            src={invetMobileIcon}
            alt=""
          />
        </div>
        <div>
          <img className="w-[500px] mx-auto" src={map} alt="" />
        </div>
        <div>
          <img
            className="w-full max-w-[350px] h-[300px] hidden xl:block lg:block md:hidden"
            src={investRight}
            alt=""
          />
        </div>
      </div>

      <div className="xl:flex lg:flex md:flex justify-between mx-[1rem] lg:mx-[8rem] mt-[2rem] lg:mt-[3rem]">
        <div className="text-center lg:text-left">
          <h3 className="text-[1rem] font-bold">Partner Commissions</h3>
          <p className="w-full lg:max-w-[260px] text-[#6a6a6a] text-[0.9rem] mt-1 lg:mt-2">
            Earn from bookings made through partner agencies.
          </p>
        </div>
        <div className="text-center lg:text-left my-4 lg:my-0">
          <h3 className="text-[1rem] font-bold">Partner Commissions</h3>
          <p className="w-full lg:max-w-[260px] text-[#6a6a6a] text-[0.9rem] mt-1 lg:mt-2">
            Low-cost transaction fees on the SolBnB platform.
          </p>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-[1rem] font-bold">Partner Commissions</h3>
          <p className="w-full lg:max-w-[260px] text-[#6a6a6a] text-[0.9rem] mt-1 lg:mt-2">
            Additional services and features for higher-tier token holders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Invest;
