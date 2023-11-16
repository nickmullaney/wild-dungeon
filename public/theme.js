import { createTheme } from '@mui/material/styles';

export const getLightTheme = () => createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#546e7a', // A cool blue-gray, suitable for headers and important elements
    },
    secondary: {
      main: '#ffab40', // A warm amber, for accents and calls to action
    },
    background: {
      default: '#f5f5f5', // A light grey, for page backgrounds
      paper: '#ffffff', // Pure white, for card backgrounds and similar components
    },
    text: {
      primary: '#212121', // Very dark grey, almost black, for primary text
      secondary: '#757575', // A medium grey for secondary text
    },
  },
});

export const getDarkTheme = () => createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90a4ae', // A lighter blue-gray, standing out in the dark mode
    },
    secondary: {
      main: '#ffa726', // A slightly brighter amber for good contrast in dark mode
    },
    background: {
      default: '#303030', // Dark grey, for page backgrounds
      paper: '#424242', // Even darker, for card backgrounds and similar components
    },
    text: {
      primary: '#e0e0e0', // Light grey for primary text
      secondary: '#bdbdbd', // A darker grey for secondary text
    },
  },
});

