import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import MainMenu from '../MainMenu';

const EditAccess = () => {
  const options = [
    { name: 'Dashboard', id: 'dashboard' },
    { name: 'User management', id: 'user-management' },
    { name: 'Admin management', id: 'admin-management' },
    { name: 'Content Management', id: 'content-management' },
    { name: 'Subscription settings', id: 'subscription-settings' },
    { name: 'Login settings', id: 'login-settings' },
    { name: 'Global settings', id: 'global-settings' },
    { name: 'Settings', id: 'settings' },
    { name: 'Reward settings', id: 'reward-settings' },
    { name: 'Download data', id: 'download-data' }
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (optionId) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(optionId)) {
        return prevSelectedOptions.filter((id) => id !== optionId);
      } else {
        return [...prevSelectedOptions, optionId];
      }
    });
  };

  const handleSave = () => {
    // Perform save operation with selectedOptions
    console.log('Saved options:', selectedOptions);

  };

  const renderHeader = () => (
    <thead>
      <tr>
        <th>Options</th>
        <th>Access All</th>
        <th>Edit/View</th>
        <th>13 to 18</th>
        <th>18 Onwards</th>
        <th>None</th>
      </tr>
    </thead>
  );

  const renderRows = () =>
    options.map((option) => (
      <tr key={option.id}>
        <td>{option.name}</td>
        <td>
          <Form.Check
            type="radio"
            name={option.id}
            checked={selectedOptions.includes(option.id)}
            onChange={() => handleCheckboxChange(option.id)}
          />
        </td>
        <td>
          <Form.Check
            type="radio"
            name={option.id}
            checked={selectedOptions.includes(option.id)}
            onChange={() => handleCheckboxChange(option.id)}
          />
        </td>
        <td>
          <Form.Check
            type="radio"
            name={option.id}
            checked={selectedOptions.includes(option.id)}
            onChange={() => handleCheckboxChange(option.id)}
          />
        </td>
        <td>
          <Form.Check
            type="radio"
            name={option.id}
            checked={selectedOptions.includes(option.id)}
            onChange={() => handleCheckboxChange(option.id)}
          />
        </td>
        <td>
          <Form.Check
            type="radio"
            name={option.id}
            checked={selectedOptions.includes(option.id)}
            onChange={() => handleCheckboxChange(option.id)}
          />
        </td>
      </tr>
    ));

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className='edittable'>
            <Table striped bordered hover>
              {renderHeader()}
              <tbody>{renderRows()}</tbody>
            </Table>
            <div className='edit-save-cont'>
              <Button className='button1' variant="primary" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccess;
