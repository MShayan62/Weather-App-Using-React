import { Droplet, GlassWater, Sun, Wind } from 'lucide-react';
import WeatherBox from './WeatherBox';
import { useContext } from 'react';
import { WeatherContext } from '../context/weatherContext';

const WeatherBoxes = () => {
  const {weatherData} = useContext(WeatherContext);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
        <WeatherBox icon={<Droplet size={32} />} title="Humidity" value={`${weatherData.main.humidity}%`} />
        <WeatherBox icon={<GlassWater size={32} />} title="Pressure" value={`${weatherData.main.pressure} hPa`} />
        <WeatherBox icon={<Wind size={32} />} title="Wind Speed" value={`${weatherData.wind.speed} km/h`} />
        <WeatherBox icon={<Sun size={32} />} title="Feels Like" value={`${Math.round(weatherData.main.feels_like)} °C`}/>
    </div>
  )
}

export default WeatherBoxes