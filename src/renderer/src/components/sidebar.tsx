import React from 'react';
import { Typography } from '@mui/material';
import '../styles/sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Typography variant="h6" className="sidebar-text">
        Sidebar
      </Typography>
    </div>
  );
};

export default Sidebar;
