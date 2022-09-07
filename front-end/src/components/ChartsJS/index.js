import React from 'react'
import {Chart as ChartJS, registerables} from 'chart.js'
import {Line} from 'react-chartjs-2'

ChartJS.register(...registerables)

const chartStyle = {
    color: "green"
}


export function LineChart (props) {

    return (
        <div>
            <Line
                data={{
                    labels: [props.item.lastmonth, '-4month','-3month','-2month','-1month', props.item.currentmonth],
                    datasets: [{
                        label: props.item.ticker,
                        data: [props.item.oneprice, props.item.twoprice, props.item.threeprice, props.item.fourprice, props.item.fiveprice, props.item.sixprice],
                        backgroundColor: "#084de0",
                        borderColor: "#084de0"
                    }]
                }}

                height={300}
                width={600}
                options={{
                    scales: {
                        color: "#000000",
                        y: {
                            grid: {
                                color: "#B8E2F2"
                            },

                            ticks: {
                                color: "#000000",
                                
                                min: 0,
                                // Include a dollar sign in the ticks
                                callback: function(value, index, ticks) {
                                    return '$' + value;                                
                                }
                            }
                        },
                        
                        x: {
                            grid: {
                                color: "#B8E2F2"
                            },

                            ticks: {
                                color: "000000"
                            }
                        },
                    }
                }}
            />

        </div>
    )
}




