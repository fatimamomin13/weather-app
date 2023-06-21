import React from "react";
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress } from "react-icons/md";

const Additional = (props) => {
  const tempUnit = props.units === "metric" ? "°C" : "°F";
  const windUnit = props.units === "metric" ? "m/s" : "m/h";

  const card = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: " MIN",
      data: props.weather.temp_min?.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: " MAX",
      data: props.weather.temp_max?.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: " Feels Like",
      data: props.weather.feels_like,
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: " Pressure",
      data: props.weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <FaWind />,
      title: " Wind Speed",
      data: props.weather.speed?.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <>
      {card.map(({ id, icon, title, data, unit }) => (
        <div
          key={id}
          className="card bg-black/80 text-white w-9/12 lg:w-8/12 m-2 p-2 lg:py-4 rounded text-center"
        >
          <div className="inline-block pr-2">{icon}</div>
          <h3 className="inline-block">{title}</h3>
          <div>
            <h1 className="">{`${data} ${unit}`}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Additional;
