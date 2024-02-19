import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import news from './Components/News';

export default class App extends Component {
  render() {
    return (
      <Navbar/>
      <News/>
    )
  }
}
