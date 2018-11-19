import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import Studio from './Components/Studio'
import Featured from './Components/Featured'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Studio />
        <Featured />
      </div>
    );
  }
}

export default App;
