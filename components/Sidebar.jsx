import React from 'react';
import { FiGrid, FiBell, FiCalendar, FiUser, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon active"><FiGrid /></div>
      <div className="sidebar-icon"><FiBell /></div>
      <div className="sidebar-icon"><FiCalendar /></div>
      <div className="sidebar-icon"><FiUser /></div>
      <div style={{ marginTop: 'auto', marginBottom: '20px' }} className="sidebar-icon"><FiSettings /></div>
    </div>
  );
};

export default Sidebar;