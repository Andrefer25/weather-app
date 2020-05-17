import React from 'react';
import LocationList from './components/LocationList';

import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Ushuaia,ar',
  'Lima,per',
  'Bogota,col',
  'Ciudad de Mexico,mx',
  'Madrid,es'
]

function App() {
  return (
    <div className="App">
      <LocationList cities={cities}/>
    </div>
  );
}

export default App;
