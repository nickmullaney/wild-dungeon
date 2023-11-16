import { useThemeContext } from '@/contexts/ThemeContext';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeToggleButton = () => {
  const { themeMode, toggleTheme } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme}>
      {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggleButton