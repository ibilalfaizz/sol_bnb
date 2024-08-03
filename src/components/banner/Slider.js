import React from "react";

const Slider = () => {
  const currentAmount = 5556708.2;
  const targetAmount = 6743190;
  const progressPercentage = (currentAmount / targetAmount) * 100;

  return (
    <div className="w-[100%]">
      {/* Top */}
      <div className="font-bold text-sm">{`$${currentAmount.toLocaleString()} / $${targetAmount.toLocaleString()}`}</div>

      {/* Bottom */}
      <div className="w-full h-[10px] bg-gray-300 rounded-2xl mt-2">
        <div
          className="h-full bg-[#FD395C] rounded-2xl"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;

