import React, { Component } from 'react';
import Router from './Router'
import {Link } from 'react-router-dom'

const Navigation = (props) => (
  <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart/">Cart</Link>
          </li>
          
        </ul>
      </nav>

)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Router/>
      </div>
    );
  }
}

export default App;
