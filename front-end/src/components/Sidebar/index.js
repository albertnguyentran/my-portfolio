import React, {useEffect} from 'react'
import { SidebarContainer, SidebarTitleLogoWrapper, SidebarTitleTextWrapper, SidebarTitleWrapper, SidebarTextTextWrapper, SidebarTextTitleWrapper, SidebarTextWrapper } from './SidebarElements'
import { useNavigate } from 'react-router-dom'
export default function Sidebar(props){

    const navigate = useNavigate()

    var user = props.user
    console.log(user.user.portfolios)
    var arr = user.user.portfolios

    /*for (let i = 0; i < arr.length; i++) {
        var renderedOutput = <div> {arr[i].ticker} </div>
    }*/

    var renderedOutput = arr.map(item => <div onClick={handleClick}> {item.portfolioName} </div>)

    const handleClick = e => {
        alert('aaa')
        console.log(e.target.value)
        console.log('a')
    }

    return (
      <SidebarContainer>
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

          {renderedOutput}

      </SidebarContainer>
    )
  
}
