import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Splash from './pages/splash';
import Dashboard from './pages/dashboard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <AppRoutes toggleTheme={toggleTheme} />
      </Router>
    </ThemeProvider>
  );
};

const AppRoutes: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);

  useEffect((): (() => void) => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      navigate('/dashboard');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Routes>
      {showSplash ? (
        <Route path="/" element={<Splash />} />
      ) : (
        <Route path="/dashboard" element={<Dashboard toggleTheme={toggleTheme} />} />
      )}
    </Routes>
  );
};

export default App;
