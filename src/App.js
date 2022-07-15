import React from 'react'
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import About from './components/About';
import styled from 'styled-components';

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
    <ContainerWrapper>
      <Sidebar/>
      <About/>
    </ContainerWrapper>
  )
}

export default App;
