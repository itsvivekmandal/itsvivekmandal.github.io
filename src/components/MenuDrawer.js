import {useState} from "react";
import { Drawer, List, Tabs, Tab, styled, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/images/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import SourceIcon from '@mui/icons-material/Source';
import BookIcon from '@mui/icons-material/Book';

const CustomTab = styled(Tab)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 'bold',
  justifyContent: 'flex-start', // aligns icon and label to the left
  textAlign: 'left',
  paddingLeft: theme.spacing(2),
  minHeight: '48px',
  alignItems: 'center', // vertically center icon and label
}));

const MenuDrawer = ({handleClick, path}) => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    // console.log(drawer);
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
          <Grid item xs={12} container justifyContent="center" alignItems="center" sx={{ display: "center"}}>
            <img className="logo" src={logo} alt="logo" onClick={toggleDrawer} />
          </Grid>
          <Grid item xs={12} container justifyContent="flex-start">
            <List>
              <Tabs
                orientation="vertical"
                value={path}
                onChange={handleClick}
                TabIndicatorProps={{ style: { left: 0 } }}
                textColor="text.primary"
                indicatorColor="secondary"
              >
                <CustomTab icon={<HomeIcon />} iconPosition="start" label="Home" value="/" onClick={toggleDrawer} />
                <CustomTab icon={<InfoIcon />} iconPosition="start" label="About" value="/about" onClick={toggleDrawer} />
                <CustomTab icon={<SourceIcon />} iconPosition="start" label="Projects" value="/projects" onClick={toggleDrawer} />
                <CustomTab icon={<CallIcon />} iconPosition="start" label="Contact" value="/contact" onClick={toggleDrawer} />
                <CustomTab icon={<BookIcon />} iconPosition="start" label="Blog" value="/blog" onClick={toggleDrawer} />
              </Tabs>
            </List>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default MenuDrawer;