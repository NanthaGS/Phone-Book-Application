import React from 'react';
import Navbar from './Navbar';
import './Profile.css';
import img from './tom.webp';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {ImMail} from 'react-icons/im';
import {MdOutlineLocationOn} from 'react-icons/md';
import {BiSolidPhoneCall} from 'react-icons/bi';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
  icon: {
    margin: theme.spacing(1),
    cursor: 'pointer',
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <div className="back" style={{ backgroundColor: 'lightgrey' }}>
      <Navbar />
      <br></br>
      <div className="profile-container">
        <div className="profile-header">
          <h1 className="mainH">Profile</h1>
          <img src={img} alt="Profile Picture" className="profile-picture" />
        </div>
        <div className="profile-details">
          <div className="profile-info">
            <h2 className="profile-info-title">Personal Information</h2>
            <p className="profile-info-item">
              <span className="profile-info-label">First Name:</span>Nantha
            </p>
            <p className="">
              <span className="profile-info-label">Last Name:</span> G S
            </p>
            <p className="profile-info-item">
              <span className="profile-info-label"><ImMail></ImMail>:</span> nanthadgl2003@gmail.com
            </p>
            <p className="profile-info-item">
              <span className="profile-info-label"><BiSolidPhoneCall></BiSolidPhoneCall>:</span> 9344735276
            </p>
            <p className="profile-info-item">
              <span className="profile-info-label"><MdOutlineLocationOn></MdOutlineLocationOn>:</span> Coimbatore, India
            </p>
          </div>
          <div className="profile-actions">
            <button className="search-button">Edit Profile</button>
            <button className="search-button">Change Password</button>
          </div>
        </div>
        <div className="profile-bio">
          <h2 className="profile-bio-title">About Me</h2>
          <p className="profile-bio-content">
            I am an entrepreneur with a passion for innovation and creating impactful solutions. With a strong drive to make
            a difference, I constantly seek out opportunities to challenge the status quo and turn ideas into reality. As an
            entrepreneur, I thrive on the excitement of building and growing businesses from the ground up. I am driven by a
            relentless pursuit of success and the desire to create value for customers and stakeholders alike. With a keen eye
            for identifying market gaps and a strategic mindset, I am constantly exploring new avenues and taking calculated
            risks to drive growth and achieve sustainable results. I believe that entrepreneurship is not just about financial
            success, but also about making a positive impact on society and leaving a lasting legacy. Through my entrepreneurial
            journey, I aim to inspire and empower others to pursue their dreams and create a better future.
          </p>
        </div>
      </div>
      <footer className={classes.footer}>
        <InstagramIcon className={classes.icon} />
        <FacebookIcon className={classes.icon} />
        <TwitterIcon className={classes.icon} />
        <LinkedInIcon className={classes.icon} />
      </footer>
    </div>
  );
};

export default Profile;
