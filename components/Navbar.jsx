'use client';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ThemeToggleButton from './ThemeToggle';


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
      textTransform: 'none', // Keeps the original case of the text
      fontWeight: 'bold',
    }}
  >
    {label}
  </Button>
);

const Navbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
        Wild Dungeon D&D
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <NavbarLink href="/" label="Home" />
        <NavbarLink href="/about" label="About" />
        <NavbarLink href="/campaign" label="Campaign" />
        <NavbarLink href="/cities" label="Cities" />
        <NavbarLink href="/characters" label="Character Vault" />
        <NavbarLink href="/quests" label="Quests" />
        <NavbarLink href="/encounters" label="Encounters" />
        <ThemeToggleButton />
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
