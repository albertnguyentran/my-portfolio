import React, {useState, useRef, useEffect} from 'react'
import { LoginBoxContainer, LoginContainer, LoginTextbox, LoginInputWrapper } from './LoginElements'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function Login(){

    const navigate = useNavigate()
    
    const [user, setUser] = useState({username: '', password: '', email: ''})
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
        
    };


    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                username: user.username,
                password: user.password,
            })


            usernameRef.current.value = ''
            passwordRef.current.value = ''

            console.log('Login Page', response)
        
            if (response.data.user) {
                localStorage.setItem('token', response.data.user)
                navigate('/dashboard')

            } else {
                alert('account not found')
            }

        } catch (err) {
            console.log(err)
        }
    }



    return (
        <>
            <LoginContainer>
                <LoginBoxContainer>
                    <form onSubmit={handleSubmit}>
                        <LoginTextbox></LoginTextbox>

                        <LoginInputWrapper>
                            <input ref={usernameRef} type="text" name="username" onChange={handleChange} value={user.username}></input>
                        </LoginInputWrapper>

                        <LoginTextbox></LoginTextbox>

                        <LoginInputWrapper>
                            <input ref={passwordRef} type="text" name="password" onChange={handleChange} value={user.password}></input>
                        </LoginInputWrapper>

                        <LoginInputWrapper>
                            <input type="submit"></input>
                        </LoginInputWrapper>
                        <LoginInputWrapper></LoginInputWrapper>
                    </form>
                </LoginBoxContainer>
            </LoginContainer>
        
        </>
        )
    
}        

