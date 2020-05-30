import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getForecastDataFromCities, getCity } from '../reducers';
import ForeCastExtended from '../components/ForecastExtended';

class ForecastExtendedContainer extends Component {

    render() {
        const { city, forecastData } = this.props;
        return (
            city &&
            <ForeCastExtended city={city} forecastData={forecastData} />
        )
    }
}

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
}

const mapStateToProps = (state) => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);