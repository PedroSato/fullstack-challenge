import React from 'react';
import api from '../lib/api';
import './EmployeeTable.css'

export default class EmployeeTable extends React.Component {

    state = {
        data: []
    }

    async componentDidMount() {

        this.setState(await api.get('/employees'))
        console.log(this.state.data)



    }



    render() {




        const totalPart = this.state.data.reduce((prev, cur) => {
            return prev + cur.participation;
        }, 0);

        // const percentagePart = this.state.data.map((employee) => {
        //     return (employee.participation / totalPart * 100).toFixed(2)
        // })






        let count = 1


        return (
            <table className="employee-table">
                <tbody>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th className="th-part">Participação</th>
                    </tr>


                    {
                        this.state.data.map((employee) =>
                            <tr className="trow" key={employee._id}>
                                <td> {count++} </td>
                                <td>  {employee.name} </td>
                                <td> {employee.surname} </td>
                                <td className="td-part"> {((employee.participation / totalPart) * 100).toFixed(2)}% </td>
                            </tr>
                        )
                    }

                </tbody>

            </table>


        )
    }
}