import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container } from '@mui/material'; // If using MUI

export const metadata = {
  title: 'Wild Dungeon',
  description: 'A Dungeons and Dragons 5e AI assist for overworked DMs.',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  );
}
