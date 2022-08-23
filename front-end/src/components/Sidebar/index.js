import React, {useEffect, useState, useMemo} from 'react'
import { button, portfolioStyle, portfolioContainer, container, SidebarContainer, SidebarTitleLogoWrapper, SidebarTitleTextWrapper, SidebarTitleWrapper, SidebarTextTextWrapper, SidebarTextTitleWrapper, SidebarTextWrapper } from './SidebarElements'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

export default function Sidebar(props){

    const navigate = useNavigate()
    const [user, setUser] = useState(props.user)
    const [portfolioName, setPortfolio] = useState({portfolioName: ''})

    const handleClick = e => {
        navigate('/portfolio/' + e.target.innerText)
        console.log(e.target.innerText)
    }

    //Delete portfolio
    async function deletePortfolio(name){
        try {
            const response = await axios.post('http://localhost:5000/api/deleteportfolio', {
                username: user.user.username,
                portfolioName: name
            })

            setPortfolio('')

        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setPortfolio({...portfolioName, [e.target.name]: e.target.value})
    }

    //Create a new portfolio
    async function handleSubmit(event){
        try {
            const response = await axios.post('http://localhost:5000/api/postportfolio', {
                username: user.user.username,
                insertPortfolio: {
                    portfolioName: portfolioName.portfolioName,
                    stocks: []
                }
            })
            
        } catch (err) {

        }
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
    }, [user, portfolioName]);

    var arr = user.user.portfolios
    var renderedOutput = arr.map(item => <div style={portfolioContainer}> <div key={item.portfolioName} style={portfolioStyle} onClick={handleClick}> {item.portfolioName} </div> <div name={item.portfolioname} onClick={() => deletePortfolio(item.portfolioName)} style={button}>X</div></div>)

    return (
    <>
        <SidebarContainer>
            <SidebarTitleWrapper>
                <SidebarTitleTextWrapper>PORTFOLIO</SidebarTitleTextWrapper>
                <SidebarTitleLogoWrapper></SidebarTitleLogoWrapper>
            </SidebarTitleWrapper>


            <div style={container}>
                {renderedOutput}
            </div>

            <form onSubmit={handleSubmit}>
                <input type="text" name="portfolioName" onChange={handleChange} value={portfolioName.portfolioName}></input>
                <input type="submit"></input>
            </form>

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
