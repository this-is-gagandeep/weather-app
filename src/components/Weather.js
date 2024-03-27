import React, { useState } from "react";

export default function Weather() {
  const [cityName, setCityName] = useState("jaipur");
  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSearch = () => {
    const apiKey = "e10e48cd5c1df35f6da8d75df73a8bb5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    if (cityName) {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setWeather(data))
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  };

  return (
    <div className="bg-image bg-cover h-screen flex justify-center items-center">
      <div className="w-3/5 h-4/5 shadow rounded-lg bg-slate-800 flex">
        <div className="w-1/2 bg-left   h-full bg-cover rounded-l-lg flex flex-col justify-between">
          <div className="flex justify-center m-4  ">
            <p className="font-bold text-2xl text-white">
              {weather.name &&
                `${weather.name}, ${weather.sys && weather.sys.country}`}
            </p>
          </div>
          <div className="flex justify-center">
            {weather.weather && weather.weather[0] && (
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
                className="rounded-full bg-[#ffffff85] w-2/5"
              />
            )}
          </div>
          <div className="m-4 text-white">
            <div className="font-bold text-2xl  text-center m-3">
              <p>{weather.coord && weather.coord.lon}</p>
              <p>{weather.coord && weather.coord.lat}</p>
            </div>
          </div>
          <div className="font-bold text-2xl  text-center m-3 text-white">
            <p> {weather.main && weather.main.temp}°C</p>
          </div>
        </div>
        <div className="w-1/2 h-full bg-right bg-cover rounded-r-lg">
          <div className="h-1/5 flex justify-center items-center border-b border-gray-200 m-4">
            {weather.weather && weather.weather[0] && (
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
                className="rounded-full bg-[#ffffff85] w-1/5"
              />
            )}
          </div>
          <div className="flex w-4/5 mx-auto">
            <input
              type="search"
              onChange={handleChange}
              value={cityName}
              placeholder="Search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-white font-bold cursor-pointer "
            />
            <button
              onClick={handleSearch}
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              SEARCH
            </button>
          </div>
          {weather.name && weather.weather && (
            <div className="text-center text-white font-semibold my-5">
              <p>
                {weather.name}, {weather.sys.country}
              </p>
              <p>{weather.weather[0].description}</p>
            </div>
          )}
          {weather.main && (
            <div className=" bottom-2 ">
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Temp</p>
                <p>{weather.main.temp}°C</p>
              </div>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Visibility</p>
                <p>{weather.visibility / 1000}Km</p>
              </div>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Wind Speed</p>
                <p>{weather.wind.speed}meter/sec</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
