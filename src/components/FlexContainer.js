import React from 'react';
import EmployeeTable from './EmployeeTable';
import PieChart from './PieChart';
import './FlexContainer.css'
// import { Container } from './styles';

export default function components() {
    return (
        <div className="flex-container">
            <EmployeeTable />
            <PieChart />
        </div>
    );
}
