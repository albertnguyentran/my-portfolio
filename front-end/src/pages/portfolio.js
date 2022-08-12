import React from 'react'
import Hero from '../components/Hero'
import axios from 'axios'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import jwt from 'jsonwebtoken'

const ContainerWrapper = styled.div`
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: relative;
  width: 100%;
  height: 100vh;

  background: #F8F4FA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 40px;

`

const Portfolio = () => {
  
    const token = localStorage.getItem('token')
    const user = jwt.decode(token)

    console.log('portfolio.js', user)

    return (
      <>
        <ContainerWrapper>
            <Sidebar user={user}></Sidebar>
            <Dashboard user={user} ></Dashboard>
        </ContainerWrapper>
      </>    
      
    )
  }

export default Portfolio