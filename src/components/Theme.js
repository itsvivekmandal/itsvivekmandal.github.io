// theme.js or theme.ts
import { createTheme } from '@mui/material/styles';

// const Theme = createTheme({
//   palette: {
//     secondary: {
//       main: '#7952B3', // your custom secondary color
//       contrastText: '#ffffff', // optional
//     },
//     // mode: 'dark', // Enable dark mode
//     background: {
//       default: '##1d1d1d', // Dark background for the whole app
//       paper: '#1e1e1e',    // Slightly lighter background for surfaces
//     },
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           backgroundColor: '##1d1d1d', // fallback if theme ref fails
//           margin: 0,
//           padding: 0,
//         },
//         html: {
//           backgroundColor: '##1d1d1d',
//         },
//       },
//     },
//   },
// });

const getTheme = (mode = 'light') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // Light mode palette
            primary: {
              main: '#1976d2',
            },
            secondary: {
              main: '#7952B3',
            },
            background: {
              default: '#f5f5f5',
              paper: '#ffffff',
            },
            text: {
              primary: '#666666',
              secondary: '#555555',
            },
          }
        : {
            // Dark mode palette
            primary: {
              main: '#90caf9',
            },
            secondary: {
              main: '#7952B3',
            },
            background: {
              default: '#1d1d1d',
              paper: '#1e1e1e',
            },
            text: {
              primary: '#d8d8d8',
              secondary: '#5e5e5e',
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
            backgroundColor: mode === 'dark' ? '#1d1d1d' : '#f5f5f5',
            color: mode === 'dark' ? '#e2e2e2' : '#3d3d3d',
          },
        },
      },
    },
  });


export default getTheme;

