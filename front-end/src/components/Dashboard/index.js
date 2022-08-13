import React, {useEffect, useState} from 'react'
import { DashboardContainer, StockContainer, StockWrapper, HeaderWrapper, GraphContainer, GraphWrapper } from './DashboardElements'
import axios from 'axios'

export default function Dashboard(props){

    const [user, userState] = useState(props.user)

   
    useEffect(() => {
        if (performance.getEntriesByType("navigation")[0].type){
            async function fetchData(){
                console.log('a')
                const userData = await axios.get('http://localhost:5000/api/getdata', {
                    params: {
                        username: user.username,
                        password: user.password,
                    }
                })
    
                userState(userData)
    
            }

            fetchData()
        }

    })


    //var renderedOutput = arr.map(item => <div> {item.ticker} </div>)
    //            {renderedOutput}

    



    return (
        <DashboardContainer>
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

