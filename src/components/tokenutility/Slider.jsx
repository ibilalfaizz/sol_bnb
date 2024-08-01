import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import card1 from "../../assets/icons/utitlity-1.png";
import card2 from "../../assets/icons/utility-2.png";
import card3 from "../../assets/icons/utility-3.png";
import card4 from "../../assets/icons/utility-4.png";

function Slider() {
  const options = {
    loop: false,
    autoplay: false,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    nav: false,
    dots: false,
    // margin:20,

    responsive: {
      0: {
        items: 1,
        dots: true,
        // center:true
        // margin: 20,
      },
      500: {
        items: 1,
        margin: 0,
        dots: true,
      },
      724: {
        items: 2,
      },
      1100: {
        items: 4,
      },
    },
  };
  return (
    <div className="mt-6 lg:mt-0">
      <OwlCarousel className="owl-theme mx-auto" {...options}>
        <div class="item w-[100%]">
          <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto ms-0 pt-10 pb-8">
            <div className="mb-6">
              <img
                className="h-[110px] w-full max-w-[140px] mx-auto"
                src={card1}
                alt=""
              />
            </div>
            <h3 className="text-[1rem] w-[10px] leading-[1.2rem]">
              Passive Income
            </h3>
            <p className="text-[0.875rem] text-[#6a6a6a] mt-2 lg:w-[165px]">
              Earn a share of partnership revenues based on token holdings.
            </p>
          </div>
        </div>

        <div class="item w-[100%]">
          <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto min-h-[100%] h-[323px] pt-10 pb-8">
            <div className="mb-6">
              <img
                className="h-[110px] w-full max-w-[140px] mx-auto"
                src={card2}
                alt=""
              />
            </div>
            <h3 className="text-[1rem] w-[10px] leading-[1.2rem]">
              Booking Discounts
            </h3>
            <p className="text-[0.875rem] text-[#6a6a6a] mt-2 lg:w-[165px]">
              Get reduced rates when booking stays through partner agencies.
            </p>
          </div>
        </div>

        <div class="item w-[100%]">
          <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto min-h-[100%] h-[323px] pt-10 pb-8">
            <div className="mb-6">
              <img
                className="h-[110px] w-full max-w-[140px] mx-auto"
                src={card3}
                alt=""
              />
            </div>
            <h3 className="text-[1rem] w-[100px] leading-[1.2rem]">
              Exclusive Travel Perks
            </h3>
            <p className="text-[0.875rem] text-[#6a6a6a] mt-2 lg:w-[180px]">
              Access exclusive travel perks and premium listings.
            </p>
          </div>
        </div>
        <div class="item w-[100%]">
          <div className="border lg:border rounded-[18px] lg:rounded-[20px] px-4 w-[250px] mx-auto min-h-[100%] h-[323px] pt-10 pb-8">
            <div className="mb-6">
              <img
                className="h-[110px] w-full max-w-[140px] mx-auto"
                src={card4}
                alt=""
              />
            </div>
            <h3 className="text-[1rem] w-[10px] leading-[1.2rem]">
              Staking Rewards
            </h3>
            <p className="text-[0.875rem] text-[#6a6a6a] mt-2 lg:w-[140px]">
              Stake tokens for additional rewards.
            </p>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Slider;
