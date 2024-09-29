import { useEffect, useState } from "react";
import { AppBar, Toolbar, Grid, Tabs, Tab, styled } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";
import logo from "../assets/images/logo.png";

const CustomTab = styled(Tab)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 'bold'
}));

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Use navigate for full-page routing
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);  // Make sure the path is synced with the current route
  }, [location]);

  // Handle both in-page scrolling and routing
  const handleClick = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <AppBar direction="row" position="sticky" sx={{ bgcolor: "white", top: 0 }}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          {/* Logo for md screen */}
          <Grid item xs={10} md={2} sx={{ display: "flex" }}>
            <img className="logo" src={logo} alt="logo" />
          </Grid>
          {/* Menu for md screen */}
          <Grid
            item
            md={10}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="center"
          >
            <Tabs
              value={path}
              onChange={handleClick}
              textColor="secondary"
              indicatorColor="secondary"
            >
              {/* In-page scrolling */}
              <CustomTab label="Home" value="/" />
              <CustomTab label="About" value="/about" />
              <CustomTab label="Projects" value="/projects" />
              <CustomTab label="Contact" value="/contact" />
              {/* Full-page routing */}
              <CustomTab label="Blog" value="/blog" />
            </Tabs>
          </Grid>
          {/* Burger menu for small screen */}
          <Grid item xs={2} sx={{ display: { xs: "flex-end", md: "none" } }}>
            <MenuDrawer handleClick={handleClick} path={path} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
