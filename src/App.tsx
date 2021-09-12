import React from 'react';
import './App.css';
import { GMapsProvider } from './GMapProvider'
import Map from './components/Map';

const App = () => {
  return (
    <GMapsProvider>
      <Map />
    </GMapsProvider>
  );
}

export default App;
