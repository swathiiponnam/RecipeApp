import { useState } from "react";
import { useEffect } from "react";

export default function MainWeather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "28709f73aa93afd4f0e26d807446d5a6";

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const fetchApi = async (e) => {
    if (e) e.preventDefault();
    let resp = await fetch(
      `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${search}`
    );
    let data = await resp.json();
    console.log(data);
    if (!data.error) {
      setWeather(data);
    } else {
      setWeather(null);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div>
        <form onSubmit={fetchApi}>
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
      </div>
      <div>
        {weather && (
          <div>
            <h1>weather data</h1>
            <img src={weather.current.weather_icons} />
            <p>
              Temperature :{weather.current.temperature} <sup>o</sup>C
            </p>
            <p>Time: {weather.current.observation_time}</p>
            <p>City :{weather.location.name}</p>
            <p>Country : {weather.location.country}</p>
          </div>
        )}
      </div>
    </>
  );
}
