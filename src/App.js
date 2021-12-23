import React from "react";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";

import "./styles.css";

// console.log(weatherData);

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <WeatherForecast />
    </div>
  );
}
