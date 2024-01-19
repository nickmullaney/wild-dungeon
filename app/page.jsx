import React from 'react';
import { useAuth } from '@/contexts/AuthContext'; // Adjust the import path as needed
import Image from 'next/image';
import styles from './page.module.css';
import { Typography, Button, Grid, Card, CardContent } from '@mui/material';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Typography variant="h3" component="h1" gutterBottom>
          Organize Your D&D Campaigns with Ease
        </Typography>
        <Typography variant="h6" gutterBottom>
          Simplify your role as a Dungeon Master.
        </Typography>
        {isLoggedIn ? (
          <Button variant="contained" color="primary" size="large">
            Manage Campaigns
          </Button>
        ) : (
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        )}
      </div>

      <Grid container spacing={4} className={styles.features}>
        {/* Example feature card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Character Vault
              </Typography>
              <Typography variant="body2">
                Manage and track your characters.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Repeat for other features */}
      </Grid>

      <div className={styles.callToAction}>
        <Typography variant="h4">
          Ready to Start Your Adventure?
        </Typography>
        {isLoggedIn ? (
          <Button variant="outlined" color="secondary">
            Go to Dashboard
          </Button>
        ) : (
          <Button variant="outlined" color="secondary">
            Join Now
          </Button>
        )}
      </div>
    </main>
  );
}
