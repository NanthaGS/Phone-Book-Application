// import React from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar__logo">
       
//         pHONEbOOK
//       </div>
//       {/* <div className="navbar_home">
//           <Link to="home" ><button div className="navbar" >Home</button></Link>
//       </div> */}
//       <div className="navbar__search">
        
//         <input type="text" placeholder="Search contacts" />
//       </div>
//       <div className="navbar__add-contact">
       
//         <button>Add Contact</button>
//       </div>
//       <div className="navbar__filters">
        
//         <select>
//           <option value="">Filter by...</option>
         
//         </select>
//       </div>
//       <div className="navbar__user-profile">
        
//         <img src="profile.jpg" alt="User Profile" />
        
//         <div className="navbar__user-settings">
          
//         </div>
//       </div>
//       <div className="navbar__responsive-menu">
        
//         <button>&#9776;</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';


// const Navbar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const handleSidebarToggle = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo" onClick={handleSidebarToggle}>
//       <FaPhoneSquareAlt className="phone"></FaPhoneSquareAlt>
//       </div>
//       <ul 
      
//       className={`mt-16 bg-green-500 h-screen w-56 fixed top-0 left-0 ${
//         handleSidebarToggle ? "translate-x-0" : "-translate-x-full"
//       } transition-transform duration-300 ease-in-out`}
//     >
      
//         {/* <li className="nav-item">
//           <Link to="/" className="nav-link">Home</Link>
//         </li> */}
//         <li className="nav-item">
//           <Link to="/search" className="nav-link">
//           <ImSearch></ImSearch>
//             </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/filter" className="nav-link">
//             <VscFilterFilled></VscFilterFilled>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/profile" className="nav-link">
//             <CgProfile></CgProfile>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/" className="nav-link">
//             <TbLogout2></TbLogout2>
//             </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {ImSearch} from 'react-icons/im';
import {TbLogout2} from 'react-icons/tb';
import {CgProfile} from 'react-icons/cg';
import {VscFilterFilled} from 'react-icons/vsc';
import {HiUserAdd} from 'react-icons/hi';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul  className="sidebar-nav">
          <li style={{listStyle:'none',marginTop:'1em'}}>
            <Link  className="nav-link" onClick={handleSidebarToggle}>

            <FaPhoneSquareAlt size={30} className="phone1"></FaPhoneSquareAlt>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-content">
        {/* <div className="logo" onClick={handleSidebarToggle}>
          Logo
        </div> */}
        <ul className="nav-list" style={{marginLeft:1250}}>
        <li className="nav-item">
            <Link to="/add" className="nav-link">

            <HiUserAdd></HiUserAdd>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">

            <ImSearch></ImSearch>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/filter" className="nav-link">
            <VscFilterFilled></VscFilterFilled>
            </Link>
          </li>
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

