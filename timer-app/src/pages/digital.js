import Timer from "../components/timer";
import DigitalClock from "../components/digitalclock";
import { Route, Routes, useNavigate } from "react-router-dom";
import Analog from "./analog";

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

      <Routes>
        <Route path="/analog" element={<Analog />} />
      </Routes>
    </>
  );
}
