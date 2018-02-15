import React from 'react';
import WeatherForecastPortion from './weather_forecast_portion';

const WeatherForecast = (props) => {
    const weatherForecastPortion = props.weatherForecast.map((weatherUnit) => {
    console.log(weatherUnit.weather[0].main);
        return (
            <WeatherForecastPortion
                data={weatherUnit.dt}
                minTemp={weatherUnit.main.temp_min}
                maxTemp={weatherUnit.main.temp_max}
                indication={weatherUnit.weather[0].main}
                key={weatherUnit.dt}
            />
        )
    });

    return (
        <div>{weatherForecastPortion}</div>
    );
};

export default WeatherForecast;