import "./App.css";
import React, { useState, useMemo } from 'react';
import { Outlet, createBrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import getTheme from "./components/Theme";


function App() {
  const storedMode = localStorage.getItem('themeMode') || 'light';
  const [mode, setMode] = useState(storedMode);
  const theme = useMemo(() => getTheme(mode), [mode]);
  localStorage.setItem('themeMode', mode);
  console.log(mode);
  const toggleTheme = () =>
  setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header mode={mode} setMode={setMode} />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

const router = createBrowserRouter([
  {
    'path': "/",
    'element': <App />,
    'children': [
      {
        'path': '/:sectionId?',
        'element': <Body />
      },
      {
        'path': '/blog',
        'element': <Blog/>
      }
      // {
      //   'path': '/about',
      //   'element': <About />
      // },
      // {
      //   'path': '/contact',
      //   'element': <Contact />
      // }
    ]
  }
// ], { basename: "/portfolio" });
]);

export default router;
