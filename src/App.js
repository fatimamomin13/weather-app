import Additional from "./Components/Additional";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import BgImg from "./assets/bg.jpg";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Mumbai");
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
    };
    fetchWeatherData();
  }, [city, weather, units]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelsius = currentUnit === "C";

    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      const currCity = e.currentTarget.value;
      setCity(currCity);
      e.currentTarget.value = "";
    }
  };

  return (
    <>
      <div
        className="h-screen	w-screen pt-8 lg:pt-16"
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="header mx-auto mb-10 flex items-center justify-evenly bg-black/80 w-11/12 lg:w-6/12 rounded lg:6/12 h-16 lg:p-4">
          <form className="inline-block lg:w-4/5">
            <input
              onKeyDown={enterKeyPressed}
              className="bg-transparent text-white p-2 rounded border border-white lg:w-4/5 "
              type="search"
              placeholder="Search..."
              name="search"
            />
          </form>
          <button
            onClick={(e) => handleUnitsClick(e)}
            className="bg-white p-2 rounded w-2/12"
          >
            °F
          </button>
        </div>
        <div className="main-display mx-auto my-10 lg:my-16 flex items-center justify-between px-4 lg:px-8 font-bold bg-black/80 text-white w-11/12 lg:w-6/12 rounded h-32">
          <div className="display-icon">
            <h1> {`${weather.name}, ${weather.country}`} </h1>
            <img src={weather.iconURL} alt="Weather Icon" />

            <h1>{weather.description}</h1>
          </div>
          <div className="display-temperature">
            <h3 className="text-4xl">{`${weather.temp?.toFixed()} °${
              units === "metric" ? "C" : "F"
            }`}</h3>
          </div>
        </div>
        <div className="mx-auto my-10 lg:my-16 lg:w-6/12 grid grid-cols-2 justify-items-center">
          <Additional weather={weather} units={units} />
        </div>
      </div>
    </>
  );
}

export default App;
