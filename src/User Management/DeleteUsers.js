import React, { useState } from 'react';
import MainMenu from '../MainMenu';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';
import Exportexcel from '../Components/ExportExcel';

const ActiveUsers = () => {
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
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [deletedUsers, setDeletedUsers] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const openAddModal = (user) => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleBlockUser = (user) => {
    setBlockedUsers((prevBlockedUsers) => [...prevBlockedUsers, user]);
    setDeletedUsers((prevDeletedUsers) => prevDeletedUsers.filter(u => u.id !== user.id));
  };

  const handleDeleteUser = (user) => {
    setDeletedUsers((prevDeletedUsers) => [...prevDeletedUsers, user]);
    setBlockedUsers((prevBlockedUsers) => prevBlockedUsers.filter(u => u.id !== user.id));
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
  const handleSubmit = () => {
    // Perform the user deletion logic here
    // For example, you can call an API to delete the user from the database
    console.log('User has been deleted');
    // Close the delete modal after deletion
    closeAddModal();
  };
  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className='search1'>
            <h3 className='reg'> Delete Users</h3>
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
                      <svg onClick={openAddModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <MainMenu />
          <div>
            {isAddModalOpen && (
              <div>
                <div className="add-sub-admin-modal" onClick={closeAddModal}></div>
                <div className="add-sub-admin-form1" onSubmit={handleSubmit}>
                  <h2>Delete User</h2>
                  <p> Do You want to delete the User?</p>
                  <br />
                  <br />

                  <button type="submit" className='submit'>Delete</button>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;

