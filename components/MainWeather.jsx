import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { getWeatherIcon } from '../utils/weatherIcons';

const MainWeather = ({ weatherData }) => {
  if (!weatherData) return <div className="glass-card main-weather-section">Loading...</div>;

  const { name, sys, weather } = weatherData.current;
  const condition = weather[0].main;
  const description = weather[0].description;
  const iconCode = weather[0].icon;

  // background based on weather condition
  const getBgImage = () => {
    if (condition.toLowerCase().includes('cloud')) return 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80';
    if (condition.toLowerCase().includes('rain')) return 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=800&q=80';
    return 'https://images.unsplash.com/photo-1601297183305-6df1428568b1?auto=format&fit=crop&w=800&q=80'; // Sunny/Clear
  };

  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${getBgImage()})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: 'none' // Override default glass border for image background
  };

  return (
    <div className="glass-card main-weather-section" style={cardStyle}>
        <div className="flex-between">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MdLocationOn />
                <span>{name}, {sys.country}</span>
            </div>
        </div>

        <div>
            <div className="flex-between">
                <div>
                 <p className="text-muted mb-2">Weather Forecast</p>
                 <h2 className="font-large" style={{margin: '0'}}>{condition}</h2>
                 <p className="text-muted" style={{textTransform: 'capitalize'}}>{description}</p>
                </div>
                 <div style={{color: 'white'}}>
                    {getWeatherIcon(iconCode)}
                 </div>
            </div>
        </div>
    </div>
  );
};

export default MainWeather;