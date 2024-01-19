import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAuth } from '@/util/auth/authContext'; // Adjust the import path as needed

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

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth(); // Using the useAuth hook

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
              <Button color="inherit" onClick={logout}>Logout</Button>
            </>
          )}
          {!isLoggedIn && <Button color="inherit" onClick={login}>Login</Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
