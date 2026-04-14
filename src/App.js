import "./App.css";
import { useState, useMemo, useEffect } from 'react';
import { Outlet, createHashRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import getTheme from "./components/Theme";

const reCaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

function App() {
    const storedMode = localStorage.getItem('themeMode') || 'light';
    const [mode, setMode] = useState(storedMode);
    const theme = useMemo(() => getTheme(mode), [mode]);

    useEffect(() => {
        localStorage.setItem('themeMode', mode);
    }, [mode]);

    const toggleTheme = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

    return (
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                    <Header mode={mode} setMode={setMode} />
                    <Outlet />
                    <Footer />
                </div>
            </ThemeProvider>
        </GoogleReCaptchaProvider>
    );
}

const router = createHashRouter([
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
    ]
  }
// ], { basename: "/portfolio" });
]);

export default router;
