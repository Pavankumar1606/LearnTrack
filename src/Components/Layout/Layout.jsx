import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet /> {/* This will render the selected route content */}
      </div>
    </div>
  );
};

export default Layout;
