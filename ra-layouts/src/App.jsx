import React from 'react'
import './App.css'
import Store from "./containers/store/Store.jsx";

class App extends Store {
    constructor() {
        super()
    }

    render() {
        return <>
                <Store/>
            </>
    }
}

export default App
