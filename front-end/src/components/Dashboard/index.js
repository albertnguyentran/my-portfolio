import React, {useEffect, useState, useRef} from 'react'
import { increasedStyle, decreasedStyle, infoStyle, chartStyle,buttonContainer, titleContainer, button, stockStyle, stockContainer, DashboardContainer, StockContainer, StockWrapper, HeaderWrapper, GraphContainer, GraphWrapper } from './DashboardElements'
import axios from 'axios'
import {LineChart} from '../ChartsJS'
import {Line, Bar, Chart} from 'react-chartjs-2'


export default function Dashboard(props){


    const [user, setUser] = useState(props.user)
    const [update, setUpdate] = useState()
    const [portfolioIndex, setIndex] = useState()
    const [stocks, setStocks] = useState({ticker: '', amount: '', date: '', price: ''})
  

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

    async function updateStock(stock){
        try{
            const response = await axios.post('http://localhost:5000/api/updatestock', {
                username: user.user.username,
                portfolioName: props.id,
                stock: stock,
                index: 0
            })
            
            if (response.data.status === 200) {
                alert('succesfully updated stock')
            }
        } catch (err) {
            console.log(err)
        }
    }

    async function updateStock1(stock){
        try{
            const response = await axios.post('http://localhost:5000/api/updatestock', {
                username: user.user.username,
                portfolioName: props.id,
                stock: stock,
                index: 1
            })
            
            if (response.data.status === 200) {
                alert('succesfully updated stock')
            }
        } catch (err) {
            console.log(err)
        }
    }

    async function updateStock2(stock){
        try{
            const response = await axios.post('http://localhost:5000/api/updatestock', {
                username: user.user.username,
                portfolioName: props.id,
                stock: stock,
                index: 2
            })
            
            if (response.data.status === 200) {
                alert('succesfully updated stock')
            }
        } catch (err) {
            console.log(err)
        }
    }

    async function updateStock3(stock){
        try{
            const response = await axios.post('http://localhost:5000/api/updatestock', {
                username: user.user.username,
                portfolioName: props.id,
                stock: stock,
                index: 3
            })
            
            if (response.data.status === 200) {
                alert('succesfully updated stock')
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
                price: stocks.price
    
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
        var renderedOutput = arr.map(item =>  <div style={stockContainer}> <div style={stockStyle}> {item.ticker} </div> <div style={stockStyle}> {item.amount} </div> <div style={stockStyle}> {item.currentprice} </div> 
        <div style={stockStyle}>{item.marketValue}</div><div style={stockStyle}>{item.buy}</div><div style={stockStyle}>{item.hold}</div><div style={stockStyle}>{item.sell}</div>
        <div style={buttonContainer}> <button stockItem={item}  onClick={() => updateStock(item)} style={button}>O</button> <button stockItem={item}  onClick={() => updateStock1(item)} style={button}>-1</button> 
        <button stockItem={item} onClick={() => updateStock2(item)} style={button}>-2</button> <button stockItem={item} onClick={() => updateStock3(item)} style={button}>-3</button>
        </div> <button stockItem={item} onClick={() => deleteStock(item)} style={button}>X</button> </div>)

        var renderedChart = arr.map(item=> 
            <div style={chartStyle}> 
                <LineChart item={item}/>
                
                <div style={infoStyle}>
                    {item.currentprice >= item.price ? 
                    <div> <div style={increasedStyle}>Increased {Math.round(((item.currentprice-item.price)/(item.price))*100)}% since you bought it at {item.price}</div> </div> 
                    : <div><div style={decreasedStyle}>Decreased -{Math.round(((item.currentprice-item.price)/(item.price))*100)}% since you bought it at {item.price}</div></div>}
                </div>
            </div>)

        //ticker, amountm pr
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
                    <div style={stockStyle}>Update</div>
                </div>

                {renderedOutput}

                <StockWrapper>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="ticker" name="ticker" onChange={handleChange} value={stocks.ticker}></input>
                        <input type="text" placeholder="amount" name="amount" onChange={handleChange} value={stocks.amount}></input>
                        <input type="text" placeholder="price" name="price" onChange={handleChange} value={stocks.price}></input>
                        <input type="submit"></input>
                    </form>
                </StockWrapper>

            </StockContainer>
            <GraphContainer>
                {renderedChart}
            </GraphContainer>
        </DashboardContainer>
    )
}

