import './App.css';
import React, {Component} from 'react';
import Navbar from './components/NavBar/NavBar'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
            </div>
        </Router>
);
}

export default App;
