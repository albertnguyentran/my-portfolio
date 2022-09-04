import React from 'react'
import {Chart as ChartJS, registerables} from 'chart.js'
import {Line} from 'react-chartjs-2'

ChartJS.register(...registerables)

const chartStyle = {
    color: "green"
}

export const LineChart = ({item}) => {
    return (
        <>
            <Line
                data={{
                    labels: ['Red', 'Blue'],
                    datasets: [{
                        data: [4, 3]
                    }]
                }}

                height={10}
                width={10}
                options={{
                    maintainAspectRatio: true
                }}
            />
        </>
    )
}



