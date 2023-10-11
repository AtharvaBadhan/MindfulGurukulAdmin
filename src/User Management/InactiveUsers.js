import React, { useState } from 'react';
import MainMenu from '../MainMenu';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
// import { ExcelFile, ExcelSheet, ExcelColumn } from 'react-data-export';
import Exportexcel from '../Components/ExportExcel';

const InactiveUsers = () => {
  // Existing state and functions for ActiveUsers component
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [users] = useState([
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "username": "johndoe",
      "email": "johndoe@example.com",
      "phone": "1234567890",
      "parentNo": "9876543210",
      "study": "Computer Science",
      "work": "Software Engineer",
      "dateOfBirth": "1990-01-01",
      "gender": "Male",
      "instituteName": "ABC University",
      "city": "New York",
      "state": "NY",
      "language": "English",
      "picture": "https://example.com/johndoe.jpg",
      "status": "Active",
      "dateOfRegistration": "2022-06-30",
      "dateOfCompletion": "2024-12-31",
      "pointsUsed": 100,
      "subscriptionPlan": "Premium", // New data for Subscription Plan
      "pointsPurchased": 500, // New data for Points Purchased
      "lastSubscriptionYear": "2023", // New data for Last Subscription Year
      "pointsCollected": 200 // New data for Points Collected
    },
    {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Smith",
      "username": "janesmith",
      "email": "janesmith@example.com",
      "phone": "9876543210",
      "parentNo": "1234567890",
      "study": "Physics",
      "work": "Researcher",
      "dateOfBirth": "1995-05-10",
      "gender": "Female",
      "instituteName": "XYZ University",
      "city": "San Francisco",
      "state": "CA",
      "language": "English",
      "picture": "https://example.com/janesmith.jpg",
      "status": "Active",
      "dateOfRegistration": "2021-06-30",
      "dateOfCompletion": "2023-06-30",
      "pointsUsed": 50,
      "subscriptionPlan": "Standard", // New data for Subscription Plan
      "pointsPurchased": 300, // New data for Points Purchased
      "lastSubscriptionYear": "2022", // New data for Last Subscription Year
      "pointsCollected": 100 // New data for Points Collected
    }
  ]);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
  const generateExcelData = () => {
    // Generate sample data for Excel
    const data = [
      { name: 'John Doe', age: 30, email: 'john@example.com' },
      { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      // Add more data objects here based on your data source
    ];
    return data;
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className='search1'>
            <h3 className='reg'> Inactive Users</h3>
            <input
              className='bar'
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search users"
            />
          </div>
          {/* Merge DateFilterPage component here */}
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
          {/* End of DateFilterPage component */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>User Name</th>
                  <th>Email ID</th>
                  <th>Phone No</th>
                  <th>Parent No</th>
                  <th>Study</th>
                  <th>Work</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Institute Name</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Language</th>
                  <th>Picture</th>
                  <th>Status</th>
                  <th>Date of Registration</th>
                  <th>Date of Completion</th>
                  <th>Points Used</th>
                  <th>Subscription Plan</th>
                  <th>Points Purchased</th>
                  <th>Last Subscription Year</th>
                  <th>Points Collected</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.parentNo}</td>
                    <td>{user.study}</td>
                    <td>{user.work}</td>
                    <td>{user.dateOfBirth}</td>
                    <td>{user.gender}</td>
                    <td>{user.instituteName}</td>
                    <td>{user.city}</td>
                    <td>{user.state}</td>
                    <td>{user.language}</td>
                    <td>{user.picture}</td>
                    <td>{user.status}</td>
                    <td>{user.dateOfRegistration}</td>
                    <td>{user.dateOfCompletion}</td>
                    <td>{user.pointsUsed}</td>
                    <td>{user.subscriptionPlan}</td> {/* Add Subscription Plan */}
                    <td>{user.pointsPurchased}</td> {/* Add Points Purchased */}
                    <td>{user.lastSubscriptionYear}</td> {/* Add Last Subscription Year */}
                    <td>{user.pointsCollected}</td> {/* Add Points Collected */}
                    <td>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <MainMenu />
        </div>
      </div>
    </div>
  );
};

export default InactiveUsers;
