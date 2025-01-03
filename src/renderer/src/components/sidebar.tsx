import React from 'react';
import { Box, List, ListItem, styled, SvgIcon } from '@mui/material';
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

interface SidebarItemProps {
  selected: boolean;
  onClick: () => void;
  icon: React.ElementType;
  label: string;
}

const StyledSvgIcon = styled(SvgIcon)(({ theme, selected }) => ({
  color: selected ? theme.palette.sidebar.itemSelected : theme.palette.sidebar.item
}));

const LogoImage = styled('img')({
  marginTop: 20,
  marginBottom: 20,
  WebkitUserDrag: 'none',
  height: 24,
  width: 24,
  willChange: 'filter',
  transition: 'filter 300ms',
  '&:hover': {
    filter: 'drop-shadow(0 0 0.75em #ffa500)'
  }
});

const SidebarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: 20,
  height: '100%',
  backgroundColor: theme.palette.sidebar.main
}));

const SidebarItem = ({ selected, onClick, icon: Icon, label }: SidebarItemProps) => (
  <ListItem
    onClick={onClick}
    className={selected ? 'selected' : ''}
    sx={{
      color: (theme) => (selected ? theme.palette.sidebar.itemSelected : theme.palette.sidebar.item)
    }}
  >
    <StyledSvgIcon component={Icon} selected={selected} />
    {label}
  </ListItem>
);

const Sidebar: React.FC<SidebarProps> = ({ onSelectPage, selectedPage, toggleTheme }) => (
  <SidebarContainer>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        p: '10px 15px',
        cursor: 'default'
      }}
    >
      <LogoImage src={SLIcon} alt="SledgeLedger Logo" />
      <Box sx={{ color: 'sidebar.branding', ml: 1, fontWeight: 600 }}>SledgeLedger</Box>
    </Box>

    <List sx={{ width: '100%', p: 0, m: 0, flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Main navigation items */}
      <Box>
        <SidebarItem
          selected={selectedPage === 'Overview'}
          onClick={() => onSelectPage('Overview')}
          icon={DashboardIcon}
          label="Overview"
        />
        <SidebarItem
          selected={selectedPage === 'Statistics'}
          onClick={() => onSelectPage('Statistics')}
          icon={BarChartIcon}
          label="Statistics"
        />
        <SidebarItem
          selected={selectedPage === 'Accounts'}
          onClick={() => onSelectPage('Accounts')}
          icon={CreditCardIcon}
          label="Accounts"
        />
        <SidebarItem
          selected={selectedPage === 'Transactions'}
          onClick={() => onSelectPage('Transactions')}
          icon={ReceiptIcon}
          label="Transactions"
        />
      </Box>

      {/* Bottom navigation items */}
      <Box sx={{ mt: 'auto' }}>
        <SidebarItem
          selected={selectedPage === 'Help'}
          onClick={() => onSelectPage('Help')}
          icon={HelpIcon}
          label="Help"
        />
        <SidebarItem
          selected={selectedPage === 'Settings'}
          onClick={() => onSelectPage('Settings')}
          icon={SettingsIcon}
          label="Settings"
        />
      </Box>
    </List>
  </SidebarContainer>
);

export default Sidebar;
