import React, { Component } from 'react';
import NavBar from './NavBar';
import Clock from './Clock';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="main">
          <div className="container">
            <Clock />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;