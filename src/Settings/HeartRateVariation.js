import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const HeartRateVariation = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [threshold, setThreshold] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleThresholdChange = (event) => {
    const value = event.target.value;
    // Remove non-numeric characters from the input
    const numericValue = value.replace(/\D/g, '');
    setThreshold(numericValue);
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
            <h1 className='reg'>Heart Rate Variation</h1>
          </div>
          <div className="setting-container">
            <div className="setting-option">
              <label htmlFor="time">Time:</label>
              <select className='id' id="time" value={selectedTime} onChange={handleTimeChange}>
                <option value="">Select Time</option>
                <option value="10">1 Min</option>
                <option value="20">2 Min</option>
                <option value="30">3 Min</option>
                <option value="30">4 Min</option>
              </select>
            </div>

            <div className="setting-option">
              <label htmlFor="threshold">Threshold (BPM):</label>
              <input
                type="text"
                id="threshold"
                value={threshold}
                onChange={handleThresholdChange}
              />
            </div>

            <button className="button6" onClick={handleSave}>
              Save
            </button>
          </div>
          <div className="display-table">
            <table>
              <thead>
                <tr>
                  <th>Low</th>
                  <th>Medium</th>
                  <th>High</th>
                </tr>
              </thead>
              <tbody>
                <td>50 BPM</td>
                <td>60 BPM</td>
                <td>70 BPM</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartRateVariation;
