import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import api from '../lib/api'

import './PieChart.css'


export default class PieChart extends React.Component {

    state = {
        labels: [],

        datasets: [{

            data: [],

            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#8C41CA',
                '#17864B'
            ],

            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#8C41CA',
                '#17864B'
            ]
        }]
    };

    async componentDidMount() {


        const employees = await api.get('/employees')

        let stateDummy = { ...this.state }
        stateDummy.labels = employees.data.map(employee => `${employee.name} ${employee.surname}`)
        stateDummy.datasets[0].data = employees.data.map(employee => employee.participation)

        this.setState(stateDummy)
    }


    render() {
        return (
            <div className="chart-container">

                <Doughnut

                    data={this.state}

                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                    }}

                    legend={{
                        position: "right",
                        labels: {
                            fontSize:20
                        }
                    }}

                    
                />
            </div>
        )
    }
}

;