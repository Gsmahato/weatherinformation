import React, { useState, useEffect } from "react";
import { FaCloud } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import {
  WiDust,
  WiSmoke,
  WiFog,
  WiRain,
  WiStrongWind,
  WiHumidity,
  WiCloudyGusts,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";

const Weathercard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermod,
    name,
    speed,
    country,
    sunrise,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermod) {
      switch (weathermod) {
        case "Clouds":
          setWeatherState(<FaCloud />);
          break;
        case "Rain":
          setWeatherState(<WiRain />);
          break;
        case "Haze":
          setWeatherState(<WiFog />);
          break;
        case "Clear":
          setWeatherState(<MdSunny />);
          break;
        case "Mist":
          setWeatherState(<WiDust />);
          break;
        case "Smoke":
          setWeatherState(<WiSmoke />);
          break;

        default:
          setWeatherState(<MdSunny />);
          break;
      }
    }
  }, [weathermod]);

  let secSunrise = sunrise;
  let dateSunrise = new Date(secSunrise * 1000);
  let sunriseTimeStr = dateSunrise.toLocaleTimeString([], {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  let secSunset = sunset;
  let dateSunset = new Date(secSunset * 1000);
  let sunsetTimeStr = dateSunset.toLocaleTimeString([], {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className="icon">{weatherState}</i>
        </div>
        <div className="weatherCondition">{weathermod}</div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg; Celsius</span>
          </div>
          <div className="description">
            <div className="date"> {new Date().toLocaleString()}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="tempmoreinfo">
          <div className="tempmoreinfo-one">
            <div className="sunrise-sunset">
              <div className="sunrise-leftside">
                <p className="sunrisesection">
                  <i className="wi-icon">
                    <WiSunrise />
                  </i>
                </p>
                <p className="extra-info">
                  {sunriseTimeStr}
                  <br />
                  sunrise
                </p>
              </div>
              <div className="sunset-rightside">
                <p className="sunrisesection">
                  <i className="wi-icon">
                    <WiSunset />
                  </i>
                </p>
                <p className="extra-info">
                  {sunsetTimeStr}
                  <br />
                  sunset
                </p>
              </div>
            </div>
          </div>
          <div className="other-info">
            <div className="extra-info">
              <div className="otherinfo-weather">
                <p className="sunsection">
                  <i className="wi-icon">
                    <WiHumidity />
                  </i>
                </p>
                <p className="extra-info">
                  {humidity}%
                  <br />
                  humidity
                </p>
                <p className="sunsection">
                  <i className="wi-icon">
                    <WiCloudyGusts />
                  </i>
                </p>
                <p className="extra-info">
                  {pressure} mbar <br />
                  pressure
                </p>
                <p className="sunsection">
                  <i className="wi-icon">
                    <WiStrongWind />
                  </i>
                </p>
                <p className="extra-info">
                  {speed} km/hr <br />
                  speed
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
