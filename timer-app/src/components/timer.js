import { useEffect, useState, useRef } from "react";
import "./timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  });

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const togglePauseResume = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  return (
    <div className="timer">
      <div className="timer_container">
        <h1>Timer</h1>
        <h1>
          {hours < 10 ? "0" + hours : hours}:{" "}
          {minutes < 10 ? "0" + minutes : minutes} :{" "}
          {seconds < 10 ? "0" + seconds : seconds}
        </h1>
        <button className="restart" onClick={restart}>
          Restart
        </button>
        <button className="pause-resume" onClick={togglePauseResume}>
          {isRunning ? "Pause" : "Resume"}
        </button>
        <button className="stop" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Timer;
