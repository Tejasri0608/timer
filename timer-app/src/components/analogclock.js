import Clock from "react-clock";
import { useEffect, useState } from "react";
import "react-clock/dist/Clock.css";

export default function AnalogClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="">
      <div className="time_container">
        <Clock value={value} />
      </div>
    </div>
  );
}
