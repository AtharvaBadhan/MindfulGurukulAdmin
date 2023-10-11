import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const BadgesPage = () => {
  const [badgeFile, setBadgeFile] = useState(null);
  const [timeFrame, setTimeFrame] = useState('');
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [badgeList, setBadgeList] = useState([]);

  const handleBadgeFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBadgeFile(file);
    }
  };

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedNumber(Number(event.target.value));
  };

  const handleAddBadge = () => {
    if (badgeFile && timeFrame) {
      const reader = new FileReader();
      reader.readAsDataURL(badgeFile);
      reader.onload = () => {
        const badge = {
          id: Date.now(),
          file: reader.result,
          timeFrame: timeFrame,
        };

        setBadgeList([...badgeList, badge]);
        setBadgeFile(null);
        setTimeFrame('');
        setSelectedNumber(1);
      };
    }
  };

  const handleDeleteBadge = (id) => {
    const updatedBadgeList = badgeList.filter((badge) => badge.id !== id);
    setBadgeList(updatedBadgeList);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className='search1'>
            <h1 className='reg'>Badges Page</h1>
          </div>
          <div className='container4'>
            <label htmlFor="badgeFile">Select Badge Image:</label>
            <input
              type="file"
              id="badgeFile"
              accept="image/*"
              onChange={handleBadgeFileChange}
            />

            <label htmlFor="timeFrame">Time Frame:</label>
            <input
              type="number"
              id="timeFrame"
              min="0"
              value={timeFrame}
              onChange={handleTimeFrameChange}
              placeholder="Enter time frame in days"
            />

            <label htmlFor="dropdown">Select a number:</label>
            <select
              id="dropdown"
              value={selectedNumber}
              onChange={handleDropdownChange}
            >
              {[...Array(10)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleAddBadge} className='button3'>
            Add Badge
          </button>

          <table className='table3'>
            <thead>
              <tr>
                <th>Badge</th>
                <th>Time Frame</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {badgeList.map((badge) => (
                <tr key={badge.id}>
                  <td>
                    <div className="circular-image">
                      <img src={badge.file} alt="Badge" />
                    </div>
                  </td>
                  <td>{badge.timeFrame} Day's</td>
                  <td>
                    <svg
                      onClick={() => handleDeleteBadge(badge.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BadgesPage;
