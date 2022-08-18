import React, {useEffect, useState} from 'react'
import { DashboardContainer, StockContainer, StockWrapper, HeaderWrapper, GraphContainer, GraphWrapper } from './DashboardElements'
import axios from 'axios'

export default function Dashboard(props){

    const [user, setUser] = useState(props.user)
    
    async function handleSubmit(){
        alert('urmom')
    }

    useEffect(() => {
        async function fetchData(){
            const userData = await axios.get('http://localhost:5000/api/getdata', {
                params: {
                    username: user.user.username,
                    password: user.user.password,
                }
            })
            setUser(userData.data)    
        }
        fetchData()
    }, []);

    var arr = user.user.portfolios[0].stocks
    var renderedOutput = arr.map(item => <div className=""> {item.ticker} </div>)
    

    return (
        <DashboardContainer>
                {renderedOutput}

            <StockContainer>
                <StockWrapper>
                    <form onSubmit={handleSubmit}>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input type="submit"></input>
                    </form>
                </StockWrapper>
                
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

