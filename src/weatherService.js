const API_KEY = "0b7c1401024c4d6ed2adbc1eb67bbfe7";

const makeIconURL = (iconID) =>
  `https://openweathermap.org/img/wn/${iconID}.png`;

const getFormattedWeatherData = async (city, units = "metrics") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    name,
    main: { temp, feels_like, temp_min, temp_max, pressure },
    sys: { country },
    wind: { speed },
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconURL(icon),
    speed,
    country,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    name,
  };
};

export { getFormattedWeatherData };
