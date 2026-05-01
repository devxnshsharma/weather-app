import React from 'react';
import { format } from 'date-fns';
import { getWeatherIcon } from '../utils/weatherIcons';

const ForecastCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const dailyForecast = weatherData.forecast.list.filter((reading, index) => 
    index % 8 === 0
  ).slice(0, 5); 
  return (
    <div className="glass-card forecast-section">
        <div className="flex-between mb-2">
            <h3>The Next Days Forecast</h3>
             <div style={{background: 'rgba(0,0,0,0.2)', padding: '5px', borderRadius:'20px'}}>
                <button style={{background: 'rgba(255,255,255,0.2)', border:'none', color:'white', padding:'5px 15px', borderRadius:'15px'}}>5 days</button>
             </div>
        </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {dailyForecast.map((day, index) => (
          <div key={index} className="flex-between" style={{ padding: '5px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ transform: 'scale(0.6)' }}>
                {getWeatherIcon(day.weather[0].icon)}
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 500 }}>
                  {format(new Date(day.dt * 1000), 'EEEE, MMM d')}
                </p>
                <small className="text-muted" style={{ textTransform: 'capitalize' }}>
                  {day.weather[0].description}
                </small>
              </div>
            </div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>
              {Math.round(day.main.temp)}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;