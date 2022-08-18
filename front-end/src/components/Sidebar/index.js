import React, {useEffect, useState, useMemo} from 'react'
import { button, portfolioStyle, portfolioContainer, container, SidebarContainer, SidebarTitleLogoWrapper, SidebarTitleTextWrapper, SidebarTitleWrapper, SidebarTextTextWrapper, SidebarTextTitleWrapper, SidebarTextWrapper } from './SidebarElements'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

export default function Sidebar(props){

    const navigate = useNavigate()
    const [user, setUser] = useState(props.user)

    const handleClick = e => {
        navigate('/portfolio/' + e.target.innerText)
        console.log(e.target.innerText)
    }

    const deletePortfolio = (name) => {
        console.log(name)
    }
    
    useEffect(() => {
        async function fetchData(){
            const userData = await axios.get('http://localhost:5000/api/getdata', {
                params: {
                    username: user.user.username,
                    password: user.user.password,
                }
            })
            setUser(userData.data)
        }
        fetchData()
    }, []);

    var arr = user.user.portfolios
    var renderedOutput = arr.map(item => <div style={portfolioContainer}> <div key={item.portfolioName} style={portfolioStyle} onClick={handleClick}> {item.portfolioName} </div> <div name={item.portfolioname} onClick={deletePortfolio(item.portfolioName)} style={button}>X</div></div>)

    return (
    <>
        <SidebarContainer>
            <SidebarTitleWrapper>
                <SidebarTitleTextWrapper>PORTFOLIO</SidebarTitleTextWrapper>
                <SidebarTitleLogoWrapper></SidebarTitleLogoWrapper>
            </SidebarTitleWrapper>

            <SidebarTextWrapper>
                <SidebarTextTitleWrapper>MY PORTFOLIO</SidebarTextTitleWrapper>
            </SidebarTextWrapper>

            <div style={container}>
                {renderedOutput}
            </div>

            <SidebarTextWrapper>
                <SidebarTextTitleWrapper>MY PORTFOLIO</SidebarTextTitleWrapper>
                <SidebarTextTextWrapper>RRSP</SidebarTextTextWrapper>
                <SidebarTextTextWrapper>Brokerage account</SidebarTextTextWrapper>
            </SidebarTextWrapper>

            <SidebarTextWrapper>
                <SidebarTextTitleWrapper>INSIGHTS</SidebarTextTitleWrapper>
                <SidebarTextTextWrapper>Yo</SidebarTextTextWrapper>
                <SidebarTextTextWrapper>Yo</SidebarTextTextWrapper>
            </SidebarTextWrapper>

            <SidebarTextWrapper>
                <SidebarTextTitleWrapper></SidebarTextTitleWrapper>
                <SidebarTextTitleWrapper></SidebarTextTitleWrapper>
                <SidebarTextTitleWrapper></SidebarTextTitleWrapper>
            </SidebarTextWrapper>

        </SidebarContainer>
    </>

    )
  
}
