'use client'

import { Grid, Card, CardContent, Typography } from '@mui/material';

const FeatureCard = ({ title, description }) => (
  <Card sx={{ minWidth: 275, margin: '1rem' }}>
    <CardContent>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Typography variant="body2" component="p">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const FeaturesSection = () => (
  <Grid container justifyContent="center" spacing={2}>
    <Grid item>
      <FeatureCard title="Character Vault" description="Create and manage your characters." />
    </Grid>
    <Grid item>
      <FeatureCard title="Cities" description="Design and keep track of various cities in your world." />
    </Grid>
    {/* ... more features */}
  </Grid>
);

export default FeaturesSection;
