import React, { useState } from 'react';
import { Typography, Box, FormControl, Select, MenuItem } from '@mui/material';
import '../styles/settings.css';

const Settings: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  const [theme, setTheme] = useState('Light');

  const handleThemeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedTheme = event.target.value as string;
    setTheme(selectedTheme);
    toggleTheme();
  };

  return (
    <Box className="settings-container">
      <Typography variant="h4" className="settings-title">
        Settings
      </Typography>
      <Box className="settings-section">
        <Typography variant="h6" className="settings-section-title">
          General
        </Typography>
        <Box className="settings-item">
          <Typography variant="body1" className="settings-left">
            Theme
          </Typography>
          <FormControl className="settings-right">
            <Select value={theme} onChange={handleThemeChange}>
              <MenuItem value="Light">Light</MenuItem>
              <MenuItem value="Dark">Dark</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
