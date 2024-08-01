import React from "react";
import icon from "../../assets/icons/conceptIcon.png";
import Slider from "../../components/coreconcept/Slider";

function CoreConcept() {
  return (
    <div className="lg:mx-[8rem] mt-[2rem] lg:mt-[5rem]">
      <div className="grid lg:flex justify-between items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-[#FF385C] text-[1.75rem] font-bold text-center lg:text-left mt-[1.8rem] lg:mt-0">
            Core concept
          </h3>
          <p className="text-[0.875rem] w-full lg:max-w-[440px] mt-4 text-center lg:text-left">
            SolBnB is a Solana-based token project that partners with
            established Airbnb rental agencies. Token holders gain exposure to a
            network of vacation rentals, earning passive income through
            revenue-sharing agreements with partner agencies.
          </p>
        </div>

        <div className="flex flex-1 justify-center order-1 lg:order-2 mt-[2rem] lg:mt-0">
          <img className="w-[200px] h-[200px]" src={icon} alt="" />
        </div>
      </div>

      <div>
        <h3 className="text-[#FF385C] text-center lg:text-left text-[1.75rem] font-bold mt-[2.8rem] lg:mt-[2.5rem] lg:mb-5">
          Key features
        </h3>
        
      </div>
      <Slider />
    </div>
  );
}

export default CoreConcept;
