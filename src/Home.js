import React, { Component } from "react";
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { Router } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Landing />
        <Portfolio />
        <About />
      </div>
    );
  }
}
