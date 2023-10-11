import React, { useEffect, useState } from 'react';
import MainMenu from '../MainMenu';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';
import TableRows from './CreateTable';
import Exportexcel from '../Components/ExportExcel';


const Downloads = () => {


  // Existing state and functions for ActiveUsers component
  const [searchQuery, setSearchQuery] = useState('');
  const [users] = useState([
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const [tableData, setTableData] = useState([]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const filterData = () => {
    if (startDate && endDate) {
      // Filter data only if both startDate and endDate are selected
      const startDateString = startDate.toISOString().slice(0, 10); // Format: "yyyy-mm-dd"
      const endDateString = endDate.toISOString().slice(0, 10); // Format: "yyyy-mm-dd"

      // Convert the startDate and endDate strings to Date objects
      const startDateObj = new Date(startDateString);
      const endDateObj = new Date(endDateString);

      // Filter the user array based on the date conditions
      const filteredUsers = users.filter((user) => {
        const registrationDateObj = new Date(user.dateOfRegistration);
        const completionDateObj = new Date(user.dateOfCompletion);

        return (
          registrationDateObj >= startDateObj &&
          completionDateObj <= endDateObj
        );
      });

      setFilteredUsers(filteredUsers);
    } else {
      // If either startDate or endDate is not selected, show all users
      setFilteredUsers(users);
    }
  };
  const dropdownOptions = [
    'Active user list',
    'Inactive user list',
    'Register user list',
    'Paid user list',
    'Blocked user list',
    'Compliments user list',
    'Live Games list',
    'Direct tic-tock list',
    'Schedule tik tock list',
    'Study pattern user list',
    'Institute wise user list',
    'State user list',
    'City user list',
    'Time slot user list',
    'Sleep activity user list',
    'Mindfulness activity user list',
    'Mood-wise audio user list',
    'Mood selected list',
    'Change in mood user list',
    'Wallet user list',
    'Badges wise user list',
    'Streak user list',
    'Age Groupwise user list',
    'Study / work user list',
    'Paying extra for coins user list',
    'Mindful Gurukul store user list',
    'Sending referrals user list',
    'Pause buttons user list',
    'TikTok background sounds user list',
    'Aborting task user list',
    'Aborting mindfulness audios user list',
    'Incomplete planned tik tock user list',
    'Fully Incomplete planned user list',
    'Completed tik tock task user list',
    'Completed audio of mindfulness audios user list',
    "Individual user journey list through search, tik tock, compliments, live section, noise distraction, Heart rate variation, Purchase journey, task completed / uncompleted, time of the day 1. using app for tik tock, break time, average total time of the week, stretching time after completed tik tocks, 2. compliment, 3. live section, or 4. other activities.",
    'User list of people in a day according to time engaged on tik tock, compliments, live section, or activities.',
    'High focused levels user list',
    'High anxiety levels user list',
    'High distraction levels user list',
    'High productivity user list',
    'List of users group',
    'Admins for group creators',
    'Streak users',
  ];

  const [selectedOption, setSelectedOption] = useState('---Select---');
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className='search1'>
            <h3 className='reg'> Download's</h3>
            <input
              className='bar'
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search users"
            />
          </div>
          <div className="date-filter-page">
            <div>
              <label>Enter Start Date:</label>
              <DatePicker selected={startDate} onChange={handleStartDateChange} dateFormat='yyyy-MM-dd' />
            </div>
            <div>
              <label>Enter End Date:</label>
              <DatePicker selected={endDate} onChange={handleEndDateChange} dateFormat='yyyy-MM-dd' />
            </div>
            <button onClick={filterData}>Filter Data</button>
            <Exportexcel/>
          </div>
          <div className="dropdown-container">
            <label>Select an option:</label>
            <select
              className="id1"
              value={selectedOption}
              onChange={(e) => handleDropdownChange(e)} // Call the function to handle the dropdown change
            >
              {dropdownOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className='table-container2'>
            <table>
              <TableRows prop={selectedOption} />
              <tbody>
                {tableData.map((user, index) => (
                  <tr key={index}>

                    <td>{user.dateOfJoining}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.userName}</td>
                    <td>{user.phoneNo}</td>
                    <td>{user.parentPhoneNo}</td>
                    <td>{user.emailID}</td>
                    <td>{user.instituteName}</td>
                    <td>{user.language}</td>
                    <td>{user.state}</td>
                    <td>{user.city}</td>
                    <td>{user.ageBelow18}</td>
                    <td>{user.ageAbove18}</td>
                    <td>{user.gender}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
