import React from 'react';
import './App.css'

import Header from './components/Header'
import ContentTitle from './components/ContentTitle'
import EmployeeTable from './components/EmployeeTable';
import PieChart from './components/PieChart'
import FlexContainer from './components/FlexContainer'
function App() {
  return (
    <div className="App">
      <Header />
      <ContentTitle title="DADOS" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <FlexContainer />

    </div>
  );
}

export default App;
