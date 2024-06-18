import {useState} from "react";
import {Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Tabs, Tab, Divider, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/image/logo.png";

const CustomTab = styled(Tab)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 'bold'
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
        color="inherit"
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
        <List>
          {/* <ListItem key='logo'>
            <img width="30%" src={logo} alt="logo" onClick={toggleDrawer} />
          </ListItem>
          <Divider /> */}
          <Tabs
            orientation="vertical"
            value={path}
            onChange={handleClick}
          >
            <CustomTab label="Home" component={Link} to="/" value="/" onClick={toggleDrawer} />
            <CustomTab label="Projects" component={Link} to="/projects" value="/projects" onClick={toggleDrawer} />
            <CustomTab label="About" component={Link} to="/about" value="/about" onClick={toggleDrawer} />
            <CustomTab label="Contact" component={Link} to="/contact" value="/contact" onClick={toggleDrawer} />
          </Tabs>
        </List>
      </Drawer>
    </>
  );
};

export default MenuDrawer;