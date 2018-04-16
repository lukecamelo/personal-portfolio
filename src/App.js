import React, { Component } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import KnownTech from './components/knownTech';
import Projects from './components/projects';
import Fade from 'react-reveal/Fade';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Header/>
          <About/>
          <KnownTech/>
          <Projects/>
      </div>
    );
  }
}

export default App;
