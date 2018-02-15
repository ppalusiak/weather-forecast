import React from 'react';

const WeatherForecastPortion = (props) => {


    return (
        <li className="forecast-portion">
            <p className="date">{props.data}</p>
            <p className="min-temp">Min temperature: {props.minTemp}</p>
            <p className="max-temp">Max temperature: {props.maxTemp}</p>
            <p className="weather-indication">Weather ind: {props.indication}</p>
        </li>
    );
};

export default WeatherForecastPortion;