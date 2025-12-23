import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/glass.css';
import './styles/App.css';

import Sidebar from './components/Sidebar';
import MainWeather from './components/MainWeather';
import WeatherDetails from './components/WeatherDetails';
import StatisticsChart from './components/StatisticsChart';
import ForecastCard from './components/ForecastCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Tokyo'); 

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {å
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const baseUrl = process.env.REACT_APP_BASE_URL;

        if (!apiKey) throw new Error("API Key missing. Check .env file.");

        // Current weather AND 5-day forecast
        const currentReq = axios.get(`${baseUrl}/weather?q=${city}&units=metric&appid=${apiKey}`);
        const forecastReq = axios.get(`${baseUrl}/forecast?q=${city}&units=metric&appid=${apiKey}`);

        const [currentRes, forecastRes] = await Promise.all([currentReq, forecastReq]);

        setWeatherData({
          current: currentRes.data,
          forecast: forecastRes.data
        });

      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]); // changing city

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <div className="app-content">
        {loading && <div className="glass-card">Loading Weather Data...</div>}
        {error && <div className="glass-card" style={{color: 'red'}}>Error: {error}</div>}
        
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