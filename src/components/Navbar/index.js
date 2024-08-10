// src/components/Navbar.js

import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { FaHome, FaUsers, FaSignOutAlt } from 'react-icons/fa'; 
import { IoIosPaper } from 'react-icons/io'; 
import './index.css'

const Navbar = () => {
    
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('authToken');
      navigate('/login');
    };

  return (
    <nav>
      <ul>
        <li><Link to="/"> <FaHome />Home</Link></li>
        <li><Link to="/users"> <FaUsers /> Users</Link></li>
        <li><Link to="/posts"> <IoIosPaper /> Posts</Link></li>
        <li>
          <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
