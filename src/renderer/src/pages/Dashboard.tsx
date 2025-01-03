import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/sidebar';
import Overview from '../components/overview';
import Statistics from '../components/statistics';
import Accounts from '../components/accounts';
import Transactions from '../components/transactions';
import Help from '../components/help';
import Settings from '../components/settings';

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
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw'
      }}
    >
      <Box
        sx={{
          width: 200,
          height: '100%'
        }}
      >
        <Sidebar
          onSelectPage={setSelectedPage}
          selectedPage={selectedPage}
          toggleTheme={toggleTheme}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          height: '100%'
        }}
      >
        {renderPage()}
      </Box>
    </Box>
  );
};

export default Dashboard;
