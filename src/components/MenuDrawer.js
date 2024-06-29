import {useState} from "react";
import {Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Tabs, Tab, Divider, styled, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/images/logo.png";

const CustomTab = styled(Tab)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 'bold',
  alignItems: 'flex-start'
}));

const MenuDrawer = ({handleClick, path}) => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    console.log(drawer);
    setDrawer(!drawer);
  };
  
  return (
    <>
      <IconButton
        // color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        edge="end"
        sx={{ mr: 2}}
      ><MenuIcon /></IconButton>
      <Drawer 
        anchor="right" 
        open={drawer} 
        onClose={toggleDrawer}
        sx={{ '& .MuiDrawer-paper': { width: '50%' } }}  
      >
        <Grid container alignItems="center">
          <Grid item xs={12} container justifyContent="center" alignItems="center">
            <img className="logo" src={logo} alt="logo" onClick={toggleDrawer} />
          </Grid>
          <Grid item xs={12} container justifyContent="flex-start">
            <List>
              <Tabs
                orientation="vertical"
                value={path}
                onChange={handleClick}
                TabIndicatorProps={{ style: { left: 0 } }}
              >
                <CustomTab label="Home" component={Link} to="/#home" value="/" onClick={toggleDrawer} />
                <CustomTab label="Projects" component={Link} to="/#projects" value="/projects" onClick={toggleDrawer} />
                <CustomTab label="About" component={Link} to="/#about" value="/about" onClick={toggleDrawer} />
                <CustomTab label="Contact" component={Link} to="/#contact" value="/contact" onClick={toggleDrawer} />
              </Tabs>
            </List>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default MenuDrawer;