import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const PersonalInformationPage = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');
  const [registrationDate, setRegistrationDate] = useState('2023-07-01');
  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameChange = (event) => {
    if (!submitted) {
      setFirstName(event.target.value);
    }
  };

  const handleLastNameChange = (event) => {
    if (!submitted) {
      setLastName(event.target.value);
    }
  };

  const handleEmailChange = (event) => {
    if (!submitted) {
      setEmail(event.target.value);
    }
  };

  const handlePasswordChange = (event) => {
    if (!submitted) {
      setPassword(event.target.value);
    }
  };

  const handleRegistrationDateChange = (event) => {
    if (!submitted) {
      setRegistrationDate(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission logic here
    console.log('Form submitted');
    setSubmitted(true);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className='search1'>
            <h1 className='reg'>Personal Information</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='form1'>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                  disabled={submitted}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                  disabled={submitted}
                />
              </div>
              <div>
                <label htmlFor="email">Email ID:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  disabled={submitted}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required

                />
              </div>

              <div>
                <label htmlFor="registrationDate">Date of Registration:</label>
                <input
                  type="date"
                  id="registrationDate"
                  value={registrationDate}
                  onChange={handleRegistrationDateChange}
                  required
                  disabled={submitted}
                />
              </div>
            </div>
            <button type="submit" className='button5' disabled={submitted}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationPage;
