import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    card: {
      background: string;
      border: string;
      shadow: string;
    };
    gradient: {
      primary: string;
    };
  }
  interface PaletteOptions {
    card: {
      background: string;
      border: string;
      shadow: string;
    };
    gradient: {
      primary: string;
    };
  }

  // Add custom component props
  interface Components {
    MuiDivider?: {
      styleOverrides?: {
        root?: {
          borderColor?: string;
        };
      };
    };
  }
}

const commonComponents = {
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          padding: theme.spacing(2.5),
          margin: theme.spacing(2.5, 0),
          backgroundColor: theme.palette.card.background,
          borderColor: theme.palette.card.border,
          boxShadow: `0 2px 4px ${theme.palette.card.shadow}`
        })
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(1.25, 2),
          margin: theme.spacing(0, 2),
          cursor: 'pointer',
          borderRadius: 8,
          transition: theme.transitions.create(['background-color', 'color'], {
            duration: theme.transitions.duration.shortest
          }),
          '&:hover': {
            backgroundColor: theme.palette.sidebar.itemHover,
            '& .MuiSvgIcon-root': {
              color: '#fbc054'
            }
          },
          '&.selected': {
            color: theme.palette.sidebar.itemSelected,
            backgroundColor: theme.palette.sidebar.itemHover,
            '& .MuiSvgIcon-root': {
              color: theme.palette.sidebar.itemSelected
            }
          }
        })
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginRight: theme.spacing(1.25),
          transition: theme.transitions.create('color')
        })
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.mode === 'light' ? '#8b8b8b' : '#2d2d2d'
        })
      }
    }
  }
};

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
    },
    card: {
      background: '#0000ff',
      border: '#e0e0e0',
      shadow: 'rgba(0, 0, 0, 0.1)'
    },
    gradient: {
      primary: 'linear-gradient(45deg, #ffa500, #fbc054)'
    }
  },
  ...commonComponents
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
    },
    card: {
      background: '#ff0000',
      border: '#2d2d2d',
      shadow: 'rgba(0, 0, 0, 0.3)'
    },
    gradient: {
      primary: 'linear-gradient(45deg, #ffa500, #fbc054)'
    }
  },
  ...commonComponents
});

export default darkTheme;
