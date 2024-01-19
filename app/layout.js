import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Box, Container } from '@mui/material';
import { AuthProvider } from '@/util/auth/authContext'; // Adjust the import path as needed

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
          <Container>{children}</Container>
        </Box>
        <Footer />
      </Box>
    </AuthProvider>
  );
}
