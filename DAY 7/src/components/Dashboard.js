import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import {CgPhone} from 'react-icons/cg';
import {BiSolidLogIn,BiSolidLogOut} from 'react-icons/bi';

const Dashboard = () => {
  return (
    <div className="im">
    <div className="home-page">
      <nav className="navba">
        <div className="logo">
            <CgPhone></CgPhone>
        </div>
        <div className="login-signup">
          <Link to="/login">
            <BiSolidLogIn></BiSolidLogIn>
            </Link>
          <Link to="/signup">
            <BiSolidLogOut></BiSolidLogOut>
          </Link>
        </div>
      </nav>
      <div className="quotes">
        <h2>Discover the Power of Connectivity</h2>
        <p>Stay connected with your loved ones.</p>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
