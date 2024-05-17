import React from 'react'
import './App.css'
import Portfolio from "./containers/portfolio/Portfolio.jsx";

class App extends Portfolio{
    constructor() {
        super()
    }
  render() {
      return <>
          <Portfolio/>
      </>
  }
}

export default App
