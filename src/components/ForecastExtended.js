import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*const days = [
    'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
}*/

const api_key = "37d78a1aaf982e48acc83acfd9f49e25";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForeCastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(data => 
            (data.json())
        ).then( weather_data => {
            const forecastData = transformForecast(weather_data);
            this.setState({ forecastData });
        });
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(
            (forecast) => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data} 
            />) 
        );
    }

    renderProgress = () => {
        return "Cargando pronóstico extendido";
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
        <div>
            <h2 className='forecast-title'>Pronostico Extendido de {city}</h2>
            {forecastData? 
                this.renderForecastItemDays(forecastData):
                this.renderProgress()
            }
        </div>
        )
    }
}

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForeCastExtended;