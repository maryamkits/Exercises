import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import Studio from './Components/Studio'
import Featured from './Components/Featured'
import Middle_Banner from './Components/Middle_Banner'
import Insights from './Components/Insights'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Studio />
        <Featured />
        <Middle_Banner />
        <Insights />
        <Footer />
      </div>
    );
  }
}

export default App;
