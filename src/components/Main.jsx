import { usePlanet } from "../data/AppContext";
import PlanetDescription from "./PlanetDescription";
import PlanetImage from "./PlanetImage";
import PlanetGeneral from "./PlanetGeneral";
import { useState } from "react";

function Main({ isSelected }) {
  const { planets, isLoading } = usePlanet();
  const [step, setStep] = useState(1)

  return (
    <div className="main-container">
      {!isLoading && (
        <div className="content-container">
          <PlanetImage step={step} planet={planets[isSelected - 1]} />
          <PlanetGeneral step={step} setStep={setStep} planet={planets[isSelected - 1]} />
          <PlanetDescription planet={planets[isSelected - 1]} />
        </div>
      )}
    </div>
  );
}

export default Main;

{
  /* {!isLoading && <NavItem planets={planets}/>} */
}
