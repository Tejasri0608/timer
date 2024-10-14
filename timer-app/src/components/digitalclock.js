import React from "react";
import Clock from "react-live-clock";

export default function DigitalClock() {
  return (
    <div className="time">
      <div className="time_container">
        <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Kolkata"} />
      </div>
    </div>
  );
}
