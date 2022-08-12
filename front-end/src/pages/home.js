import React, {useEffect} from 'react'
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import styled from 'styled-components';
import axios from 'axios';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';

const ContainerWrapper = styled.div`
  box-sizing: border-box;
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
const Home = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const user = jwt.decode(token)
  
  axios.get('http://localhost:5000/api/user', {
            params: {
                username: user.username,
                password: user.password,
            }
        }).then(res => {
            console.log(res)
        })

  async function populateData() {
    try {
      const data = await fetch('api/user/data', {
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
      })
     } catch (err) {
      console.log(err)
    }
    }

  useEffect(() => {
      if(token) {
        const user = jwt.decode(token)

      if(!user) {
        localStorage.removeItem('token')
        navigate.replace('/signin')
      } else {
        populateData()
      }
    }
  })

  
  

  return (
      <>
          <ContainerWrapper>
              <Sidebar/>
              <About/>
          </ContainerWrapper>
      </>    
    )
  }

export default Home


