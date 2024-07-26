import './App.css'
import axios from 'axios'
import {useState, useRef} from 'react'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'



function App() {

  const [weather, setWeather] = useState()

  const inputRef = useRef()

  async function SearchCity (){
    console.log(inputRef.current.value)

    const city = inputRef.current.value
    const key = '8a8b91958b292737be2a3b223d9496d2'
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  
    const apiInfo = await axios.get(url)
    
    setWeather(apiInfo.data)
    
    console.log(weather)

  }

  return (
    <div className='container'>
      <h1>DevClub Previsão Do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite O Nome Da Cidade'/>
      <button onClick={SearchCity}>Buscar</button>
      {weather && <WeatherInformations weather={weather}/>}
    </div>
  )
}

export default App
