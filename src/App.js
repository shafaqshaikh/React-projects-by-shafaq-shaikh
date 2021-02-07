
import React , {useState} from 'react'
import  logo from './logo.svg';
import './App.css';


function App() {

  const api = {
    key : "8fdce742dc3ddcfe14c7253ff45d0a2b",
    base :"https://api.openweathermap.org/data/2.5/"
  }
  const [city , setCity] = useState("")
  const [weather  , setWeather] = useState([])
  
  const search = (e)=>{
    if (e.key==="Enter"){
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result=>{
        setWeather(result)
        console.log(result)
      })
    }
  }
  
  return (
    <div className="App">
     <div className="search_box">
       <input className="search_bar" type="text" placeholder="Search city" onKeyPress={search} onChange={(e)=>setCity(e.target.value)} />  
     </div>
    {weather.length!==0 ? <div className="weather-box">
<div>{weather.name} , {weather.sys.country}</div>
<div>{new Date().toDateString()}</div>
<div>{Math.round(weather.main.temp)} degrees , {weather.weather[0].main}</div>
     </div> : <h1>No data found</h1>}
    </div>
  );
}

export default App;
