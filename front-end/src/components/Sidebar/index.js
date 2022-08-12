import React, {useEffect} from 'react'
import { SidebarContainer, SidebarTitleLogoWrapper, SidebarTitleTextWrapper, SidebarTitleWrapper, SidebarTextTextWrapper, SidebarTextTitleWrapper, SidebarTextWrapper } from './SidebarElements'

export default function Sidebar(props){

    var user = props.user


    var arr = user.user.portfolios
    console.log(arr)

    /*for (let i = 0; i < arr.length; i++) {
        var renderedOutput = <div> {arr[i].ticker} </div>
    }*/

    //var renderedOutput = arr.map(item => <div> {item.ticker} </div>)


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

      </SidebarContainer>
    )
  
}
