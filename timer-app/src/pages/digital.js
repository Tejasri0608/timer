import Timer from "../components/timer";
import DigitalClock from "../components/digitalclock";
import { useNavigate } from "react-router-dom";

export default function Digital() {
  const navigate = useNavigate();

  const navigateAnalog = () => {
    navigate("/analog");
  };

  return (
    <>
      <div className="header">
        <h1>Timer with Digital Clock</h1>
      </div>
      <Timer />
      <DigitalClock />
      <button className="analog" onClick={navigateAnalog}>
        Analog
      </button>
    </>
  );
}
