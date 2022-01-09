import React, { useState, useEffect } from 'react'
import { Chart, getElementAtEvent } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineController, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { epochSecsToDate } from "./utils/helpers";

ChartJS.register(CategoryScale, LinearScale, LineController, LineElement, PointElement, Title, Tooltip, Legend);

export default function NTransPerBlock() {

    const [dat, setDat] = useState({
        labels: [],
        datasets: [
            {
                label: "Average Transactions Per Block",
                data: [],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                pointRadius: 0,
                borderWidth: 1,
                tension: 0.4
            },
        ]
    })

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/onlyphantom/blockchain/main/etc/n-transactions-per-block.json")
            .then(res => res.json())
            .then(data => {
                setDat(prev => {
                    return {
                        ...prev,
                        labels: data.values.map(d => epochSecsToDate(d.x)),
                        datasets: [
                            {
                                ...prev.datasets[0],
                                data: data.values.map(d => d.y)
                            }
                        ]
                    }
                })
            })
    }, [])

    return (
        <div className="chartjs-container">
            <Chart
                type='line' data={dat}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            // position: 'left',
                            text: 'Average Transactions Per Block',
                            align: 'start',
                        }
                    }
                }} />
        </div>
    )
}
