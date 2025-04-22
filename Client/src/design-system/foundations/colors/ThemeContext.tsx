import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { colors, darkColors } from './tokens';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  colors: typeof colors;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
}

export const ThemeProvider = ({
  children,
  defaultMode = 'light'
}: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  // Check if user has a preference in localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode | null;

    if (savedMode) {
      setMode(savedMode);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
    }
  }, []);

  // Update document class and localStorage when theme changes
  useEffect(() => {
    // Apply dark mode class to all relevant elements
    const applyDarkMode = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
        document.body.style.backgroundColor = '#111827'; // Hardcoded dark background
        document.body.style.color = '#f9fafb'; // Hardcoded light text

        // Force dark mode on specific elements that might not be updating
        const navbars = document.querySelectorAll('.uz-top-nav-bar-primary');
        navbars.forEach(navbar => {
          (navbar as HTMLElement).style.backgroundColor = '#0044b3'; // Primary-700
          (navbar as HTMLElement).style.backgroundImage = 'linear-gradient(to right, #002d8c, #0044b3)'; // Primary-800 to Primary-700
          (navbar as HTMLElement).style.color = '#ffffff';
        });

        // Force dark mode on footer
        const footers = document.querySelectorAll('footer');
        footers.forEach(footer => {
          (footer as HTMLElement).style.backgroundColor = '#030712'; // Neutral-950
        });
      } else {
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
        document.body.style.backgroundColor = '#ffffff'; // Hardcoded light background
        document.body.style.color = '#111827'; // Hardcoded dark text

        // Reset direct styles
        const navbars = document.querySelectorAll('.uz-top-nav-bar-primary');
        navbars.forEach(navbar => {
          (navbar as HTMLElement).style.backgroundColor = '';
          (navbar as HTMLElement).style.backgroundImage = '';
          (navbar as HTMLElement).style.color = '';
        });

        const footers = document.querySelectorAll('footer');
        footers.forEach(footer => {
          (footer as HTMLElement).style.backgroundColor = '';
        });
      }
    };

    // Apply the current mode
    applyDarkMode(mode === 'dark');

    // Save to localStorage
    localStorage.setItem('theme-mode', mode);

    // Apply dark mode immediately and after a short delay to ensure it takes effect
    setTimeout(() => {
      applyDarkMode(mode === 'dark');
    }, 50);
  }, [mode]);

  const toggleTheme = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  const themeColors = mode === 'light' ? colors : darkColors;

  const value = {
    mode,
    colors: themeColors,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
