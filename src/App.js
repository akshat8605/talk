import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './component/header/Navigation';
import Intro from './component/Intro/intro';
class App extends Component {
  render() {
    return (
      <div >
        <Navigation/>
        <Intro/>
      </div>
    );
  }
}

export default App;
