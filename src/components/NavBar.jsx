// src/components/NavBar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerItems = (
    <List>
      <ListItem button component={Link} to="/" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem button component={Link} to="/services" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button component={Link} to="/signin" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Sign In" />
      </ListItem>
      <ListItem button component={Link} to="/signup" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Sign Up" />
      </ListItem>
      <ListItem button component={Link} to="/cart" onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Cart" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" style={{ backgroundColor: '#b71c1c', color: '#fff' }}>
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h5" style={{ flexGrow: 1}}>
          Beauty Products
        </Typography>
        {!isMobile && (
          <>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/services">Services</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/signin">Sign In</Button>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            <Button color="inherit" component={Link} to="/cart">Cart</Button>
          </>
        )}
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawerItems}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
