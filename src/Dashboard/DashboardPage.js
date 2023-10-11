import React, { useState } from 'react';
import '../App.css';
import AnalyticCard from './AnalyticCard';
import MainMenu from '../MainMenu';



const DashboardPage = () => {
  const [setSelectedMenu] = useState(' ');

  const handleMenuChange = (event) => {
    setSelectedMenu(event.target.value);
  };

  return (
 <div className="dashboard-container">
      <MainMenu/>
      <AnalyticCard/>

    </div> 
  )
};

export default DashboardPage;
