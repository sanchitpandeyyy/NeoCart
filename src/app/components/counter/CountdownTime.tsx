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
    days: 5,
    hours: 19,
    minutes: 12,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-8">
      <div className="text-center">
        <div className="text-4xl font-bold text-red-600">{timeLeft.days}</div>
        <div className="text-xs uppercase text-gray-600">Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-red-600">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className="text-xs uppercase text-gray-600">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-red-600">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-xs uppercase text-gray-600">Min</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-red-600">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-xs uppercase text-gray-600">Sec</div>
      </div>
    </div>
  );
}
