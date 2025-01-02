import React from 'react';
import { Typography } from '@mui/material';
import '../styles/dashboard.css';

const Overview: React.FC = () => {
  return (
    <div className="main-content">
      <Typography variant="h6" className="dashboard-text">
        Overview
      </Typography>
    </div>
  );
};

export default Overview;
