import React from 'react';
import { format, addHours } from 'date-fns';

const StatisticsChart = ({ weatherData }) => {
  // Simulate hourly data from the forecast (OpenWeather free tier doesn't give nice hourly history easily)
  const hourlySlice = weatherData ? weatherData.forecast.list.slice(0, 6) : [];
  const now = new Date();

  return (
    <div className="glass-card stats-section" style={{position: 'relative', overflow: 'hidden'}}>
      <h3 className="mb-2" style={{fontWeight: 400}}>Today's Statistics</h3>

      {/* Simulated Data Points placed visually above the wave */}
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px', position: 'relative', zIndex: 2}}>
        {hourlySlice.map((item, index) => (
            <div key={index} style={{textAlign: 'center'}}>
                <span style={{fontSize: '1.2rem', fontWeight: 500}}>{Math.round(item.main.temp)}°</span>
                <p className="text-muted" style={{fontSize: '0.8rem', margin: '5px 0'}}>
                    {format(addHours(now, index + 1), 'hh:00 a')}
                </p>
                 <p className="text-muted" style={{fontSize: '0.7rem', textTransform: 'capitalize'}}>
                    {item.weather[0].main}
                </p>
            </div>
        ))}
      </div>

      {/* Visual SVG Wave Simulation */}
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '60%',
          opacity: 0.6
      }}>
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            style={{stroke: 'none', fill: 'var(--accent-wave)'}}
        ></path>
         <path d="M0,100 C150,200 350,0 500,100"
            style={{stroke: 'var(--accent-wave)', strokeWidth: '3px', fill: 'none'}}
        ></path>
      </svg>
    </div>
  );
};

export default StatisticsChart;