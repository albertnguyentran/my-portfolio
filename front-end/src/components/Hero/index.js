import React, {useState, useRef} from 'react'
import {HeroContainer, HeroContainerLeft, HeroContainerRight, HeroLeftButtonWrapper, HeroLeftSecondary, HeroLeftTitle, HeroLeftWrapper, HeroRightButtonWrapper, HeroRightInput
,HeroRightTitle, HeroRightWrapper, HeroUsernameInput, HeroSubmitInput} from './HeroElements'
import axios from "axios"
import {useNavigate} from 'react-router-dom'

export default function Hero(){

    const navigate = useNavigate()
    const [user, setUser] = useState({username: '', password: '', email: ''})
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const emailRef = useRef(null)

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    };

    async function handleSubmit(event){
        try {
            event.preventDefault();

            const response = await axios.post('http://localhost:5000/api/register', {
                username: user.username,
                password: user.password,
                email: user.email,
                
            })
    
            usernameRef.current.value = ''
            passwordRef.current.value = ''
            emailRef.current.value = ''

            if (response.data.status === 200) {
                navigate('/signin')
            } else if (response.data.user === 'missing') {
                alert('missing data')
            } else if (response.data.status === 500) {
                alert('username or email already in use')
            }
            
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <HeroContainer>
            <HeroContainerLeft>
                <HeroLeftWrapper>
                    <HeroLeftTitle></HeroLeftTitle>
                    <HeroLeftSecondary></HeroLeftSecondary>
                    <HeroLeftButtonWrapper></HeroLeftButtonWrapper>
                </HeroLeftWrapper>
            </HeroContainerLeft>

            <HeroContainerRight>
                <form onSubmit={handleSubmit}>
                    <HeroRightTitle></HeroRightTitle>

                    <HeroRightInput>
                        <input ref={usernameRef} type="text" name="username" onChange={handleChange} value={user.username}></input>
                    </HeroRightInput>

                    <HeroRightInput>
                        <input ref={passwordRef} type="text" name="password" onChange={handleChange} value={user.password}></input>
                    </HeroRightInput>

                    <HeroRightInput>
                        <input ref={emailRef} type="text" name="email" onChange={handleChange} value={user.email}></input>
                    </HeroRightInput>

                    <HeroRightButtonWrapper>
                        <button type="submit">Submit</button>
                    </HeroRightButtonWrapper>
                </form>
            </HeroContainerRight>
        </HeroContainer>
        )
    
}        

