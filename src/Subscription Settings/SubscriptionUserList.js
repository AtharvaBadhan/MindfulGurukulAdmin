import React, { useState } from 'react';
import MainMenu from '../MainMenu';
import '../App.css';

const SubscriptionUserList = () => {
  const [activeSubscriptions, setActiveSubscriptions] = useState([
    {
      userName: 'John Doe',
      email: 'john@example.com',
      packageName: 'Premium',
      duration: '1 month',
      status: 'Active',
      phoneNumber: '1234567890',
      expiredOn: '2023-07-31'
    },
    {
      userName: 'Jane Smith',
      email: 'jane@example.com',
      packageName: 'Basic',
      duration: '3 months',
      status: 'Active',
      phoneNumber: '9876543210',
      expiredOn: '2023-09-30'
    }
  ]);
  const [cancelledSubscriptions, setCancelledSubscriptions] = useState([
    {
      userName: 'John Doe',
      email: 'john@example.com',
      packageName: 'Premium',
      duration: '1 month',
      status: 'Active',
      phoneNumber: '1234567890',
      expiredOn: '2023-07-31'
    },
    {
      userName: 'Jane Smith',
      email: 'jane@example.com',
      packageName: 'Basic',
      duration: '3 months',
      status: 'Active',
      phoneNumber: '9876543210',
      expiredOn: '2023-09-30'
    }
  ]);
  const [expiredSubscriptions, setExpiredSubscriptions] = useState([
    {
      userName: 'John Doe',
      email: 'john@example.com',
      packageName: 'Premium',
      duration: '1 month',
      status: 'Active',
      phoneNumber: '1234567890',
      expiredOn: '2023-07-31'
    },
    {
      userName: 'Jane Smith',
      email: 'jane@example.com',
      packageName: 'Basic',
      duration: '3 months',
      status: 'Active',
      phoneNumber: '9876543210',
      expiredOn: '2023-09-30'
    }
  ]);
  const [subscriptionRequests, setSubscriptionRequests] = useState([
    {
      userName: 'John Doe',
      email: 'john@example.com',
      packageName: 'Premium',
      duration: '1 month',
      status: 'Active',
      phoneNumber: '1234567890',
      expiredOn: '2023-07-31'
    },
    {
      userName: 'Jane Smith',
      email: 'jane@example.com',
      packageName: 'Basic',
      duration: '3 months',
      status: 'Active',
      phoneNumber: '9876543210',
      expiredOn: '2023-09-30'
    }
  ]);
  const [displayOption, setDisplayOption] = useState('active');

  const handleDisplayOptionChange = (status) => {
    setDisplayOption(status);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className="search1">
            <h1 className='reg'>List User Subscription</h1>
          </div>
          <div className='userbuttoncontainer1'>
            <div
              className={displayOption === 'active' ? 'active-option' : 'option'}
              onClick={() => handleDisplayOptionChange('active')}
            >
              Active Subscription
            </div>
            <div
              className={displayOption === 'request' ? 'active-option' : 'option'}
              onClick={() => handleDisplayOptionChange('request')}
            >
              Subscription Request
            </div>
            <div
              className={displayOption === 'cancelled' ? 'active-option' : 'option'}
              onClick={() => handleDisplayOptionChange('cancelled')}
            >
              Cancelled
            </div>
            <div
              className={displayOption === 'expired' ? 'active-option' : 'option'}
              onClick={() => handleDisplayOptionChange('expired')}
            >
              Expired
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Package Name</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Phone Number</th>
                <th>Expired On</th>
                {displayOption === 'request' && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {displayOption === 'active' &&
                activeSubscriptions.map((subscription, index) => (
                  <tr key={index}>
                    <td>{subscription.userName}</td>
                    <td>{subscription.email}</td>
                    <td>{subscription.packageName}</td>
                    <td>{subscription.duration}</td>
                    <td>{subscription.status}</td>
                    <td>{subscription.phoneNumber}</td>
                    <td>{subscription.expiredOn}</td>
                  </tr>
                ))}
              {displayOption === 'request' &&
                subscriptionRequests.map((subscription, index) => (
                  <tr key={index}>
                    <td>{subscription.userName}</td>
                    <td>{subscription.email}</td>
                    <td>{subscription.packageName}</td>
                    <td>{subscription.duration}</td>
                    <td>{subscription.status}</td>
                    <td>{subscription.phoneNumber}</td>
                    <td>{subscription.expiredOn}</td>
                    <td>
                      <div className={`slider ${subscription.status === 'Active' ? 'active' : 'inactive'}`}>
                        <div className="slider-thumb"></div>
                      </div>
                    </td>
                  </tr>
                ))}
              {displayOption === 'cancelled' &&
                cancelledSubscriptions.map((subscription, index) => (
                  <tr key={index}>
                    <td>{subscription.userName}</td>
                    <td>{subscription.email}</td>
                    <td>{subscription.packageName}</td>
                    <td>{subscription.duration}</td>
                    <td>{subscription.status}</td>
                    <td>{subscription.phoneNumber}</td>
                    <td>{subscription.expiredOn}</td>
                  </tr>
                ))}
              {displayOption === 'expired' &&
                expiredSubscriptions.map((subscription, index) => (
                  <tr key={index}>
                    <td>{subscription.userName}</td>
                    <td>{subscription.email}</td>
                    <td>{subscription.packageName}</td>
                    <td>{subscription.duration}</td>
                    <td>{subscription.status}</td>
                    <td>{subscription.phoneNumber}</td>
                    <td>{subscription.expiredOn}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionUserList;

