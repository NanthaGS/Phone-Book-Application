import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { CgPhone } from 'react-icons/cg';
import { BiSolidLogIn, BiSolidLogOut } from 'react-icons/bi';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed', 
    left: 0,
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
  },
  icon: {
    margin: theme.spacing(1),
    cursor: 'pointer',
    color: '#0077B5', 
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className="im">
      <div className="home-page">
        <nav className="navba">
          <div className="logo">
            <CgPhone></CgPhone>...PEase
            {/* <h5>PEase</h5> */}
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
      <div className="spacer"></div>
      <footer className={classes.footer}>
        <InstagramIcon className={classes.icon} />
        <FacebookIcon className={classes.icon} />
        <TwitterIcon className={classes.icon} />
        <LinkedInIcon className={classes.icon} />
      </footer>
    </div>
  );
}

export default Dashboard;
