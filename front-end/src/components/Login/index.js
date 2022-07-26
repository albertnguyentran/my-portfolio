import React, {useState, useRef} from 'react'
import { LoginBoxContainer, LoginContainer, LoginTextbox, LoginInputWrapper } from './LoginElements'
import axios from "axios"

export default function Login(){

    return (
        <>
            <LoginContainer>
                <LoginBoxContainer>
                    <LoginTextbox></LoginTextbox>
                    <LoginInputWrapper></LoginInputWrapper>
                    <LoginTextbox></LoginTextbox>
                    <LoginInputWrapper></LoginInputWrapper>
                    <LoginInputWrapper></LoginInputWrapper>
                    <LoginInputWrapper></LoginInputWrapper>
                </LoginBoxContainer>
            </LoginContainer>
        
        </>
        )
    
}        

