import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
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

const renderProgress = () => {
    return "Cargando pronóstico extendido";
}

const ForeCastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className='forecast-title'>Pronostico Extendido de {city}</h2>
        {forecastData? 
            renderForecastItemDays(forecastData):
            renderProgress()
        }
    </div>
);

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired
}

export default ForeCastExtended;