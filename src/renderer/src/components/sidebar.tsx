import React from 'react';
import '../styles/sidebar.css';
import SLIcon from '../assets/SL_icon.svg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

interface SidebarProps {
  onSelectPage: (page: string) => void;
  selectedPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectPage, selectedPage }) => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={SLIcon} alt="SledgeLedger Logo" className="sl-logo" />
        <span className="branding">SledgeLedger</span>
      </div>
      <ul className="sidebar-list">
        <li
          className={`sidebar-list-item ${selectedPage === 'Overview' ? 'selected' : ''}`}
          onClick={() => onSelectPage('Overview')}
        >
          <DashboardIcon style={{ marginRight: '10px' }} />
          Overview
        </li>
        <li
          className={`sidebar-list-item ${selectedPage === 'Statistics' ? 'selected' : ''}`}
          onClick={() => onSelectPage('Statistics')}
        >
          <BarChartIcon style={{ marginRight: '10px' }} />
          Statistics
        </li>
        <li
          className={`sidebar-list-item ${selectedPage === 'Accounts' ? 'selected' : ''}`}
          onClick={() => onSelectPage('Accounts')}
        >
          <CreditCardIcon style={{ marginRight: '10px' }} />
          Accounts
        </li>
        <li
          className={`sidebar-list-item ${selectedPage === 'Transactions' ? 'selected' : ''}`}
          onClick={() => onSelectPage('Transactions')}
        >
          <ReceiptIcon style={{ marginRight: '10px' }} />
          Transactions
        </li>
      </ul>
      <div className="sidebar-bottom-container">
        <div
          className={`sidebar-list-item-bottom ${selectedPage === 'Help' ? 'selected' : ''}`}
          onClick={() => onSelectPage('Help')}
        >
          <HelpIcon style={{ marginRight: '10px' }} />
          Help
        </div>
        <div
          className={`sidebar-list-item-bottom ${selectedPage === 'Settings' ? 'selected' : ''}`}
          onClick={() => onSelectPage('Settings')}
        >
          <SettingsIcon style={{ marginRight: '10px' }} />
          Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
