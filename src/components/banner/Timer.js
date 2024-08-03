import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto flex justify-center gap-2 border-[2px] border-[#FD395C] border-dotted rounded-full text-sm py-1 px-2 font-extrabold text-[#FD395C]">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div>Days</div>
          <div>{days == 0 ? "00" : days}</div>
        </div>
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div>Hours</div>
          <div>{hours == 0 ? "00" : hours}</div>
        </div>
        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div>Minutes</div>
          <div>{minutes == 0 ? "00" : minutes}</div>
        </div>
        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div>Seconds</div>
          <div>{seconds == 0 ? "00" : seconds}</div>
        </div>
      </div>
    </div>
  );
}

const Timer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60000);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
};

export default Timer;
