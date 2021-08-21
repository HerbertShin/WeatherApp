import React from 'react';
import './DisplayWeather.css';
import '../index.css';

export default function DisplayWeather(props){
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${month} ${date}, ${year}`
      }

    var currentDate = new Date();
    var date = currentDate.getFullYear;
    return(
        <div className="container">
          <div className="location-box">
            <div className="location">{props.obj.name}, {props.obj.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(props.obj.main.temp)}°c
      </div>
            <div className="weather">
              {props.obj.weather[0].description}
      </div>
      <div className="feelslike">
        Feels Like {Math.round(props.obj.main.feels_like)}°c
      </div>
          </div>
        </div>
      )
}