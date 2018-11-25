import React, { Component } from 'react';
import Nav from './components/layout/nav'
import Dashboard from './components/products/Dashboard'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <div className="container top30">
          <h1>Product View</h1>
          <hr/>
          <Dashboard />

        </div>

      </div>
    );
  }
}

export default App;
