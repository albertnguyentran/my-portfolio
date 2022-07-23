import React, {useState} from 'react'
import {HeroContainer, HeroContainerLeft, HeroContainerRight, HeroLeftButtonWrapper, HeroLeftSecondary, HeroLeftTitle, HeroLeftWrapper, HeroRightButtonWrapper, HeroRightInput
,HeroRightTitle, HeroRightWrapper, HeroUsernameInput, HeroSubmitInput} from './HeroElements'
import axios from "axios"

export default function Hero(){

    const [user, setUser] = useState({username: '', password: ''})

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
        
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api', {
            username: user.username,
            password: user.password
        }).then(res => {
            console.log(res)
        })
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
                        <input type="text" name="username" onChange={handleChange}></input>
                    </HeroRightInput>

                    <HeroRightInput>
                        <input type="text" name="password" onChange={handleChange}></input>
                    </HeroRightInput>

                    <HeroRightButtonWrapper>
                        <button></button>
                    </HeroRightButtonWrapper>
                </form>
            </HeroContainerRight>
        </HeroContainer>
        )
    
}        

