import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiDayCloudy } from 'react-icons/wi';

export const getWeatherIcon = (iconCode) => {
  //  mapping based on OpenWeather icon codes
  switch (iconCode.substring(0, 2)) {
    case '01': return <WiDaySunny size={60} />;
    case '02': return <WiDayCloudy size={60} />;
    case '03': case '04': return <WiCloudy size={60} />;
    case '09': case '10': return <WiRain size={60} />;
    case '11': return <WiThunderstorm size={60} />;
    case '13': return <WiSnow size={60} />;
    default: return <WiDayCloudy size={60} />;
  }
};