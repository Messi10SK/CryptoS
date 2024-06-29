import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerContent = (
    <div
 
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <IconButton onClick={toggleDrawer} style={{ float: 'right' }}>
        <CloseIcon />
      </IconButton>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/compare">
          <ListItemText primary="Compare" />
        </ListItem>
        <ListItem button component={Link} to="/watchlist">
          <ListItemText primary="Favourites" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="CryptoCurrencies" />
        </ListItem>
        <ListItem button component={Link} to="/news">
          <ListItemText primary="News" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="static" style={{ background: 'black' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to="/" className='text-white'>
              CryptoStare
            </Link>
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </div>
  );
}
