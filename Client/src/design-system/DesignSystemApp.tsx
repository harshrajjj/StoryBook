import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './foundations/colors/ThemeContext';
import { ColorPalette } from './foundations/colors/ColorPalette';
import { TagDocumentation } from './components/data-display/Tag/TagDocumentation';
import { TooltipDocumentation } from './components/data-display/Tooltip/TooltipDocumentation';
import { TopNavBarDocumentation } from './components/navigation/TopNavBar/TopNavBarDocumentation';
import { TabsDocumentation } from './components/navigation/Tabs/TabsDocumentation';
import { TopNavBar, TopNavItem } from './components/navigation/TopNavBar';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './components/navigation/Tabs';
import { Tag } from './components/data-display/Tag';
import { Tooltip } from './components/data-display/Tooltip';
import './foundations/colors/theme.css';

const Logo = () => (
  <div className="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 mr-2"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
        clipRule="evenodd"
      />
    </svg>
    <span className="font-bold text-xl">Uzence</span>
  </div>
);

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors border border-white/30 dark:border-white/50 dark:bg-white/20 dark:hover:bg-white/30"
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      {mode === 'light' ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary-700 to-tertiary-700 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              Enterprise-Grade Design System
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Uzence Design System
            </h1>
            <p className="text-xl mb-8 text-white leading-relaxed drop-shadow-md">
              A comprehensive design system for building beautiful, accessible, and consistent enterprise applications.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <Tag color="primary" variant="filled" className="bg-white/20 text-white border-white/30">React</Tag>
              <Tag color="secondary" variant="filled" className="bg-white/20 text-white border-white/30">TypeScript</Tag>
              <Tag color="tertiary" variant="filled" className="bg-white/20 text-white border-white/30">TailwindCSS</Tag>
              <Tag color="success" variant="filled" className="bg-white/20 text-white border-white/30">Accessible</Tag>
              <Tag color="info" variant="filled" className="bg-white/20 text-white border-white/30">Responsive</Tag>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="px-6 py-3 bg-white text-primary-800 border-2 border-white rounded-lg font-bold hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl"
                style={{ color: '#0044b3' }} /* Hardcoded bright blue color for maximum visibility */
              >
                Get Started
              </button>
              <button
                type="button"
                className="px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg font-bold hover:bg-white/20 transition-colors shadow-lg"
              >
                View Components
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-white/30 rounded-lg blur-xl opacity-75"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/30 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="h-20 w-20 bg-primary-500 rounded-full shadow-lg"></div>
                  </div>
                  <div className="p-6 bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="h-20 w-20 bg-secondary-500 rounded-full shadow-lg"></div>
                  </div>
                  <div className="p-6 bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="h-20 w-20 bg-tertiary-500 rounded-full shadow-lg"></div>
                  </div>
                  <div className="p-6 bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="h-20 w-20 bg-neutral-500 rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-24 bg-surface-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">Features</span>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-tertiary-600 dark:from-primary-400 dark:to-tertiary-400 bg-clip-text text-transparent">Key Features</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Our design system provides everything you need to build beautiful, consistent, and accessible user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-card dark:bg-neutral-800 p-8 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary-600 dark:text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Comprehensive Color System</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              A token-based color system with light and dark theme support, designed for WCAG compliance and visual harmony.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Light & dark mode support
              </li>
              <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                WCAG AA compliant
              </li>
              <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                CSS variables & Tailwind integration
              </li>
            </ul>
          </div>

          <div className="bg-surface-card dark:bg-neutral-800 p-8 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="w-14 h-14 bg-secondary-100 dark:bg-secondary-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-200 dark:group-hover:bg-secondary-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-secondary-600 dark:text-secondary-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">Data Display Components</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Versatile components for displaying information effectively, including tags, tooltips, and more.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Tags & badges
              </li>
              <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Interactive tooltips
              </li>
              <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Multiple variants & sizes
              </li>
            </ul>
          </div>

          <div className="bg-surface-card dark:bg-neutral-800 p-8 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="w-14 h-14 bg-tertiary-100 dark:bg-tertiary-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-tertiary-200 dark:group-hover:bg-tertiary-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-tertiary-600 dark:text-tertiary-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-tertiary-600 dark:group-hover:text-tertiary-400 transition-colors">Navigation Components</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Intuitive navigation components like top navigation bars and tabs for seamless user experience.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tertiary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Responsive navigation bars
              </li>
              <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tertiary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Animated tab components
              </li>
              <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tertiary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Mobile-friendly designs
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
            Explore all components
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const { mode } = useTheme();

  return (
    <div className="min-h-screen bg-surface-background text-text-primary">
      <TopNavBar
        logo={<Logo />}
        variant="primary"
        sticky
        actions={<ThemeToggle />}
        style={mode === 'dark' ? {
          backgroundColor: '#0044b3',
          backgroundImage: 'linear-gradient(to right, #002d8c, #0044b3)',
          color: '#ffffff'
        } : undefined}
      >
        <TopNavItem
          active={activeSection === 'introduction'}
          onClick={() => setActiveSection('introduction')}
        >
          Introduction
        </TopNavItem>
        <TopNavItem
          active={activeSection === 'colors'}
          onClick={() => setActiveSection('colors')}
        >
          Colors
        </TopNavItem>
        <TopNavItem
          active={activeSection === 'components'}
          onClick={() => setActiveSection('components')}
        >
          Components
        </TopNavItem>
      </TopNavBar>

      {activeSection === 'introduction' && (
        <>
          <Hero />
          <Features />
          <section className="py-16 bg-surface-foreground">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 text-center">About Uzence Design System</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>
                  The Uzence Design System is a collection of reusable components, guided by clear standards,
                  that can be assembled to build any number of applications. It provides a consistent, accessible,
                  and responsive user experience across all enterprise applications.
                </p>
                <p>
                  This design system focuses on three main areas:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 p-1 rounded-md mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span><strong>Color System:</strong> A token-based color system with light and dark theme support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 p-1 rounded-md mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                    </span>
                    <span><strong>Data Display Components:</strong> Components for displaying information effectively</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-tertiary-100 dark:bg-tertiary-900 text-tertiary-600 dark:text-tertiary-300 p-1 rounded-md mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span><strong>Navigation Components:</strong> Components for navigating through the application</span>
                  </li>
                </ul>
                <div className="bg-info-50 dark:bg-info-900/30 p-6 rounded-lg shadow-md mt-8 border border-info-200 dark:border-info-800">
                  <h3 className="text-xl font-semibold mb-4 flex items-center text-info-800 dark:text-info-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Accessibility First
                  </h3>
                  <p className="text-info-800 dark:text-info-300">
                    All components are built with accessibility in mind, following WCAG guidelines to ensure
                    they are usable by everyone, including people with disabilities. Each component includes:
                  </p>
                  <ul className="mt-2 space-y-1 text-info-800 dark:text-info-300">
                    <li>• Proper ARIA attributes</li>
                    <li>• Keyboard navigation support</li>
                    <li>• Sufficient color contrast</li>
                    <li>• Focus management</li>
                    <li>• Screen reader compatibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'colors' && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-tertiary-500 bg-clip-text text-transparent inline-block">Color System</h2>
            <ColorPalette />
          </div>
        </section>
      )}

      {activeSection === 'components' && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary-500 to-tertiary-500 bg-clip-text text-transparent inline-block">Components</h2>

            <Tabs>
              <TabList>
                <Tab id="data-display">Data Display</Tab>
                <Tab id="navigation">Navigation</Tab>
              </TabList>
              <TabPanels>
                <TabPanel id="data-display">
                  <div className="mt-8">
                    <Tabs variant="underlined">
                      <TabList>
                        <Tab id="tag">Tag</Tab>
                        <Tab id="tooltip">Tooltip</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel id="tag">
                          <div className="mt-6">
                            <TagDocumentation />
                          </div>
                        </TabPanel>
                        <TabPanel id="tooltip">
                          <div className="mt-6">
                            <TooltipDocumentation />
                          </div>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </div>
                </TabPanel>
                <TabPanel id="navigation">
                  <div className="mt-8">
                    <Tabs variant="underlined">
                      <TabList>
                        <Tab id="topnav">Top Navigation Bar</Tab>
                        <Tab id="tabs">Tabs</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel id="topnav">
                          <div className="mt-6">
                            <TopNavBarDocumentation />
                          </div>
                        </TabPanel>
                        <TabPanel id="tabs">
                          <div className="mt-6">
                            <TabsDocumentation />
                          </div>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </section>
      )}

      <footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-16" style={{ backgroundColor: mode === 'dark' ? '#030712' : '#111827', borderTop: mode === 'dark' ? '3px solid #1f2937' : 'none' }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Logo />
              <p className="mt-2 text-neutral-400">
                A comprehensive design system for enterprise applications
              </p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex space-x-4 mb-4">
                <Tooltip content="GitHub Repository">
                  <a href="#" className="text-white hover:text-primary-300 transition-colors" aria-label="GitHub Repository">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="sr-only">GitHub Repository</span>
                  </a>
                </Tooltip>
                <Tooltip content="Documentation">
                  <a href="#" className="text-white hover:text-primary-300 transition-colors" aria-label="Documentation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span className="sr-only">Documentation</span>
                  </a>
                </Tooltip>
              </div>
              <p className="text-neutral-400">
                &copy; {new Date().getFullYear()} Uzence Design System - Built with React, TypeScript, and TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const DesignSystemApp: React.FC = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};
