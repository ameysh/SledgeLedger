import React, { useState, useEffect } from 'react';
import { Typography, Box, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import '../styles/settings.css';

const Settings: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  const theme = useTheme();
  const [themeMode, setThemeMode] = useState(theme.palette.mode === 'dark' ? 'Dark' : 'Light');

  const handleThemeChange = (event: SelectChangeEvent) => {
    const selectedTheme = event.target.value;
    if (selectedTheme !== themeMode) {
      setThemeMode(selectedTheme);
      toggleTheme();
    }
  };

  return (
    <Box className="settings-container">
      <Typography variant="h4" className="settings-title">
        Settings
      </Typography>
      <Box className="settings-section">
        <div className="settings-section-header">
          <Typography variant="body2" className="settings-section-title">
            General
          </Typography>
          <div className="settings-divider" />
        </div>
        <Box className="settings-item">
          <Typography variant="body1" className="settings-left">
            Theme
          </Typography>
          <FormControl className="settings-right">
            <Select value={themeMode} onChange={handleThemeChange}>
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
