import { createTheme } from '@mui/material/styles';

// const primaryTheme = "#7952B3";
const primaryTheme = "#257943";

const getTheme = (mode = 'light') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // Light mode palette
            primary: {
              main: primaryTheme, // brand green
              contrastText: '#ffffff',
            },
            secondary: {
              main: primaryTheme, // slightly lighter green for accents
              contrastText: '#ffffff',
            },
            background: {
              default: '#f3f6f4', // soft gray-green tone
              paper: '#ffffff',   // clean white cards
            },
            text: {
              primary: '#2b2b2b', // near-black for strong contrast
              secondary: '#4a4a4a', // softer gray for supporting text
            },
          }
        : {
            // Dark mode palette
            primary: {
              main: primaryTheme, // slightly brighter green for dark bg
              contrastText: '#ffffff',
            },
            secondary: {
              main: primaryTheme, // pastel green accent
              contrastText: '#1d1d1d',
            },
            background: {
              default: '#121212', // true dark background
              paper: '#1E1E1E', // slightly lifted card background
            },
            text: {
              primary: '#e5e5e5', // almost white
              secondary: '#bdbdbd', // light gray for secondary text
            },
          }),
    },

    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: mode === 'dark' ? '#121212' : '#f3f6f4',
            color: mode === 'dark' ? '#e5e5e5' : '#2b2b2b',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
          },
        },
      },
    },
  });



export default getTheme;

