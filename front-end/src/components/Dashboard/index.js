import React from 'react'
import { useEffect } from 'react'
import { DashboardContainer, StockContainer, StockWrapper, HeaderWrapper, GraphContainer, GraphWrapper } from './DashboardElements'
import axios from 'axios'

export default function Dashboard(props){

    
    var user = props.user 
    var arr = user.portfolio.stocks
    var renderedOutput = arr.map(item => <div> {item} </div>)

    async function updateData(){
        const postData = await axios.post('http://localhost:5000/api/user/update', {
            portfolios: [{

            }]
            
        })
    }
    useEffect(() => {
        updateData()
    })

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

