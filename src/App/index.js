import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';


class App extends Component {
  render() {
    return (
      <WelcomeMessage name="CryptoDash"/>
    );
  }
}

export default App;
