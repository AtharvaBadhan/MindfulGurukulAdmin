import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const NotificationMaster = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isAllUsers, setIsAllUsers] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAllUsersChange = (event) => {
    setIsAllUsers(event.target.checked);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = () => {
    // Perform submission logic here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('All Users:', isAllUsers);
    console.log('Type:', selectedType);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className="search1">
            <h1 className='reg'>Notification Master</h1>
          </div>
          <div className="notification-form">
            <div className='notification-form1' >
              <div className="form-group">
                <label htmlFor="title">Add Title:</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Add Description:</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                ></textarea>
              </div>

              <div className="form-group">
                <label>
                  <div className='check-box'>
                    <input
                      type="checkbox"
                      checked={isAllUsers}
                      onChange={handleAllUsersChange}
                    />
                    <div>
                      All Users
                    </div>
                  </div>
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="type">Type:</label>
                <select className='id' id="type" value={selectedType} onChange={handleTypeChange}>
                  <option value="">Select Type</option>
                  <option value="Splash">Splash</option>
                  <option value="Live Gaming">Live Gaming</option>
                  <option value="Streak">Streak</option>
                  <option value="Tik tok">Tik tok</option>
                </select>
              </div>

              <button className="" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationMaster;
