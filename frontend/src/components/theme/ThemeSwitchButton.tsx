import React from 'react';
import { useTheme } from '../../contexts/themeContext';
import IconButton from '../_basic_components/iconButton';
import { SunIcon } from '@heroicons/react/24/outline';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
      <IconButton className='text-primary hover:text-accent-primary' onClick={toggleTheme}>
        <SunIcon className='h-6'></SunIcon>
      </IconButton>
  );
};

export default ThemeSwitcher;