import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { baseUrl } from 'utils/url';
import { NavLink } from 'react-router-dom';

const links = [
  ['Home', ''],
  ['About', 'about'],
];
export default function SmallDrawer() {
  return (
    <Box
      // onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: 'gray', height: '100%' }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Navigation
      </Typography>
      <Divider />
      <List>
        {links.map((link) => (
          <ListItem key={link[0]}>
            <NavLink to={baseUrl + link[1]}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={link[0]} sx={{ color: 'black' }} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
