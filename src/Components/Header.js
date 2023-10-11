import React from 'react';
import logo from '../logo.png';
// import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      {/* <div className='logo-cont'>
        <div className="rounded-corners1">
          <img src={logo} className='logo1' alt="logo1" />
        </div>
        <div className='panel-name'>Skitii</div>
      </div> */}
      <div className="logout">
        <Link to="/LoginPage">Logout</Link>
      </div>
    </header>
  );
};

export default Header;
