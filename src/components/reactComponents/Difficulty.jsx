import React, { useState, useEffect, useRef } from "react";
import { Chart, getElementAtEvent } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineController, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineController, LineElement, PointElement, Title, Tooltip, Legend);

const epochSecsToDate = (epochSecs) => {
    let date = new Date(0);
    date.setUTCSeconds(epochSecs);
    return date.toLocaleDateString()
}

export default function Difficulty() {

    const chartRef = useRef();

    const [dat, setDat] = useState({
        labels: [],
        datasets: [
            {
                label: "Mining Difficulty",
                data: [],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                pointRadius: 1,
            },
        ]
    })

    const onClick = (event) => {
        console.log(getElementAtEvent(chartRef.current, event));
    }

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/onlyphantom/blockchain/main/etc/difficulty.json")
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
                type='line' data={dat} ref={chartRef}
                onClick={onClick}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            // position: 'left',
                            text: 'Bitcoin Mining Difficulty',
                            align: 'start',
                        }
                    }
                }} />
        </div>
    );
}
