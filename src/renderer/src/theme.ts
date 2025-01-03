import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#dc004e'
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5'
    },
    sidebar: {
      main: '#f0f0f0',
      item: '#000000',
      itemHover: '#e0e0e0',
      itemSelected: '#ffa500',
      branding: '#000000'
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9'
    },
    secondary: {
      main: '#f48fb1'
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d'
    },
    sidebar: {
      main: '#191919',
      item: '#ffffff',
      itemHover: '#222222',
      itemSelected: '#ffa500',
      branding: '#ffffff'
    }
  }
});

export default darkTheme;
