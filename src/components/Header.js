import React from "react";
import { AppBar, Toolbar, Grid, Drawer, List, ListItem, ListItemText, Box, Divider, styled } from "@mui/material";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub, TroubleshootRounded } from "@mui/icons-material";
import CellTowerIcon from '@mui/icons-material/CellTower';
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';

const CustomLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const Header = () => {
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const toggleDrawer = (value) => ()=> {
    setDrawerOpen(value);
  };

  const ListArray = [
    {'name':'Home', 'to':'/'},
    {'name':'Projects', 'to':'/projects'},
    {'name':'About', 'to':'/about'},
    {'name':'Contact', 'to':'/contact'}
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    <List>
      <ListItem key={'First Grid'} onClick={toggleDrawer(false)}>
        <ListItemText primary={'First Grid'} />
      </ListItem>
      <Divider />
      {
        ListArray.map((value) => (
          <ListItem key={value.name} component={CustomLink} to={value.to} onClick={toggleDrawer(false)}>
              <ListItemText primary={value.name} />
          </ListItem>
        ))
      }
    </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="transparent">
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item sx={{ display: {xs: '2', md: 'none'}}} alignItems="center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{ mr: 2}}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClick={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </Grid>
          <Grid item xs={4} md={2}>First Grid</Grid>
          <Grid item md={10} sx={{ flexGrow:1, display: { xs: 'none', md: 'flex' } }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <CustomLink to="/">Home</CustomLink>
              </Grid>
              <Grid item>
                  <CustomLink to="/projects">Projects</CustomLink>
              </Grid>
              <Grid item>
                <CustomLink to="/about">About</CustomLink>
              </Grid>
              <Grid item>
                  <CustomLink to="/contact">Contact</CustomLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

};

export default Header;
