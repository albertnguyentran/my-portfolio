import React from 'react'
import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import About from './components/About';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Start from './pages/hero'
import Home from './pages/home'
import SignIn from './pages/signin'
import Portfolio from './pages/portfolio';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Start/>}></Route>
          <Route path="/dashboard" element={<Home/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/portfolio/:id" element={<Portfolio/>}></Route>
        </Routes>
    </Router>
  )
}

export default App;
