import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddSubAdminModal = ({ isOpen, onClose, addSubAdmin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subAdmin = {
      firstName,
      lastName,
      username,
      password,
      email,
      profilePicture
    };

    addSubAdmin(subAdmin);

    setFirstName('');
    setLastName('');
    setUsername('');
    setPassword('');
    setEmail('');
    setProfilePicture(null);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <div>
      {isOpen && (
        <div>
          <div className="add-sub-admin-modal" onClick={onClose}></div>
          <form className="add-sub-admin-form1" onSubmit={handleSubmit}>
            <h2 >Add Sub Admin</h2>
            <div className='loginbox'>
              <div className="file-sec">
                <label>Profile Picture:
                  <input type="file" onChange={handleProfilePictureChange} required />
                </label>
              </div>
              <div className='fullname'>
                <label>First Name:
                  <input
                    type="text"
                    placeholder='joe'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  /></label>
                <br />
                <label>Last Name:
                  <input
                    type="text"
                    placeholder='mama'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  /></label>
              </div>
              <br />

              <div className='user-pass'>
                <label>Username:
                  <input
                    type="text"
                    placeholder='joemama'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </label>
                <br />
                <label>Password:
                  <input
                    type="password"
                    placeholder='*******'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
              </div>
            </div>
            <div className='email'>
              <label>Email: </label>
              <input
                type="email"
                placeholder='joemama@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <br />
            <button type="submit" className='add'>Add</button>
            <div className="link">
              <Link to="/EditAccess">Edit Access</Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddSubAdminModal;