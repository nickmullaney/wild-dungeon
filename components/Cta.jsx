'use client'
import { Button, Box, Typography } from '@mui/material';

const CtaSection = () => (
  <Box sx={{ textAlign: 'center', padding: '3rem 1rem' }}>
    <Typography variant="h4" gutterBottom>
      Ready to Enhance Your D&D Experience?
    </Typography>
    <Button variant="contained" color="secondary" size="large">
      Join Now
    </Button>
  </Box>
);

export default CtaSection;
