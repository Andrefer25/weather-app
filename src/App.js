import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Ushuaia,ar',
  'Lima,per',
  'Bogota,col',
  'Ciudad de Mexico,mx',
  'Madrid,es'
]

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      city: null
    };
  }

  handleSelectionLocation = city => {
    this.setState({ city });
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h5' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation} />
          </Col>
          <Col sm={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {city &&
                  <ForecastExtended city={city}/>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
