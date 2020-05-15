import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import * as WeatherType from '../../constants/weathers';
import './styles.css';

const data = {
    temperature: 25,
    weatherState: WeatherType.SUN,
    humidity: 40,
    wind: '10 m/s'
}

const data2 = {
    temperature: 15,
    weatherState: WeatherType.WINDY,
    humidity: 30,
    wind: '50 m/s'
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data
        };
    }

    handleUpdateClick = () => {
        console.log("actualizado");
        this.setState({
            city: 'Rosario',
            data: data2
        });
    }

    render() {
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }

}

export default WeatherLocation;