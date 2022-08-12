import React, {useEffect} from 'react'
import { DashboardContainer, StockContainer, StockWrapper, HeaderWrapper, GraphContainer, GraphWrapper } from './DashboardElements'
import axios from 'axios'

export default function Dashboard(props){

    var user = props.user 
    console.log('dashboard - index.js')
    /*console.log(user.user)
    console.log(user.user.portfolios[0].stocks[0].ticker)*/

    var arr = user.user.portfolios[0].stocks

    /*for (let i = 0; i < arr.length; i++) {
        var renderedOutput = <div> {arr[i].ticker} </div>
    }*/

    console.log(arr)
    var renderedOutput = arr.map(item => <div> {item.ticker} </div>)


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

