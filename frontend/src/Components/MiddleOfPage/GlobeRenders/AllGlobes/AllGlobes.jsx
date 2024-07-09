/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import GlobeRender0 from "../GlobeRender0/GlobeRender0";
import GlobeRender1 from "../GlobeRender1/GlobeRender1";
import {
  Hydro,
  Solar,
  Wind,
  BioFuel,
} from "../../../../Contexts/SuperDummyData";
import { useState } from "react";

function AllGlobes(props) {
  const [isCO2Loading, setIsCO2Loading] = useState(true);

  return (
    <>
      <div className=" max-[515px]:scale-75 max-[380px]:scale-[0.65]">
        {props.globe === 0 && (
          <GlobeRender0
            UVMap={props.UVMap}
            setCountryCode={props.setCountryCode}
          />
        )}
        {props.globe === 1 && (
          <GlobeRender1
            loading={{
              isLoading: isCO2Loading,
              setIsLoading: setIsCO2Loading,
            }}
            globe={props.globe}
            setCountryCode={props.setCountryCode}
            data={Hydro?.countries}
            min={Hydro?.max}
            max={Hydro?.min}
          />
        )}
        {props.globe === 2 && (
          <GlobeRender1
            loading={{
              isLoading: isCO2Loading,
              setIsLoading: setIsCO2Loading,
            }}
            globe={props.globe}
            setCountryCode={props.setCountryCode}
            data={Solar?.countries}
            min={Solar?.max}
            max={Solar?.min}
          />
        )}
        {props.globe === 3 && (
          <GlobeRender1
            loading={{
              isLoading: isCO2Loading,
              setIsLoading: setIsCO2Loading,
            }}
            globe={props.globe}
            setCountryCode={props.setCountryCode}
            data={Wind?.countries}
            min={Wind?.max}
            max={Wind?.min}
          />
        )}
        {props.globe === 4 && (
          <GlobeRender1
            loading={{
              isLoading: isCO2Loading,
              setIsLoading: setIsCO2Loading,
            }}
            globe={props.globe}
            setCountryCode={props.setCountryCode}
            data={BioFuel?.countries}
            min={BioFuel?.max}
            max={BioFuel?.min}
          />
        )}
      </div>
    </>
  );
}
export default AllGlobes;
