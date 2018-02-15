import React from 'react';

const WeatherForecastPortion = (props) => {


    return (
        <section className="forecast-portion">
            <h2 className="date">{props.data}</h2>
            <div className="min-temp">Min temperature: {props.minTemp}</div>
            <div className="max-temp">Max temperature: {props.maxTemp}</div>
            <div className="weather-indication">Weather ind: {props.indication}</div>
        </section>
    );
};

export default WeatherForecastPortion;