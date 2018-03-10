import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Panel} from './Panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel />
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
