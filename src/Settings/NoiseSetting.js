import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const NoiseSettings = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [threshold, setThreshold] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleThresholdChange = (event) => {
    setThreshold(event.target.value);
  };

  const handleSave = () => {
    // Perform save logic here
    console.log('Time:', selectedTime);
    console.log('Threshold:', threshold);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className="search1">
            <h1 className='reg'>Noise Settings</h1>
          </div>

          <div className="setting-container">
            <div className="setting-option">
              <label htmlFor="time">Time:</label>
              <select className='id' id="time" value={selectedTime} onChange={handleTimeChange}>
                <option value="">Select Time</option>
                <option value="1">1 min</option>
                <option value="2">2 min</option>
                <option value="3">3 min</option>
              </select>
            </div>

            <div className="setting-option">
              <label htmlFor="threshold">Threshold:</label>
              <input
                type="number"
                id="threshold"
                value={threshold}
                onChange={handleThresholdChange}
              />
            </div>
            <br />
          </div>
            <div>
              <button className='button6' onClick={handleSave}>Save</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NoiseSettings;
