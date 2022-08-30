import React, {useEffect, useState, useRef} from 'react'
import { titleContainer, button, stockStyle, stockContainer, DashboardContainer, StockContainer, StockWrapper, HeaderWrapper, GraphContainer, GraphWrapper } from './DashboardElements'
import axios from 'axios'

export default function Dashboard(props){


    const [user, setUser] = useState(props.user)
    const [update, setUpdate] = useState()
    const [portfolioIndex, setIndex] = useState()
    const [stocks, setStocks] = useState({ticker: '', amount: '', date: '', price: ''})
    const [yahooStocks, setYahooStocks] = useState([{ticker: '', price: '', buy: '', sell: '', hold: ''}])

    const handleChange = (e) => {
        setStocks({...stocks, [e.target.name]: e.target.value})
    };

    //Fetch data every time the page is loaded
    useEffect(() => {
        try {
            async function fetchData () {
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
    
             async function fetchIndex(){
                const index = await axios.get('http://localhost:5000/api/getindex', {
                    params: {
                        username: user.user.username,
                        portfolioName: props.id
                    }
                })
                
                if (index.data.status === 200) {
                    setIndex(index.data.index)
                }
            }

            fetchData()
            fetchIndex()

        } catch (err) {
            console.log(err)
        }
    
    

    }, [user]);


    //Delete stock with id
    async function deleteStock(stock){
        try {
            const response = await axios.post('http://localhost:5000/api/deletestock', {
                username: user.user.username,
                portfolioName: props.id,
                stock: stock
            })

            if (response.data.status === 500) {
                alert('error deleting stock')
            } else {
                setUpdate('')
            }

        } catch (err) {
            console.log(err)
        }
    }

    //Post stock to respective portfolio
    async function handleSubmit(event){
        try {
            const response = await axios.post('http://localhost:5000/api/poststock', {
                username: props.user.user.username,
                portfolioName: props.id,
                ticker: stocks.ticker,
                amount: stocks.amount,
    
            })
            
            if (response.data.status === 200) {
                alert('ok')
            }
            if (response.data.status === 500) {
                alert('error adding stocks, check ticker')
            }

        } catch (err) {
            console.log(err)
        }
    }

    //Find the index of the portfolio here with the portfolio name using :id

    //console.log(portfolioIndex)
    if (user.user.portfolios[portfolioIndex]) {
        var arr = user.user.portfolios[portfolioIndex].stocks
        var renderedOutput = arr.map(item =>  <div style={stockContainer}> <div style={stockStyle}> {item.ticker} </div> <div style={stockStyle}> {item.amount} </div> <div style={stockStyle}> {item.price} </div> 
        <div style={stockStyle}>{item.marketValue}</div><div stockItem={item} onClick={() => deleteStock(item)} style={button}>X</div> </div>)
    }

    return (
        <DashboardContainer>

            <StockContainer>

                <div style={titleContainer}>
                    <div style={stockStyle}>Ticker</div>
                    <div style={stockStyle}>Amount</div>
                    <div style={stockStyle}>Price</div>
                    <div style={stockStyle}>Value</div>
                    <div style={stockStyle}>Buy</div>
                    <div style={stockStyle}>Hold</div>
                    <div style={stockStyle}>Sell</div>
                </div>

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

