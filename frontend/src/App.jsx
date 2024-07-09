import "./App.css";
import LeftSideOfPage from "./Components/LeftSideOfPage/LeftSideOfPage";
import RightSideOfPage from "./Components/RightSideOfPage/RightSideOfPage";
import MiddleOfPage from "./Components/MiddleOfPage/MiddleOfPage";
import { useEffect, useState } from "react";
import data from "./assets/StateOfTheWorldData";
import { MonthContext } from "./Contexts/MonthData";
import UVMap from "./assets/textures/earth_1k.jpg";
import { Hydro, Solar, Wind, BioFuel } from "./Contexts/SuperDummyData";
// import countryData2 from "../../shared/countries.json";

function App() {
  const [_2020co2, set2020co2] = useState(null);
  const [Data, setData] = useState(null);
  const [country] = useState("Global");
  const [countryCode, setCountryCode] = useState("global");
  const currentUpToDate = new Date();
  currentUpToDate.setMonth(currentUpToDate.getMonth() - 1);
  const [date, setDate] = useState(currentUpToDate);
  const [month, SetMonth] = useState(currentUpToDate.getMonth() + 1);
  const [year, setYear] = useState(currentUpToDate.getFullYear());
  const [countryIndexMap, setCountryIndexMap] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/months/${month}/${year}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0].countries);

        const map = data[0].countries.reduce((acc, curr, index) => {
          acc[curr.code] = index;
          return acc;
        }, {});
        setCountryIndexMap(map);
      });
  }, [month, year]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/co2`)
      .then((res) => res.json())
      .then((data) => {
        set2020co2(data);
      });
  }, [countryCode]);

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_SERVER_URL}/hydro`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       set2020hydro(data);
  //       console.log(data);
  //     });
  // }, [countryCode]);

  // const [hardData, setHardData] = useState({});

  // useEffect(() => {
  //   const processData = () => {
  //     try {
  //       const response = {};
  //       response.countries = countryData2.reduce((acc, curr) => {
  //         acc[curr.code] = curr["2020wind"];
  //         return acc;
  //       }, {});
  //       response.min = Math.min(...Object.values(response.countries));
  //       response.max = Math.max(...Object.values(response.countries));
  //       response.countries.global = 4500;

  //       return response;
  //     } catch (err) {
  //       console.log(err);
  //       return { error: err.message };
  //     }
  //   };

  //   const processedData = processData();
  //   setHardData(processedData);
  // }, []);

  // useEffect(() => {
  //   console.log(hardData);
  // }, [hardData]);

  const countryData = data[country];
  const newCountryData = Data ? Data[countryIndexMap[countryCode]] : null;
  const Co2Data = _2020co2 ? _2020co2?.countries[countryCode] : null;
  const HydroData = Hydro.countries[countryCode];
  const SolarData = Solar.countries[countryCode];
  const WindData = Wind.countries[countryCode];
  const BioFuelData = BioFuel.countries[countryCode];

  // TODO: Add a loading Spinner/Suspense to the page

  return (
    <MonthContext.Provider value={Data}>
      <div className="md:h-screen md:overflow-hidden w-screen flex max-md:flex-col font-trebuchet">
        <LeftSideOfPage
          newCountryData={newCountryData}
          countryData={countryData}
        />
        <MiddleOfPage
          UVMap={UVMap}
          currentUpToDate={currentUpToDate}
          setDate={setDate}
          date={date}
          setMonth={SetMonth}
          setCountryCode={setCountryCode}
          setYear={setYear}
          newCountryData={newCountryData}
        />
        <RightSideOfPage
          newCountryData={newCountryData}
          Co2Data={Co2Data}
          HydroData={HydroData}
          SolarData={SolarData}
          WindData={WindData}
          BioFuelData={BioFuelData}
        />
      </div>
    </MonthContext.Provider>
  );
}

export default App;
