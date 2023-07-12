import React from 'react';
import './Profile.css';
import Navbar from './Navbar';
const Profile = () => {
  return (
    <div>
      <Navbar/>
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-details">
        <div className="profile-avatar">
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/230710085438-tom-cruise-0703-restricted.jpg?c=16x9&q=h_720,w_1280,c_fill" alt="Profile" />
        </div>
        <div className="profile-info">
          <p>Name: Nahsik</p>
          <p>Email: nahsik@hotmail.com</p>
          <p>Phone: 98909-23863</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
