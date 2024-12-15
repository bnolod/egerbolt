import React from 'react';
import { useTheme } from '../../contexts/themeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>{theme}</button>
    </div>
  );
};

export default ThemeSwitcher;