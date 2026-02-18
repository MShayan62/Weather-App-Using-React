import { useContext } from "react"
import { CloudRain, Wind, Sun } from "lucide-react"
import { WeatherContext } from "../context/weatherContext"

const TemperatureSection = () => {

  const { weatherData } = useContext(WeatherContext);

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return <Sun size={80} strokeWidth={1.5} />;
      case "Clouds":
        return <CloudRain size={80} strokeWidth={1.5} />;
      case "Rain":
      case "Drizzle":
        return <CloudRain size={80} strokeWidth={1.5} />;
      case "Snow":
        return <CloudRain className="rotate-45" size={80} strokeWidth={1.5} />;
      case "Thunderstorm":
        return <CloudRain className="animate-pulse" size={80} strokeWidth={1.5} />;
      case "Mist":
      case "Fog":
        return <Wind size={80} strokeWidth={1.5} />;
      default:
        return <CloudRain size={80} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-weather-gradient backdrop-blur-sm rounded-xl p-6 shadow-xl space-y-4 md:space-y-0">
        <div className="space-y-2 text-center md:text-left">
        <div className="flex items-start justify-center md:justify-start space-x-2">
            <h2 className="text-7xl md:text-8xl text-white font-bold">
            {Math.round(weatherData.main.temp)}
            </h2>
            <span className="text-3xl md:text-5xl text-white">°C</span>
        </div>
        <h3 className="text-white text-xl md:text-2xl font-medium">{`${weatherData.name} , ${weatherData.sys.country}`}</h3>
        <h4 className="text-white text-lg md:text-xl capitalize">
            {weatherData.weather[0].description}
        </h4>
        </div>
        <div className="text-white">
        {getWeatherIcon(weatherData.weather[0].main)}
        </div>
    </div>
  )
}

export default TemperatureSection