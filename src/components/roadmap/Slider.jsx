import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Slider() {
  const options = {
    loop: false,
    autoplay: false,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    nav: false,
    dots: false,
    margin: 40,

    responsive: {
      0: {
        items: 1,
        dots: false,
        center: true,
        // margin: 20,
      },
      500: {
        items: 1,
        margin: 0,
        dots: false,
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
        <div class="item w-[100%] relative h-auto">
          <div className="bg-[#ff385c] roadmap-rounded-border w-full rounded-b-[16px] mx-auto">
            <h3 className="bg-white z-[10000] text-[#ff385c] font-bold text-center w-full mb-[2rem] max-w-[30px] h-[30px] flex justify-center items-center rounded-[50px] mx-auto">
              Q1
            </h3>
            <p className="text-white text-[0.8rem] px-[1rem] w-[240px] flex justify-center mx-auto pb-[1rem]">
              Token launch and initial agency partnerships.
            </p>
          </div>
        </div>

        <div class="item w-[100%]">
          <div className="bg-[#ff385c] roadmap-rounded-border w-full rounded-b-[16px] mx-auto">
            <h3 className="bg-white text-[#ff385c] font-bold text-center relative w-full mb-[2rem] max-w-[30px] h-[30px] flex justify-center items-center rounded-[50px] mx-auto">
              Q2
            </h3>
            <p className="text-white text-[0.8rem] px-[1rem] w-[240px] flex justify-center mx-auto pb-[1rem]">
              Platform development and beta testing.
            </p>
          </div>
        </div>

        <div class="item w-[100%]">
          <div className="bg-[#ff385c] roadmap-rounded-border w-full rounded-b-[16px] mx-auto">
            <h3 className="bg-white text-[#ff385c] font-bold text-center relative w-full mb-[2rem] max-w-[30px] h-[30px] flex justify-center items-center rounded-[50px] mx-auto">
              Q3
            </h3>
            <p className="text-white text-[0.8rem] px-[1rem] w-[240px] flex justify-center mx-auto pb-[1rem]">
              Full platform launch and expansion of agency network.
            </p>
          </div>
        </div>

        <div class="item w-[100%]">
          <div className="bg-[#ff385c] roadmap-rounded-border w-full rounded-b-[16px] mx-auto">
            <h3 className="bg-white text-[#ff385c] font-bold text-center relative w-full mb-[2rem] max-w-[30px] h-[30px] flex justify-center items-center rounded-[50px] mx-auto">
              Q4
            </h3>
            <p className="text-white text-[0.8rem] px-[1rem] w-[240px] flex justify-center mx-auto pb-[1rem]">
              Introduction of NFT features and additional partner services.
            </p>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Slider;
