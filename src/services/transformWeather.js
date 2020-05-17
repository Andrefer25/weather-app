import convert from 'convert-units';
import * as WeatherType from '../constants/weathers';

const getTemp = kelvin => {
    return parseFloat(convert(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = weather => {
    const { id } = weather;
    if(id < 300) {
        return WeatherType.THUNDER;
    } else if (id < 400) {
        return WeatherType.DRIZZLE;
    } else if (id < 600) {
        return WeatherType.RAIN;
    } else if (id < 700) {
        return WeatherType.SNOW;
    } else if (id === 800) {
        return WeatherType.SUN;
    } else return WeatherType.CLOUD;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;
}

export default transformWeather;