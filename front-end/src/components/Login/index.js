import React, {useState, useRef} from 'react'
import { LoginBoxContainer, LoginContainer, LoginTextbox, LoginInputWrapper } from './LoginElements'
import axios from "axios"

export default function Login(){

    const [user, setUser] = useState({username: '', password: '', email: ''})
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
        
    };


    async function handleSubmit(event) {
        event.preventDefault();
     
        
        const response = await axios.post('http://localhost:5000/api/login', {
            username: user.username,
            password: user.password,
        }).then(res => {
            console.log(res)
        })

        const data = await response.json
        console.log(data)

        if (data.user) {
            alert('login successful')
            window.location.href = '/dashboard'
        } else {
            alert('no')
        }
        console.log(data)

        usernameRef.current.value = ''
        passwordRef.current.value = ''

        console.log(user.username)
        console.log(user.password)
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

