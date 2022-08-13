import React, {useEffect, useState} from 'react'
import { DashboardContainer, StockContainer, StockWrapper, HeaderWrapper, GraphContainer, GraphWrapper } from './DashboardElements'
import axios from 'axios'

export default function Dashboard(props){

    const [User, UserState] = useState(null)

    var user = props.user
    var id = props.id

    const fetchData = async () => {
        const userData = await axios.get('http://localhost:5000/api/getdata', {
            params: {
                username: user.user.username,
                password: user.user.password,
            }
        })

        console.log('b', userData)
        UserState(userData)

    }

    fetchData()
    console.log('a', User)
    var arr = User
    var renderedOutput = arr.map(item => <div> {item.ticker} </div>)
    
    



    return (
        <DashboardContainer>
            {renderedOutput}
            <StockContainer>
                <StockWrapper></StockWrapper>
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

