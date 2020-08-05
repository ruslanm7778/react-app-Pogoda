import React from 'react';
import './App.css';
import Info from './components/Info.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'


const API_KEY = "ee734359dde170e9421c377f224d4d4f"


class App extends React.Component {
state = {
  temp:undefined,
  city:undefined,
  country:undefined,
  pressure:undefined,
  error:undefined
}

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    if(city) {
const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
const data = await api_url.json();


console.log(data);
this.setState({
  temp: data.main.temp,
  city: data.name,
  country: data.sys.country,
  pressure: data.main.pressure,
  error:" "
});
  }
else {this.setState({
  temp: undefined,
  city: undefined,
  country: undefined,
  pressure: undefined,
  error:"Введите название города"
});}

}
  render() {
  return (
    <div className="wrapper">
    <div className="main">
    <div className="container">
      <div className="row">
        <div className="col-sm-5 info"> <Info /></div>
        <div className="col-sm-7 form"><Form gettingWeather1={this.gettingWeather} />  
        <Weather temp={this.state.temp}
    city={this.state.city}
    contry={this.state.country}
    pressure={this.state.pressure}
    error={this.state.error}
    /></div>
      </div>
    </div>
   </div>
    
  
    </div>
  );}
}

export default App;
