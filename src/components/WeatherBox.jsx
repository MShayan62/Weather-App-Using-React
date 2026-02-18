const WeatherBox = ({ icon, title, value }) => {
  return (
    <div className="backdrop-blur-sm rounded-2xl p-4 shadow-xl flex flex-col items-center space-y-2 border border-white/20 hover:scale-105 transition-transform">
      <div className="text-white">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default WeatherBox