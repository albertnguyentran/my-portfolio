import React from 'react'
import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import About from './components/About';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from './pages'

const ContainerWrapper = styled.div`
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: relative;
  width: 1920px;
  height: 1134px;

  background: #F8F4FA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 40px;

`

function App() {
  return (
    <Home/>
  )
}

export default App;
