import React, { useState } from 'react';
import { Typography, Box, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDateFormat } from '../contexts/DateFormatContext';
import '../styles/settings.css';

const Settings: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  const theme = useTheme();
  const [themeMode, setThemeMode] = useState(theme.palette.mode === 'dark' ? 'Dark' : 'Light');
  const { dateFormat, setDateFormat } = useDateFormat();

  const handleThemeChange = (event: SelectChangeEvent) => {
    const selectedTheme = event.target.value;
    if (selectedTheme !== themeMode) {
      setThemeMode(selectedTheme);
      toggleTheme();
    }
  };

  const handleDateFormatChange = (event: SelectChangeEvent) => {
    setDateFormat(event.target.value);
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
        <Box className="settings-item">
          <Typography variant="body1" className="settings-left">
            Date Format
          </Typography>
          <FormControl className="settings-right">
            <Select value={dateFormat} onChange={handleDateFormatChange}>
              <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
              <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
              <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
