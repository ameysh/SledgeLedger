import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/sidebar';
import Overview from '../components/overview';
import '../styles/dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <Box className="container">
      <Sidebar />
      <Overview />
    </Box>
  );
};

export default Dashboard;
