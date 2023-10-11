import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const AddActivityPage = () => {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [activityList, setActivityList] = useState([]);

  const activityOptions = ['Tick tok', 'Sleep', 'Mindfulness', 'Exercise'];

  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value);
  };

  const handleAddActivity = () => {
    if (selectedActivity) {
      const newActivity = {
        type: selectedActivity,
      };

      setActivityList([...activityList, newActivity]);
      setSelectedActivity('');
    }
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className="search1">
            <h1 className='reg'>Add My Activity List</h1>
          </div>

          <div className="container3">
            <h2>Add My Activity</h2>
            <select className='id' value={selectedActivity} onChange={handleActivityChange}>
              <option value="">Select Activity</option>
              {activityOptions.map((activity, index) => (
                <option key={index} value={activity}>
                  {activity}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button className='button4' onClick={handleAddActivity}>Add</button>
          </div>


          <div className='myactivitylist'>
            <h2>My Activity List</h2>
          </div>
          <table className='table4'>
            <thead>
              <tr>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {activityList.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddActivityPage;
