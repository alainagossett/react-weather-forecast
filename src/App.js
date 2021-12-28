import React from "react";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";

import "./styles.css";

// console.log(weatherData);

const weather = weatherData.map((info, index) => {
  return (
    <div className="weather">
      <img src={info.img} alt="" />
      <p>
        <span>conditions:</span> {info.conditions}
      </p>
      <p>
        <span>time:</span> {info.time}
      </p>
    </div>
  );
});

export default function App() {
  return (
    <div className="App">
      <WeatherForecast />
      <section className="weather">{weather}</section>
      {/* <section className="weather">
        <h1>My WeatherIcons App</h1>
      </section> */}
    </div>
  );
}
