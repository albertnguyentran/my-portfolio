import React, {useEffect, useState} from 'react'
import Hero from '../components/Hero'
import axios from 'axios'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import jwt from 'jsonwebtoken'
import {useParams, useNavigate, Navigate} from 'react-router-dom'

const ContainerWrapper = styled.div`
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: relative;
  width: fit-content;
  height: fit-content;

  background: #ffffff;
  font-size: 40px;

`

const Portfolio = () => {

    const token = localStorage.getItem('token')
    const user = jwt.decode(token)

    if (!token) {
      alert('error please sign in')
    }

    let {id} = useParams();

    return (
      <>
        <ContainerWrapper>
            <Sidebar user={user}></Sidebar>
            <Dashboard user={user} id={id}></Dashboard>
        </ContainerWrapper>
      </>    
      
    )
}

export default Portfolio