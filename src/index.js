import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WeatherForecast from './components/weather_forecast';
import axios from 'axios';

const API_KEY = '2f2dfa9d32a4b185076555474988cd55';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=london,us&appid=${API_KEY}`;


class App  extends Component{
    constructor(props) {
        super(props);

        this.state = {
            weatherForecast: []
        };

    }

    componentDidMount() {
        axios.get(ROOT_URL)
            .then(response => {
                this.setState({ weatherForecast: response.data.list });
        })
    }

    render() {
        return (
            <div>
                <WeatherForecast
                    weatherForecast={this.state.weatherForecast}
                />
            </div>
        );
    }
}


// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));
