import React, { useState } from 'react';
import {
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Divider
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { useDateFormat } from '../contexts/DateFormatContext';

const SettingsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
  width: '100%'
}));

const SettingsSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2.5)
}));

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
    <SettingsContainer>
      <Typography variant="h4" sx={{ mb: 2.5 }}>
        Settings
      </Typography>
      <SettingsSection>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.25 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
            General
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 1.25,
            width: '100%'
          }}
        >
          <Typography variant="body1" sx={{ mr: 2.5, minWidth: 60, flexShrink: 0 }}>
            Theme
          </Typography>
          <FormControl sx={{ minWidth: 120, flex: 1, maxWidth: 200 }}>
            <Select value={themeMode} onChange={handleThemeChange}>
              <MenuItem value="Light">Light</MenuItem>
              <MenuItem value="Dark">Dark</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 1.25,
            width: '100%'
          }}
        >
          <Typography variant="body1" sx={{ mr: 2.5, minWidth: 60, flexShrink: 0 }}>
            Date Format
          </Typography>
          <FormControl sx={{ minWidth: 120, flex: 1, maxWidth: 200 }}>
            <Select value={dateFormat} onChange={handleDateFormatChange}>
              <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
              <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
              <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </SettingsSection>
    </SettingsContainer>
  );
};

export default Settings;
