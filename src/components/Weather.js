import React from 'react';




const Weather = (props) => (
<div className="infoWeath">
  	{props.city &&
    <div className="WeatherResult">
     			<p>Город  {props.city} </p>
     			<p>Температура {props.temp}</p>
     			<p>Давление {props.pressure}</p>

     			 </div>}
     			<p className="error">{props.error}</p>
     			</div>
     			
  );


export default Weather;
