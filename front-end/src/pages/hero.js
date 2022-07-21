import React from 'react'
import Hero from '../components/Hero'
import axios from 'axios'

class Start extends React.Component {

  componentDidMount(){
    axios.get('http://localhost:5000/api').then(res => {
      console.log(res)
    })
  }
  
  render() {
    return (
      <>
          <Hero></Hero>
      </>    
    )
  }
}

export default Start


