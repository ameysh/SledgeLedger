import React from 'react';
import { Typography } from '@mui/material';
import '../styles/sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Typography variant="h4" className="branding" sx={{ fontWeight: 600 }}>
        SledgeLedger
      </Typography>
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
