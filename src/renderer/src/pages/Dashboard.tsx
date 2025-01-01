import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ padding: 3, textAlign: 'center' }}>
      <Typography variant="h4">Welcome to the Dashboard</Typography>
    </Box>
  );
};

export default Dashboard;
