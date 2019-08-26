import React, { Component } from 'react'
import logo from '../../assets/images/logo.svg'
import './App.scss'
import Router from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    )
  }
}

export default App
