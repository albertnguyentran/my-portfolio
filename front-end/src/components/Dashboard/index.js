import React, {useEffect} from 'react'
import { DashboardContainer, StockContainer, StockWrapper, HeaderWrapper, GraphContainer, GraphWrapper } from './DashboardElements'
import axios from 'axios'

export default function Dashboard(props){

    var user = props.user
    var id = props.id

    console.log('dashboard - index.js')
    console.log(user.user.email)

    var arr = user.user.portfolios[0].stocks

    /*for (let i = 0; i < arr.length; i++) {
        var renderedOutput = <div> {arr[i].ticker} </div>
    }*/

    console.log(arr)
    var renderedOutput = arr.map(item => <div> {item.ticker} </div>)


    useEffect(() => {
        const fetchData = async () => {
            const userData = await axios.get('http://localhost:5000/api/getdata', {
                params: {
                    username: user.user.username,
                    password: user.user.password,
                }
            })
        }

        fetchData()
        console.log('getdata')

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

