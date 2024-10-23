import Timer from "../components/timer";
import AnalogClock from "../components/analogclock";
import { useNavigate } from "react-router-dom";

export default function Analog() {
  const navigate = useNavigate();

  const navigateDigital = () => {
    navigate("/digital");
  };

  return (
    <>
      <div className="header">
        <h1>Timer with Analog Clock</h1>
      </div>
      <Timer />
      <AnalogClock />
      <button className="digital" onClick={navigateDigital}>
        Digital
      </button>
    </>
  );
}
