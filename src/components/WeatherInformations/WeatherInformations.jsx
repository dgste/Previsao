import './WeatherInformations.css';

function WeatherInformations({ weather }) {
    return (
        <div className='weather-container'>
            <h3>{weather.name}</h3>
            <div className='weather-info'>
                <img 
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Ícone do tempo"/>
                
                <p className='temperature'>{Math.round(weather.main.temp)}ºC</p>
            </div>
            <p className='descriptions'>{weather.weather[0].description}</p>
            
            <div className='details'>
                <p>Sensação Termica: {Math.round(weather.main.feels_like)}</p>
                <p>Umidade: {weather.main.humidity} %</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
        </div>
    );
}

export default WeatherInformations;
