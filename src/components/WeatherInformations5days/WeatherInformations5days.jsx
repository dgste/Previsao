import './WeatherInformations5days.css';

function WeatherInformations5days({ weather5days }) {

  console.log(weather5days);

  let dailyForecast = {

  }

  /*vai passar por cada posicao do array e guarda no forecast  */

  for (let forecast of weather5days.list) {
    /*sempre que a data for diferente ele vai trazer */
    const date = new Date(forecast.dt * 1000).toLocaleDateString()

    /*se nao existir dailyForecast[date] pq realmente nao vai, ele diz que dailyForecast[date] é igual a forecast */
    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast
      /*dailyForecast.AlgumaCoisa daria no mesmo, só que vai ser uma maneira mais dinamica e ficara em forma de array para facilitar */
    }
  }
  /*pega apenas valores de um objeto */
  const next5days = Object.values(dailyForecast).slice(0, 6)

  console.log(next5days)

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

    return newDate
  }

  return (
    <div className='weather-container'>
      <h3>previsão proximos 5 dias</h3>
      <div className='weather-list'>
        {next5days.map(forecast => (
          <div key={forecast.dt} className='weather-items'>
            <p className='forecast-day'>{convertDate(forecast)}</p>
            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
            <p>{forecast.weather[0].description}</p>
            <p>{Math.round(forecast.main.temp_min)} min / {Math.round(forecast.main.temp_max)} max </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default WeatherInformations5days;
