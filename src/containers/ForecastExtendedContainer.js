import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForeCastExtended from '../components/ForecastExtended';

class ForecastExtendedContainer extends Component {

    render() {
        return (
            this.props.city &&
            <ForeCastExtended city={this.props.city} />
        )
    }
}

ForecastExtendedContainer.propTypes = {
    prop: PropTypes.string.isRequired
}

const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);