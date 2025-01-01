import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Dashboard from './pages/Dashboard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

const AppRoutes: React.FC = () => {
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
        <Route path="/dashboard" element={<Dashboard />} />
      )}
    </Routes>
  );
};

export default App;
