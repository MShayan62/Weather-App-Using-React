
import { useState } from 'react';
import Header from './components/Header';
import WeatherBoxes from './components/WeatherBoxes';
import TemperatureSection from './components/TemperatureSection';
import { WeatherContext } from './context/weatherContext';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const actions = {
      weatherData, setWeatherData
  }

  return (
    <WeatherContext.Provider value={actions} >  
    <div className="relative flex justify-center items-center px-4 min-h-screen bg-weather-gradient">
      <div className="max-w-5xl w-full shadow-2xl p-8 bg-weather-gradient backdrop-blur-sm rounded-2xl space-y-6 border border-white/20">
        <Header/>
        {weatherData && (
          <>
            <TemperatureSection/>
            <WeatherBoxes/>
          </>
        )}
      </div>
    </div>
    </WeatherContext.Provider>
  );
};



export default App;