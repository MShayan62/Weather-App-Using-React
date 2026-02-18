import { Search } from 'lucide-react'
import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../context/weatherContext';
import popularCities from './popularCities.json';
import axios from 'axios';


const Header = () => {

  const { setWeatherData } = useContext(WeatherContext);
  const [suggestions, setSuggestions] = useState([]);
  const [city, setCity] = useState('');

  const getWeatherData = async (cityName = city) => {
    const selectedCity = popularCities.find(
      (c) => c.toLowerCase() === cityName.toLowerCase()
    );
    if (!selectedCity) {
      alert('Please select a valid city from suggestions.');
      return;
    }

    try {
      const response = await axios.get("/api/weather", {
      params: { city: selectedCity }
    });
      setWeatherData(response.data);
      setCity('');
      setSuggestions([]);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    getWeatherData("Lahore");
  }, [])

  const handleSearchChange = (e) => {
  const value = e.target.value;
  setCity(value);

  if (value.length > 0) {
    const matches = popularCities.filter((c) =>
      c.toLowerCase().startsWith(value.toLowerCase())
    ).slice(0, 8);
    setSuggestions(matches);
  } else {
    setSuggestions([]);
  }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    getWeatherData(suggestion);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
      <h1 className="font-bold text-4xl text-white tracking-wide">WeatherNow</h1>
      <div className="w-full md:w-auto relative">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Enter a city"
            value={city}
            onChange={handleSearchChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                getWeatherData();
              }
            }}
            className="px-4 py-2 w-full bg-white/20 placeholder-white text-white border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button className="p-3" onClick={() => getWeatherData()}>
            <Search size={28} className="text-white" />
          </button>
        </div>

        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white text-black mt-2 rounded-xl overflow-hidden shadow-md max-h-48 overflow-y-auto">
            {suggestions.map((s, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(s)}
                className="px-4 py-2 hover:bg-purple-100 cursor-pointer"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Header