import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementTime,
  toggleRunning,
  resetTimer,
  stopTimer,
} from "../redux/timerSlice";
import "./timer.css";

const Timer = () => {
  const { seconds, minutes, hours, isRunning } = useSelector(
    (state) => state.timer
  );
  const dispatch = useDispatch();
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRunning, dispatch]);

  const handlePauseResume = () => {
    dispatch(toggleRunning());
  };

  const handleRestart = () => {
    dispatch(resetTimer());
  };

  const handleStop = () => {
    dispatch(stopTimer());
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
        <button className="restart" onClick={handleRestart}>
          Restart
        </button>
        <button className="pause-resume" onClick={handlePauseResume}>
          {isRunning ? "Pause" : "Resume"}
        </button>
        <button className="stop" onClick={handleStop}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Timer;
