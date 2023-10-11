import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const PerformanceSettings = () => {
  const [averageImprovement, setAverageImprovement] = useState('');
  const [averageTotalFrame, setAverageTotalFrame] = useState('');
  const [numberOfBrakes, setNumberOfBrakes] = useState('');

  const handleAverageImprovementChange = (event) => {
    setAverageImprovement(event.target.value);
  };

  const handleAverageTotalFrameChange = (event) => {
    setAverageTotalFrame(event.target.value);
  };

  const handleNumberOfBrakesChange = (event) => {
    setNumberOfBrakes(event.target.value);
  };

  const handleSave = () => {
    // Perform save logic here
    console.log('Average Improvement:', averageImprovement);
    console.log('Average Total Frame:', averageTotalFrame);
    console.log('Number Of Brakes:', numberOfBrakes);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className="search1">
            <h1 className='reg'>Study Pattern Master</h1>
            <button onClick={handleSave}>
              Save
            </button>
          </div>
          <div className="setting-container">
            <div className="setting-option">
              <label htmlFor="averageImprovement">Average Improvement:</label>
              <select className='id1'
                id="averageImprovement"
                value={averageImprovement}
                onChange={handleAverageImprovementChange}
              >
                <option value="">Select Average Improvement</option>
                <option value="10%">10%</option>
                <option value="20%">20%</option>
                <option value="30%">30%</option>
              </select>
            </div>

            <div className="setting-option">
              <label htmlFor="averageTotalFrame">Average Total Frame:</label>
              <select className='id1'
                id="averageTotalFrame"
                value={averageTotalFrame}
                onChange={handleAverageTotalFrameChange}
              >
                <option value="">Select Average Total Frame</option>
                <option value="5%">5%</option>
                <option value="10%">10%</option>
                <option value="15%">15%</option>
                <option value="20%">20%</option>
                <option value="25%">25%</option>
              </select>
            </div>

            <div className="setting-option">
              <label htmlFor="numberOfBrakes">Number Of Brakes:</label>
              <select className='id1'
                id="numberOfBrakes"
                value={numberOfBrakes}
                onChange={handleNumberOfBrakesChange}
              >
                <option value="">Select Number Of Brakes</option>
                <option value="5%">5%</option>
                <option value="10%">10%</option>
                <option value="15%">15%</option>
                <option value="20%">20%</option>
                <option value="25%">25%</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSettings;
