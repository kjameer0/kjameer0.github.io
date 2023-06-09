import { useState } from 'react';
//mui components
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
//utils
import { baseUrl } from 'utils/url';
//react router
import { NavLink } from 'react-router-dom';
//new  nav bar items can be added by appending new item to list after
//adding route in main.tsx
const links = ['Home', 'About', 'Projects', 'Experiments'];
export default function NavBar() {
  const [open, setOpen] = useState(false);
  //set drawer to close
  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };
  const drawerWidth = 240;
  //opening and closing box for nav menu itself
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: 'gray', height: '100%' }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Navigation
      </Typography>
      <Divider />
      <List>
        {links.map((link) => (
          <ListItem key={link} sx={{ border: '1px solid white' }}>
            <ListItemButton sx={{ textAlign: 'center', margin: '-1rem -2rem' }}>
              <NavLink
                to={baseUrl + (link === 'Home' ? '' : link.toLowerCase())}
                style={{
                  padding: `1rem 0rem`,
                  margin: '0rem 0rem',
                  width: '100%',
                  fontFamily: 'General Sans semibold !important',
                }}
                className={'nav-link'}
              >
                <ListItemText
                  primary={link}
                  sx={{ color: 'black', fontSize: '1.2rem !important' }}
                />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component={'nav'} sx={{ backgroundColor: 'orange' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                sm: 'block',
                color: 'black',
                fontFamily: 'general sans semibold',
              },
            }}
          >
            {'Khalid Jameer'.toUpperCase()}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {links.map((link) => (
              <Button key={link} sx={{ color: '#fff', padding: '1.2rem' }} className="Button">
                <NavLink
                  style={{
                    padding: '1.2rem',
                    margin: '-1.2rem',
                    fontSize: '1.1rem',
                    position: 'relative',
                    color: 'black',
                    textTransform: "lowercase"
                  }}
                  to={baseUrl + (link === 'Home' ? '' : link.toLowerCase())}
                >
                  <div className="pseudo pseudo-top"></div>
                  <p>{link}</p>
                  <div className="pseudo pseudo-bottom"></div>
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
