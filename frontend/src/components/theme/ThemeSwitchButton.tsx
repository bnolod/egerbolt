import React from 'react';
import { useTheme } from '../../contexts/themeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
      <button className='text-primary' onClick={toggleTheme}>{theme}</button>
  );
};

export default ThemeSwitcher;