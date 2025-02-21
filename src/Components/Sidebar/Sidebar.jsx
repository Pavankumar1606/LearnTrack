import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="sidebar">
      <h1>Logo</h1>
      <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>Dashboard</NavLink>
      <NavLink to="/resources" className={({ isActive }) => (isActive ? "active" : "")}>Resources</NavLink>
      <NavLink to="/notes" className={({ isActive }) => (isActive ? "active" : "")}>Notes</NavLink>
      <NavLink to="/shared" className={({ isActive }) => (isActive ? "active" : "")}>Shared</NavLink>
      <NavLink to="/community" className={({ isActive }) => (isActive ? "active" : "")}>Community</NavLink>

      <div id="Profile">
      <FaRegStar className='profileicon'/>
      <NavLink to="/Profile"  >Profile</NavLink>
      </div>
      

    </div>

    
  );
};

export default Sidebar;
