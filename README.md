# Get Started
Clone this repository <br/>
Open a terminal with the path of the directory you cloned it in <br/>
cd back-end <br/>
npm run server <br/>
Open another terminal with the main path<br/>
cd front-end <br/>
npm start <br/>

# How to use it

![image](https://github.com/albertnguyentran/my-portfolio/blob/main/myportfolio.png)

**Sidebar:** <br/>
Add a portfolio with the input bar <br/>
Navigate to the portfolio by clicking on it <br/>
Delete with the delete button <br/>


**Dashboard:** <br/>
Input the ticker, # of shares bought and the price you bought it at <br/>
Info will load in the table above as well as a price chart of the past 6 months <br/>

Value = # of shares * price <br/>
Buy, hold, sell = fetched analyst recommendations from yahoo-stock-api <br/>

Click **O** to update to the most recent data <br/>
Click **-1** to update to -1 month data <br/>
Click **-2** to update to -2 month data <br/>
Click **-3** to update to -3 month data <br/>
Click the delete button to delete <br/>

# How I made it

**Stack:** <br/>
Database: Mongodb, Mongoose to define object schemas <br/>
Back-end: Node.JS, Express.JS, yahoo-stock-api <br/>
Front-end: React.JS, Chart.JS, axios to make API calls <br/>

# What's Next

Add advanced analytics that can be selected to view from a drop-down table


