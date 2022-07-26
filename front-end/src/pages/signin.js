import React from 'react'
import Login from '../components/Login'
import axios from 'axios'

class SignIn extends React.Component {

  componentDidMount(){
    axios.get('http://localhost:5000/api').then(res => {
      console.log(res)
    })
  }
  
  render() {
    return (
      <>
          <Login></Login>
      </>    
    )
  }
}

export default SignIn