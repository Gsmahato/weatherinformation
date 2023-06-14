import React, { useEffect, useState } from "react";
import "./style.css";
import Weathercard from "./weathercard";
const Temperature = () => {
  const [searchValue, setSearchValue] = useState("Kathmandu");
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=YOUR_API_KEY`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermod } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset, sunrise } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermod,
        name,
        speed,
        country,
        sunrise,
        sunset,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className="section">
        <div className="w-container">
          <div className="search">
            <input
              type="search"
              placeholder="search..."
              id="search"
              className="searchTerm"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="searchButton"
              type="button"
              onClick={getWeatherInfo}
            >
              Search
            </button>
          </div>
          <div className="weather-container">
          <Weathercard tempInfo={tempInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Temperature;
