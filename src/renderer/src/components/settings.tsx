import React from 'react';
import { Typography, Box, FormControlLabel, Switch } from '@mui/material';
import '../styles/settings.css';

const Settings: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  return (
    <Box className="settings-container">
      <Typography variant="h4" className="settings-title">
        Settings
      </Typography>
      <FormControlLabel
        label="Theme"
        control={<Switch onChange={toggleTheme} color="primary" />}
        className="toggle-theme-switch"
      />
    </Box>
  );
};

export default Settings;
