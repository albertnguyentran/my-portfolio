import React, {useEffect, useState, useRef} from 'react'
import { stockStyle, stockContainer, DashboardContainer, StockContainer, StockWrapper, HeaderWrapper, GraphContainer, GraphWrapper } from './DashboardElements'
import axios from 'axios'

export default function Dashboard(props){


    const [user, setUser] = useState(props.user)
    const [portfolioIndex, setIndex] = useState()
    const [stocks, setStocks] = useState({ticker: '', amount: '', date: '', price: ''})

    const handleChange = (e) => {
        setStocks({...stocks, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        async function fetchData(){
            const userData = await axios.get('http://localhost:5000/api/getdata', {
                params: {
                    username: user.user.username,
                    password: user.user.password,
                }
            })

            if (userData.data.status === 500) {
                alert('error adding stocks')
            }

            setUser(userData.data)    
        }
        fetchData()
    }, []);

    async function handleSubmit(event){
        try {
            const response = await axios.post('http://localhost:5000/api/stocks', {
                username: props.user.user.username,
                portfolioName: props.id,
                stock: {
                    ticker: stocks.ticker,
                    amount: stocks.amount,
                    price: stocks.price
                }
            })

            console.log(response)
            
            if (response.data.status === 200) {
                alert('ok')
            }
            if (response.data.status === 500) {
                alert('error adding stocks')
            }

        } catch (err) {
            console.log(err)
        }
    }

    var arr = user.user.portfolios[0].stocks
    var renderedOutput = arr.map(item =>  <div style={stockContainer}> <div style={stockStyle}> {item.ticker} </div> <div style={stockStyle}> {item.amount} </div> <div> {item.price} </div> </div>)
    
    return (
        <DashboardContainer>

            <StockContainer>

                <StockWrapper>
                    <div>Ticker</div>
                    <div>Amount</div>
                    <div>Price</div>
                </StockWrapper>

                {renderedOutput}

                <StockWrapper>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="ticker" onChange={handleChange} value={stocks.ticker}></input>
                        <input type="text" name="amount" onChange={handleChange} value={stocks.amount}></input>
                        <input type="text" name="price" onChange={handleChange} value={stocks.price}></input>
                        <input type="submit"></input>
                    </form>
                </StockWrapper>

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

