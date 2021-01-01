import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeProvider} from './Tugas-15/ThemeContext'
import {Navbar, ThemeToggler} from './Tugas-15/Navbar'
import Routes from './Tugas-15/Routes'
import './App.css';


function App() {
  return (
    <Router>
        <ThemeProvider>
        <Navbar/>
        </ThemeProvider>
      <div className="app">
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
