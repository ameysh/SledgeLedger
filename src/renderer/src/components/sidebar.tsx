import React from 'react';
import '../styles/sidebar.css';
import SLIcon from '../assets/SL_icon.svg';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={SLIcon} alt="SledgeLedger Logo" className="sl-logo" />
        <span className="branding">SledgeLedger</span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">Item 1</li>
        <li className="sidebar-list-item">Item 2</li>
        <li className="sidebar-list-item">Item 3</li>
        <li className="sidebar-list-item">Item 4</li>
      </ul>
    </div>
  );
};

export default Sidebar;
