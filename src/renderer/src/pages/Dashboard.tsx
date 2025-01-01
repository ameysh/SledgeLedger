import React from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from '../components/sidebar';
import '../styles/dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <Box className="container">
      <Sidebar />
      <div className="main-content">
        <Typography variant="h6" className="dashboard-text">
          Dashboard
        </Typography>
      </div>
    </Box>
  );
};

export default Dashboard;
