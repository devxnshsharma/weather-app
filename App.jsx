import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/glass.css';
import './styles/App.css';

import Sidebar from './components/Sidebar';
import MainWeather from './components/MainWeather';
import WeatherDetails from './components/WeatherDetails';
import StatisticsChart from './components/StatisticsChart';
import ForecastCard from './components/ForecastCard';
import Search from './components/Search';

// Mock data generator
const generateMockData = (city) => ({
  current: {
    name: city || "Tokyo",
    sys: { country: "JP" },
    main: { temp: 22 + Math.floor(Math.random() * 5), humidity: 45, pressure: 1012 },
    wind: { speed: 5.2 },
    weather: [{ main: "Clear", description: "clear sky", icon: "01d" }]
  },
  forecast: {
    list: Array(40).fill(0).map((_, i) => {
      const date = new Date(Date.now() + i * 10800000);
      return {
        dt: Math.floor(date.getTime() / 1000),
        dt_txt: date.toISOString().replace('T', ' ').substring(0, 19),
        main: { temp: 20 + Math.sin(i) * 5, humidity: 40 + i, pressure: 1010 },
        weather: [{ main: "Clouds", description: "scattered clouds", icon: "03d" }]
      };
    })
  }
});

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(localStorage.getItem('lastCity') || 'Tokyo'); 

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const baseUrl = import.meta.env.VITE_BASE_URL;

      if (!apiKey || apiKey === 'placeholder_key') {
        console.warn("Using mock data because API key is missing or placeholder.");
        setTimeout(() => {
          setWeatherData(generateMockData(city));
          setLoading(false);
          localStorage.setItem('lastCity', city);
        }, 800);
        return;
      }

      try {
        const currentReq = axios.get(`${baseUrl}/weather?q=${city}&units=metric&appid=${apiKey}`);
        const forecastReq = axios.get(`${baseUrl}/forecast?q=${city}&units=metric&appid=${apiKey}`);

        const [currentRes, forecastRes] = await Promise.all([currentReq, forecastReq]);

        setWeatherData({
          current: currentRes.data,
          forecast: forecastRes.data
        });
        localStorage.setItem('lastCity', city);

      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <div className="app-content">
        <Search onSearch={(q) => setCity(q)} />

        {loading && <div className="glass-card" style={{gridArea: '2 / 1 / 4 / 3', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading Weather Data...</div>}
        {error && <div className="glass-card" style={{gridArea: '2 / 1 / 4 / 3', color: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Error: {error}</div>}
        
        {!loading && !error && weatherData && (
          <>
            <MainWeather weatherData={weatherData} />
            <WeatherDetails weatherData={weatherData} />
            <StatisticsChart weatherData={weatherData} />
            <ForecastCard weatherData={weatherData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;