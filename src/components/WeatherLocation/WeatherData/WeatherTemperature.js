import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, CLOUDY, FOG, SUN, RAIN, SNOW, WINDY } from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [FOG]: "day-fog",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if(icon)
        return <WeatherIcons name={icon} size={sizeIcon} />
    else
    return <WeatherIcons name={"day-sunny"} size={sizeIcon} />
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont wicon">
        {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{`C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;