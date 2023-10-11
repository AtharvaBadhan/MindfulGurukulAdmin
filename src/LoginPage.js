import React, { useState } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  function handleLogin() {

    console.log('Email Id:', username);
    console.log('Password:', password);

  }

  return (
    <div className="login-page">
      <header className="header1">
        <div class="rounded-corners">
          <img src={logo} alt="company_logo" className="logo" />
        </div>
        <h1 className="company-name">Skitii Admin Panel</h1>
      </header>
      <div className="container1">
        <h2 className="login-title">Login To Admin</h2>
        <form>
          <div className="form-group">
            <label>Email ID:</label>
            <input className='small'
              placeholder='Abc@gmail.com'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input className='small'
              placeholder='Enter Your Password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/DashboardPage">
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;





