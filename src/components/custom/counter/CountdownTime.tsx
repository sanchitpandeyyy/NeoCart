"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 3,
    hours: 12,
    minutes: 12,
    seconds: 0,
  });

  useEffect(() => {
    const savedTime = localStorage.getItem("countdownTime");
    if (savedTime) {
      setTimeLeft(JSON.parse(savedTime));
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let newTime = { ...prevTime };
        if (prevTime.seconds > 0) {
          newTime.seconds -= 1;
        } else if (prevTime.minutes > 0) {
          newTime.minutes -= 1;
          newTime.seconds = 59;
        } else if (prevTime.hours > 0) {
          newTime.hours -= 1;
          newTime.minutes = 59;
          newTime.seconds = 59;
        } else if (prevTime.days > 0) {
          newTime.days -= 1;
          newTime.hours = 23;
          newTime.minutes = 59;
          newTime.seconds = 59;
        }

        // Save updated time in localStorage
        localStorage.setItem("countdownTime", JSON.stringify(newTime));
        return newTime;
      });
    }, 1000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <div className="text-center">
        <div className="text-4xl font-bold text-red-600 sm:text-5xl">
          {timeLeft.days}
        </div>
        <div className="text-xs uppercase text-gray-600 sm:text-sm">Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-red-600 sm:text-5xl">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className="text-xs uppercase text-gray-600 sm:text-sm">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-red-600 sm:text-5xl">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-xs uppercase text-gray-600 sm:text-sm">Min</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-red-600 sm:text-5xl">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-xs uppercase text-gray-600 sm:text-sm">Sec</div>
      </div>
    </div>
  );
}
