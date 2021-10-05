import React from 'react';

export default function Weather(props) {
    
    return (
             
<div className="weather__info ">
{props.city&&props.country&&<p className="weather__key">Location:
   <span className="weather__value"> {props.city}, {props.country} </span>
    </p>}

{props.temperature&&<p className="weather__key">
    Temperature:  <span className="weather__value">
    {props.temperature}</span></p>}

{props.humidity&&<p className="weather__key">
    Humidity: <span className="weather__value">{props.humidity}</span></p>}
{props.conditions&&<p className="weather__key">Condition:{props.conditions}</p>}

{props.description&&<p className="weather__key">Description: {}
<span className="weather__value">{props.description}</span></p>}

{props.wind&&<p className="weather__key">Wind: {}
<span className="weather__value">{props.wind}   {} </span>
Degrees: {}
<span className="weather__value">{props.deg}</span></p>}
 
{props.error&&<p className="weather__error">{props.error}</p>}
</div>   
    )
}
/*
.weather__key:last-child {
  border: 2px;
}
ovo kad dodas zadnji u redu ti nema ppodlogu 
*/


