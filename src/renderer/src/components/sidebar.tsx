import React from 'react';
import { useTheme } from '@mui/material/styles';
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
  toggleTheme: () => void;
}

const SidebarItem: React.FC<{ selected: boolean; onClick: () => void }> = ({
  selected,
  onClick,
  children
}) => {
  const theme = useTheme();
  return (
    <li
      className={`sidebar-list-item ${selected ? 'selected' : ''}`}
      onClick={onClick}
      style={{
        color: selected ? theme.palette.sidebar.itemSelected : theme.palette.sidebar.item,
        '--sidebar-item-hover': theme.palette.sidebar.itemHover
      }}
    >
      {children}
    </li>
  );
};

const SidebarIcon: React.FC<{ selected: boolean; IconComponent: React.ElementType }> = ({
  selected,
  IconComponent
}) => {
  const theme = useTheme();
  return (
    <IconComponent
      style={{
        marginRight: '10px',
        color: selected ? theme.palette.sidebar.itemSelected : theme.palette.sidebar.item
      }}
    />
  );
};

const Sidebar: React.FC<SidebarProps> = ({ onSelectPage, selectedPage, toggleTheme }) => {
  const theme = useTheme();

  return (
    <div className="sidebar" style={{ backgroundColor: theme.palette.sidebar.main }}>
      <div className="logo-container">
        <img src={SLIcon} alt="SledgeLedger Logo" className="sl-logo" />
        <span className="branding" style={{ color: theme.palette.sidebar.branding }}>
          SledgeLedger
        </span>
      </div>
      <ul className="sidebar-list">
        <SidebarItem
          selected={selectedPage === 'Overview'}
          onClick={() => onSelectPage('Overview')}
        >
          <SidebarIcon selected={selectedPage === 'Overview'} IconComponent={DashboardIcon} />
          Overview
        </SidebarItem>
        <SidebarItem
          selected={selectedPage === 'Statistics'}
          onClick={() => onSelectPage('Statistics')}
        >
          <SidebarIcon selected={selectedPage === 'Statistics'} IconComponent={BarChartIcon} />
          Statistics
        </SidebarItem>
        <SidebarItem
          selected={selectedPage === 'Accounts'}
          onClick={() => onSelectPage('Accounts')}
        >
          <SidebarIcon selected={selectedPage === 'Accounts'} IconComponent={CreditCardIcon} />
          Accounts
        </SidebarItem>
        <SidebarItem
          selected={selectedPage === 'Transactions'}
          onClick={() => onSelectPage('Transactions')}
        >
          <SidebarIcon selected={selectedPage === 'Transactions'} IconComponent={ReceiptIcon} />
          Transactions
        </SidebarItem>
      </ul>
      <div className="sidebar-bottom-container">
        <SidebarItem selected={selectedPage === 'Help'} onClick={() => onSelectPage('Help')}>
          <SidebarIcon selected={selectedPage === 'Help'} IconComponent={HelpIcon} />
          Help
        </SidebarItem>
        <SidebarItem
          selected={selectedPage === 'Settings'}
          onClick={() => onSelectPage('Settings')}
        >
          <SidebarIcon selected={selectedPage === 'Settings'} IconComponent={SettingsIcon} />
          Settings
        </SidebarItem>
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Sidebar;
