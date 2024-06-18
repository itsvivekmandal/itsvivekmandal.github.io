import { useEffect, useState } from "react";
import { AppBar, Toolbar, Grid, Tabs, Tab, styled } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";
import logo from "../assets/image/logo.png";

const CustomTab = styled(Tab)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 'bold'
}));

const Header = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(path);
  }, [path]);

  const handleClick = (event, newValue) => {
    console.log(newValue);
    setPath(newValue);
  };

  return (
    <AppBar position="sticky" color="transparent">
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          {/* Logo for md screen */}
          <Grid item xs={10} md={2} sx={{ display: "flex" }}>
            <img src={logo} alt="logo" />
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
              <CustomTab label="Home" component={Link} to="/" value="/" />
              <CustomTab
                label="Projects"
                component={Link}
                to="/projects"
                value="/projects"
              />
              <CustomTab label="About" component={Link} to="/about" value="/about" />
              <CustomTab
                label="Contact"
                component={Link}
                to="/contact"
                value="/contact"
              />
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
