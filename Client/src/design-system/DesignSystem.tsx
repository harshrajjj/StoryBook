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
      className="flex items-center px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
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

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="min-h-screen bg-surface-background text-text-primary">
      <TopNavBar
        logo={<Logo />}
        variant="primary"
        sticky
        actions={<ThemeToggle />}
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

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {activeSection === 'introduction' && (
          <section className="mb-16 pt-8">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
              <div className="md:w-1/2">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-tertiary-500 bg-clip-text text-transparent">
                  Uzence Design System
                </h1>
                <p className="text-xl mb-8 text-neutral-600 dark:text-neutral-300">
                  A comprehensive design system for building beautiful, accessible, and consistent enterprise applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Tag color="primary" variant="filled">React</Tag>
                  <Tag color="secondary" variant="filled">TypeScript</Tag>
                  <Tag color="tertiary" variant="filled">TailwindCSS</Tag>
                  <Tag color="success" variant="filled">Accessible</Tag>
                  <Tag color="info" variant="filled">Responsive</Tag>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-tertiary-500 rounded-lg blur opacity-75"></div>
                  <div className="relative bg-surface-card dark:bg-neutral-800 p-6 rounded-lg shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <div className="h-16 w-16 bg-primary-500 rounded-full"></div>
                      </div>
                      <div className="p-4 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center">
                        <div className="h-16 w-16 bg-secondary-500 rounded-full"></div>
                      </div>
                      <div className="p-4 bg-tertiary-100 dark:bg-tertiary-900 rounded-lg flex items-center justify-center">
                        <div className="h-16 w-16 bg-tertiary-500 rounded-full"></div>
                      </div>
                      <div className="p-4 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                        <div className="h-16 w-16 bg-neutral-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
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
              <div className="bg-surface-card dark:bg-neutral-800 p-6 rounded-lg shadow-md mt-8 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-info-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Accessibility First
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  All components are built with accessibility in mind, following WCAG guidelines to ensure
                  they are usable by everyone, including people with disabilities. Each component includes:
                </p>
                <ul className="mt-2 space-y-1 text-neutral-600 dark:text-neutral-300">
                  <li>• Proper ARIA attributes</li>
                  <li>• Keyboard navigation support</li>
                  <li>• Sufficient color contrast</li>
                  <li>• Focus management</li>
                  <li>• Screen reader compatibility</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'colors' && (
          <section className="mb-12 pt-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-tertiary-500 bg-clip-text text-transparent inline-block">Color System</h2>
            <ColorPalette />
          </section>
        )}

        {activeSection === 'components' && (
          <section className="pt-8">
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
          </section>
        )}
      </main>

      <footer className="bg-neutral-800 text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
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

export const DesignSystem: React.FC = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};
