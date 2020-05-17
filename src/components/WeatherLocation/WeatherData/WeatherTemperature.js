import React from 'react';
import WeatherIcons from 'react-weathericons';
import * as WeatherType from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [WeatherType.CLOUD]: "cloud",
    [WeatherType.SUN]: "day-sunny",
    [WeatherType.RAIN]: "rain",
    [WeatherType.SNOW]: "snow",
    [WeatherType.THUNDER]: "day-thunderstore",
    [WeatherType.DRIZZLE]: "day-showers"
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