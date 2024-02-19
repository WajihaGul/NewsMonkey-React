import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  no= 'first';
  render() {
    return (
      <div>Hello my {this.no} class Component here</div>
    )
  }
}
