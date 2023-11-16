'use client'
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Container, ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@/contexts/ThemeContext'; // Import ThemeProvider from your context
import { getLightTheme, getDarkTheme } from '@/public/theme';
import { useThemeContext } from '@/contexts/ThemeContext'; 

export const metadata = {
  title: 'Wild Dungeon',
  description: 'A Dungeons and Dragons 5e AI assist for overworked DMs.',
};


const ThemedApp = ({ children }) => {
  // Temporarily hardcode the theme mode to bypass the context
  const themeMode = 'light'; // or 'dark' to test
  const theme = themeMode === 'light' ? getLightTheme() : getDarkTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
// const ThemedApp = ({ children }) => {
//   const { themeMode } = useThemeContext(); 
//   const theme = themeMode === 'light' ? getLightTheme() : getDarkTheme();

//   return (
//     <MuiThemeProvider theme={theme}>
//       <CssBaseline />
//       {children}
//     </MuiThemeProvider>
//   );
// };

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <ThemedApp>
        <Navbar />
        <Container>
          {children}
        </Container>
        <Footer />
      </ThemedApp>
    </ThemeProvider>
  );
}
