import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    forecastData: PropTypes.array.isRequired
}

const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);