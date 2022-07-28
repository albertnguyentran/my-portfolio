import React from 'react'
import { DashboardContainer, StockContainer, StockWrapper, HeaderWrapper, GraphContainer, GraphWrapper } from './DashboardElements'

export default function Dashboard(props){

    var user = props.user 
    var arr = user.portfolio.stocks
    var renderedOutput = arr.map(item => <div> {item} </div>)

    return (
        <DashboardContainer>
            <StockContainer>
                <StockWrapper></StockWrapper>
                {renderedOutput}
                <StockWrapper></StockWrapper>

            </StockContainer>
            <HeaderWrapper></HeaderWrapper>
            <GraphContainer>
                <GraphWrapper></GraphWrapper>
                <GraphWrapper></GraphWrapper>
            </GraphContainer>
            <GraphContainer>
                <GraphWrapper></GraphWrapper>
                <GraphWrapper></GraphWrapper>
            </GraphContainer>
        </DashboardContainer>
    )
}

