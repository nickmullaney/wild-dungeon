import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Box, Container } from '@mui/material'; // If using MUI

export const metadata = {
  title: 'Wild Dungeon',
  description: 'A Dungeons and Dragons 5e AI assist for overworked DMs.',
};

export default function RootLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Container>{children}</Container>
      </Box>
      <Footer />
    </Box>
  );
}
