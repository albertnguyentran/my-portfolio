import React from 'react'
import { SidebarContainer, SidebarTitleLogoWrapper, SidebarTitleTextWrapper, SidebarTitleWrapper, SidebarTextTextWrapper, SidebarTextTitleWrapper, SidebarTextWrapper } from './SidebarElements'
const Sidebar = () => {
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

    </SidebarContainer>

  )
}

export default Sidebar