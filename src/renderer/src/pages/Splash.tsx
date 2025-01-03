import React from 'react';
import { Box, Typography } from '@mui/material';

const Splash: React.FC = () => {
  return (
    <Box sx={{ padding: 3, textAlign: 'center' }}>
      <Typography
        variant="h3"
        component="span"
        sx={{
          background: (theme) => theme.palette.gradient.primary,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
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
