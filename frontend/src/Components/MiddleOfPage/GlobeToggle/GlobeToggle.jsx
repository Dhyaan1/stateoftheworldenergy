/* eslint-disable react/prop-types */
import "./GlobeToggle.css";
import Hydro from "../../../assets/svg/Hydro.svg";
import globe from "../../../assets/svg/globe.svg";
import Wind from "../../../assets/svg/Wind.svg";
import Solar from "../../../assets/svg/Solar.svg";
import BioFuel from "../../../assets/svg/BioFuel.svg";

function GlobeToggle(props) {
  const changeGlobe = (index) => {
    props.setGlobe(index);
  };
  const toggleButtons = [
    [globe, "EARTH"],
    [Hydro, "HYDRO"],
    [Solar, "SOLAR"],
    [Wind, "WIND"],
    [BioFuel, "BIOFUEL"],
  ].map((button, index) => {
    return (
      <div
        key={index}
        onClick={() => changeGlobe(index)}
        className={props.globe === index ? "active" : "inactive"}
      >
        <img src={button[0]} alt={button[1]} />
        {/* Warning: validateDOMNesting(...): <caption> cannot appear as a child of <div>. */}
        <caption>{button[1]}</caption>
      </div>
    );
  });

  return (
    <div className="globetoggle">
      <h1 className="font-extrabold">TOGGLE GLOBE</h1>
      <div className="togglebar">{toggleButtons}</div>
    </div>
  );
}

export default GlobeToggle;
