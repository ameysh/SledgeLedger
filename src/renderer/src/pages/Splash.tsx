import React from 'react';
import { Box, Typography } from '@mui/material';
import '../assets/base.css';
import '../assets/main.css';
import '../styles/splash.css';

const Splash: React.FC = () => {
  return (
    <Box sx={{ padding: 3, textAlign: 'center' }}>
      <Typography className="sledgeledger" variant="h3" component="span">
        SledgeLedger
      </Typography>
      <Typography variant="h3" component="span">
        {' '}
        Finance Tracker
      </Typography>
    </Box>
  );
};

export default Splash;
