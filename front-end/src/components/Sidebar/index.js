import React, {useEffect} from 'react'
import { SidebarContainer, SidebarTitleLogoWrapper, SidebarTitleTextWrapper, SidebarTitleWrapper, SidebarTextTextWrapper, SidebarTextTitleWrapper, SidebarTextWrapper } from './SidebarElements'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


export default function Sidebar(props){

    const navigate = useNavigate()
    var user = props.user    
    var arr = user.user.portfolios
    var renderedOutput = arr.map(item => <div> {item.portfolioName} </div>)
    
    const handleClick = e => {
        console.log(e.target.value)  
    }

    return (
    <>
        <SidebarContainer>
            {renderedOutput}
            <SidebarTitleWrapper>
                <SidebarTitleTextWrapper>PORTFOLIO</SidebarTitleTextWrapper>
                <SidebarTitleLogoWrapper></SidebarTitleLogoWrapper>
            </SidebarTitleWrapper>

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
