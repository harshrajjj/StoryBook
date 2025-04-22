import React, { useEffect } from 'react';
import { ThemeProvider } from '../src/design-system/context/ThemeContext';

// This decorator wraps stories with the ThemeProvider
export const ThemeDecorator = (Story, context) => {
  // Get the current background from Storybook parameters
  const background = context.globals.backgrounds?.value || '#ffffff';
  const isDark = background === '#1a202c';

  // Set the theme mode based on the background
  const themeMode = isDark ? 'dark' : 'light';

  // Apply dark mode class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('dark-mode');
    }

    return () => {
      // Clean up
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('dark-mode');
    };
  }, [isDark]);

  // Force black background on document
  useEffect(() => {
    if (isDark) {
      document.documentElement.style.backgroundColor = '#000000';
      document.body.style.backgroundColor = '#000000';

      // Force black background on all divs
      const divs = document.querySelectorAll('div');
      divs.forEach(div => {
        if (!div.classList.contains('w-16') && !div.classList.contains('h-16')) {
          div.style.backgroundColor = '#000000';
        }
      });
    } else {
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
    }
  }, [isDark]);

  return (
    <ThemeProvider initialMode={themeMode}>
      <div
        className={`${isDark ? 'dark dark-mode' : ''}`}
        style={{ backgroundColor: isDark ? '#000000' : '#ffffff' }}
      >
        <div
          className="p-4"
          style={{ backgroundColor: isDark ? '#000000' : '#ffffff' }}
        >
          <Story />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ThemeDecorator;
