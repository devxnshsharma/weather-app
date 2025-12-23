import React from 'react';
import { format } from 'date-fns';
import { WiStrongWind } from 'react-icons/wi';

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) return <div className="glass-card details-section">Loading...</div>;

  const { main, wind } = weatherData.current;
  const today = new Date();

  return (
    <div className="glass-card details-section" style={{ display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
      <div className="flex-between">
        <span>{format(today, 'EEEE, MMMM d')}</span>
        <span className="text-muted">{format(today, 'h:mm a')}</span>
      </div>

      <div className="flex-center" style={{ flexDirection: 'column', flexGrow: 1 }}>
        <h1 style={{ fontSize: '6rem', margin: 0, fontWeight: '300' }}>
          {Math.round(main.temp)}°
        </h1>
        <div className="flex-center text-muted" style={{ gap: '10px' }}>
            <WiStrongWind size={24}/>
            <span>Southwest, {(wind.speed * 3.6).toFixed(1)} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;