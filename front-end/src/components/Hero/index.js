import React from 'react'
import {HeroContainer, HeroContainerLeft, HeroContainerRight, HeroLeftButtonWrapper, HeroLeftSecondary, HeroLeftTitle, HeroLeftWrapper, HeroRightButtonWrapper, HeroRightInput
,HeroRightTitle, HeroRightWrapper} from './HeroElements'
class Home extends React.Component {

    render(){
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
                    <HeroRightWrapper>
                        <HeroRightTitle></HeroRightTitle>
                        <HeroRightInput></HeroRightInput>
                        <HeroRightInput></HeroRightInput>
                        <HeroRightButtonWrapper></HeroRightButtonWrapper>
                    </HeroRightWrapper>
                </HeroContainerRight>
            </HeroContainer>
        )
    }
}        


export default Home