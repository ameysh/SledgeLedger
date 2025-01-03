import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/sidebar';
import Overview from '../components/overview';
import Statistics from '../components/statistics';
import Accounts from '../components/accounts';
import Transactions from '../components/transactions';
import Help from '../components/help';
import Settings from '../components/settings';
import '../styles/dashboard.css';

const Dashboard: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  const [selectedPage, setSelectedPage] = useState('Overview');
  const [theme, setTheme] = useState('Dark');

  useEffect(() => {
    if (theme === 'Light') {
      toggleTheme();
    }
  }, []);

  const renderPage = () => {
    switch (selectedPage) {
      case 'Statistics':
        return <Statistics />;
      case 'Accounts':
        return <Accounts />;
      case 'Transactions':
        return <Transactions />;
      case 'Help':
        return <Help />;
      case 'Settings':
        return <Settings toggleTheme={toggleTheme} />;
      default:
        return <Overview />;
    }
  };

  return (
    <Box className="container">
      <Box className="sidebar-container">
        <Sidebar
          onSelectPage={setSelectedPage}
          selectedPage={selectedPage}
          toggleTheme={toggleTheme}
        />
      </Box>
      <Box className="content-container">{renderPage()}</Box>
    </Box>
  );
};

export default Dashboard;
