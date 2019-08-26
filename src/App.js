import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slide from './Slide.jsx';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Slide com React</h1>
        </header>
        <div>
          <p>Slide em execução</p>
          <Slide />
          </div>
      </div>
    );
  }
}

export default App;
