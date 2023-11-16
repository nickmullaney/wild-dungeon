'use client'

import { Button, Typography, Box } from '@mui/material';

const HeroSection = () => (
  <Box sx={{ textAlign: 'center', padding: '4rem 1rem', backgroundImage: 'url(/hero-bg.jpg)', backgroundSize: 'cover' }}>
    <Typography variant="h2" component="h1" gutterBottom>
      Your D&D Campaign, Organized
    </Typography>
    <Typography variant="h6" gutterBottom>
      Manage characters, cities, quests, and more with ease.
    </Typography>
    <Button variant="contained" color="primary" size="large">
      Get Started
    </Button>
  </Box>
);

export default HeroSection;
