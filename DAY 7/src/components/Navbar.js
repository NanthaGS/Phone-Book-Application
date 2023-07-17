import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {FaPhoneSquareAlt,FaUserEdit} from 'react-icons/fa';
import {ImSearch} from 'react-icons/im';
import {TbLogout2} from 'react-icons/tb';
import {CgProfile} from 'react-icons/cg';
import {VscFilterFilled} from 'react-icons/vsc';
import {HiUserAdd} from 'react-icons/hi';
import {BiSolidHome} from 'react-icons/bi';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from './Redux/userslice';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const user=useSelector(selectUser);
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* <ul  className="sidebar-nav"> */}
          <a style={{listStyle:'none',marginTop:'1em',marginLeft:'20rem'}}>

            
            <FaPhoneSquareAlt size={40} className="phone1"></FaPhoneSquareAlt>
            
            
            <br></br>
            <br></br>
            
          </a>
        {/* </ul> */}
      </div>
        {/* <div className="logo" onClick={handleSidebarToggle}>
          Logo
        </div> */}
        <ul className="nav-list" style={{marginLeft:1140,overflow:"hidden"}}>
        <li className="nav-item">
        {user.name}
      </li>
        <li className="nav-item">
        
        <Link to="/homepage" className="nav-link">

        <BiSolidHome></BiSolidHome>
        </Link>
      </li>
        <li className="nav-item">
        
            <Link to="/add" className="nav-link">

            <HiUserAdd></HiUserAdd>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">

            <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/filter" className="nav-link">
            <FaUserEdit></FaUserEdit>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
            <CgProfile></CgProfile>
            </Link>
          </li>

          <li className="nav-item">
          <Link to="/" className="nav-link">
            <TbLogout2></TbLogout2>
            </Link>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

