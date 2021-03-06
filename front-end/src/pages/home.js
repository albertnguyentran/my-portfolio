import React from 'react'
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import styled from 'styled-components';
import axios from 'axios';

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
class Home extends React.Component {

  componentDidMount(){
    axios.get('http://localhost:5000/api').then(res => {
      console.log(res)
    })
  }
  
  render() {
    return (
      <>
          <ContainerWrapper>
              <Sidebar/>
              <About/>
          </ContainerWrapper>
      </>    
    )
  }
}

export default Home


