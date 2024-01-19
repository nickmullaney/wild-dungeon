import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const NavbarLink = ({ href, label }) => (
  <Button 
    color="inherit" 
    component={Link} 
    href={href} 
    sx={{ 
      '&:hover': { 
        backgroundColor: 'secondary.main', 
        color: 'white' 
      },
      textTransform: 'none',
      fontWeight: 'bold',
    }}
  >
    {label}
  </Button>
);

const Navbar = ({ isLoggedIn }) => { // Assuming isLoggedIn is passed as a prop
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Wild Dungeon D&D
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <NavbarLink href="/" label="Home" />
          <NavbarLink href="/about" label="About" />
          {isLoggedIn && (
            <>
              <NavbarLink href="/campaign" label="Campaign" />
              <NavbarLink href="/cities" label="Cities" />
              <NavbarLink href="/characters" label="Character Vault" />
              <NavbarLink href="/quests" label="Quests" />
              <NavbarLink href="/encounters" label="Encounters" />
            </>
          )}
          {isLoggedIn ? (
            <NavbarLink href="/logout" label="Logout" /> // Replace with your logout logic
          ) : (
            <NavbarLink href="/login" label="Login" /> // Replace with your login page link
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
