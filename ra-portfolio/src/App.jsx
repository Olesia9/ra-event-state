import React from 'react'
import './App.css'
import Portfolio from "./containers/portfolio/Portfolio.jsx";

class App extends Portfolio {
    constructor() {
        super()
    }

    render() {
        return (
            <React.Fragment>
                <Portfolio/>
            </React.Fragment>
        )
    }
}

export default App
