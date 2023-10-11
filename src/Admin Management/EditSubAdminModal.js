import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EditSubAdminModal = ({ isOpen, onClose, subAdmin, editSubAdmin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  // useEffect(() => {
  //   if (subAdmin) {
  //     setFirstName(subAdmin.firstName);
  //     setLastName(subAdmin.lastName);
  //     setUsername(subAdmin.username);
  //     setPassword(subAdmin.password);
  //     setEmail(subAdmin.email);
  //     // Set the existing profile picture if available
  //     setProfilePicture(subAdmin.profilePicture);
  //   }
  // }, [subAdmin]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedSubAdmin = {
      ...subAdmin,
      firstName,
      lastName,
      username,
      password,
      email,
      profilePicture
    };

    editSubAdmin(updatedSubAdmin);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <div>
      {isOpen && (
        <div>
          <div className='add-sub-admin-modal' onClick={onClose}></div>
          <form className='add-sub-admin-form' onSubmit={handleSubmit}>
            <h2>Edit Sub Admin</h2>
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
                  />
                </label>
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
              <br />
              <div className='email'>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder='joemama@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>
            </div>
            <br />
            <button type="submit" className='add'>Save</button>
            <div className='link'>
              <Link to='/EditAccess'>Edit Access</Link>
            </div>
          </form>
        </div >
      )}
    </div >
  );
};

export default EditSubAdminModal;
