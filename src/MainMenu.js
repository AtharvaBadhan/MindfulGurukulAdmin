import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';


import arrowDown from './icons/arrowDown.png';
import arrowUp from './icons/arrowUp.png';

const MainMenu = () => {
  const [expandedField, setExpandedField] = useState('');
  const [arrowUD1, setArrowUD1] = useState(true);
  const [arrowUD2, setArrowUD2] = useState(true);
  const [arrowUD3, setArrowUD3] = useState(true);
  const [arrowUD4, setArrowUD4] = useState(true);
  const [arrowUD5, setArrowUD5] = useState(true);

  const handleDropdownToggle = (field) => {
    if (expandedField === field) {
      setExpandedField('');
    } else {
      setExpandedField(field);
    }
  };

  const toggleArrow1 = () => {
    if (arrowUD1 === false) {
      setArrowUD1(true);
    }
    else {
      setArrowUD1(false);
    }
  }
  const toggleArrow2 = () => {
    if (arrowUD2 === false) {
      setArrowUD2(true);
    }
    else {
      setArrowUD2(false);
    }
  }
  const toggleArrow3 = () => {
    if (arrowUD3 === false) {
      setArrowUD3(true);
    }
    else {
      setArrowUD3(false);
    }
  }
  const toggleArrow4 = () => {
    if (arrowUD4 === false) {
      setArrowUD4(true);
    }
    else {
      setArrowUD4(false);
    }
  }
  const toggleArrow5 = () => {
    if (arrowUD5 === false) {
      setArrowUD5(true);
    }
    else {
      setArrowUD5(false);
    }
  }

  return (
    <nav className="side-navbar">
      <div className='logo-cont'>
        <div className="rounded-corners1">
          <img src={logo} className='logo1' alt="logo1" />
        </div>
        <div className='panel-name'>Skitii</div>
      </div>
      <div className="menu-list">
        <div className="menu-list-inner">
          <span>
            <span className="menu-item" onClick={() => handleDropdownToggle('dashboard')}>
              <div className='row1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="feather feather-activity ant-menu-item-icon"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#04266D"
                    strokeWidth="1.5"
                    d="M22 12L18 12 15 21 9 3 6 12 2 12"
                  ></path>
                </svg>
                <Link to="/DashboardPage" className='side-menu-text'> Dashboard</Link>
              </div>
            </span>
          </span>
          <span>
            <span className="menu-item" onClick={() => { handleDropdownToggle('userManagement'); toggleArrow1(); }}>
              <div className='row1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="feather feather-user ant-menu-item-icon"
                  viewBox="0 0 24 24"
                >
                  <g stroke="#04266D" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <div className='side-menu-text'>
                  User Management
                </div>
              </div>

              <div>
                {arrowUD1 ?
                  <img src={arrowDown} className='downImage' alt='downImage'></img>
                  :
                  <img src={arrowUp} className='downImage' alt='downImage'></img>
                }
              </div>
            </span>
            {expandedField === 'userManagement' && (
              <ul className="dropdown-list">
                {/* Dropdown content */}
                <Link to="/Registeredusers" className='side-menu-text'>Registered Users</Link>
                <Link to="/BlockUsers" className='side-menu-text'>Block Users</Link>
                <Link to="/ActiveUsers" className='side-menu-text'>Active Users</Link>
                <Link to="/InactiveUsers" className='side-menu-text'>Inactive Users</Link>
                <Link to="/DeleteUsers" className='side-menu-text'>Delete Users</Link>
              </ul>
            )}
          </span>
          <span>
            <span className="menu-item" onClick={() => handleDropdownToggle('AdminManagement')}>
              <div className='row1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="feather feather-book ant-menu-item-icon"
                  viewBox="0 0 24 24"
                >
                  <g stroke="#04266D" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>
                  </g>
                </svg>
                <Link to="/AdminManagementPage" className='side-menu-text'> Admin Management </Link>
              </div>
            </span>
          </span>
          <span>
            <span className="menu-item" onClick={() => { handleDropdownToggle('ContentManagement'); toggleArrow2(); }}>
              <div className='row1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="feather feather-book ant-menu-item-icon"
                  viewBox="0 0 24 24"
                >
                  <g stroke="#04266D" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>
                  </g>
                </svg>
                <div className='side-menu-text'>
                  Content Management
                </div>
              </div>
              <div>
                {arrowUD2 ?
                  <img src={arrowDown} className='downImage' alt='downImage'></img>
                  :
                  <img src={arrowUp} className='downImage' alt='downImage'></img>
                }
              </div>
            </span>
            {expandedField === 'ContentManagement' && (
              <ul className="dropdown-list">
                {/* Dropdown content */}
                <Link to="/Mindfulness" className='side-menu-text'>Mindfulness</Link>
                <Link to="/TestManagementPage" className='side-menu-text'>Live Gaming</Link>
                <Link to="/Splash" className='side-menu-text'>Splash</Link>
                <Link to="/Backgroundsoundmaster" className='side-menu-text'>Background Sound Master</Link>
                <Link to="/BadgesPage" className='side-menu-text'>Badges</Link>
              </ul>
            )}
          </span>
          <span>
            <span className="menu-item" onClick={() => { handleDropdownToggle('SubscriptionSettings'); toggleArrow3(); }}>
              <div className='row1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="feather feather-tag ant-menu-item-icon"
                  viewBox="0 0 24 24"
                >
                  <g stroke="#04266D" strokeWidth="2">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"></path>
                    <path d="M7 7L7 7"></path>
                  </g>
                </svg>
                <div className='side-menu-text'>
                  Subscription Settings
                </div>
              </div>
              <div>
                {arrowUD3 ?
                  <img src={arrowDown} className='downImage' alt='downImage'></img>
                  :
                  <img src={arrowUp} className='downImage' alt='downImage'></img>
                }
              </div>
            </span>
            {expandedField === 'SubscriptionSettings' && (
              <ul className="dropdown-list">
                <Link to="/AddSubscription" className='side-menu-text'>Add Subscription</Link>
                <Link to="/SubscriptionUserList" className='side-menu-text'>Subscription User List</Link>
              </ul>
            )}
          </span>
          <span>
            <span className="menu-item" onClick={() => { handleDropdownToggle('Globalsettings'); toggleArrow4(); }}>
              <div className='row1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="feather feather-settings ant-menu-item-icon"
                  viewBox="0 0 24 24"
                >
                  <g stroke="#04266D" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                  </g>
                </svg>
                <div className='side-menu-text'>
                  Global Settings
                </div>
              </div>
              <div>
                {arrowUD4 ?
                  <img src={arrowDown} className='downImage' alt='downImage'></img>
                  :
                  <img src={arrowUp} className='downImage' alt='downImage'></img>
                }
              </div>
            </span>
            {expandedField === 'Globalsettings' && (
              <ul className="dropdown-list">
                <Link to="/NotificationMaster" className='side-menu-text'>Notification Master</Link>
                <Link to="/StudyPatternMaster" className='side-menu-text'>Study Pattern Master</Link>
                <Link to="/Ecommerce" className='side-menu-text'>Ecommerce</Link>
                <Link to="/RewardsSetting" className='side-menu-text'>Rewards Setting</Link>
              </ul>
            )}
          </span>
          <span>
            <span className="menu-item" onClick={() => { handleDropdownToggle('Settings'); toggleArrow5(); }}>
              <div className='row1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="feather feather-settings ant-menu-item-icon"
                  viewBox="0 0 24 24"
                >
                  <g stroke="#04266D" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                  </g>
                </svg>
                <div className='side-menu-text'>
                  Settings
                </div>
              </div>
              <div>
                {arrowUD5 ?
                  <img src={arrowDown} className='downImage' alt='downImage'></img>
                  :
                  <img src={arrowUp} className='downImage' alt='downImage'></img>
                }
              </div>
            </span>
            {expandedField === 'Settings' && (
              <ul className="dropdown-list">
                <Link to="/PersonalInformationPage" className='side-menu-text'>Personal Information</Link>
                <Link to='/MyActivityPage' className='side-menu-text'>Add My Activity</Link>
                <Link to="/PrivacyPolicyPage" className='side-menu-text'>Privacy Policy</Link>
                <Link to="/TermsAndCondition" className='side-menu-text'>Terms And Conditions</Link>
                <Link to="/Referral" className='side-menu-text'>Referral</Link>
                <Link to="/NoiseSetting" className='side-menu-text'>Noise Settings</Link>
                <Link to="/HeartRateVariation" className='side-menu-text'>Heart Rate Variation</Link>

              </ul>
            )}
          </span>

          <span>
            <span className="menu-item" onClick={() => handleDropdownToggle('DownloadData')}>
              <div className='row1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="feather feather-settings ant-menu-item-icon"
                  viewBox="0 0 24 24"
                >
                  <g stroke="#04266D" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                  </g>
                </svg>
                <Link to="/Downloads" className='side-menu-text'>Downloads</Link>
              </div>
            </span>
          </span>
        </div>
      </div>
    </nav >
  );
};

export default MainMenu;
