import React from 'react'
import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import About from './components/About';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Start from './pages/hero'
import Home from './pages/home'


function App() {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<Start/>}></Route>
          <Route path="/dashboard" element={<Home/>}></Route>
        </Routes>
       
      
    </Router>
  )
}

export default App;
