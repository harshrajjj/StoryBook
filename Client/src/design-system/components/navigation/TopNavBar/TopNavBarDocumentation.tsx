import React, { useState } from 'react';
import { TopNavBar, TopNavItem, TopNavBarVariant, TopNavBarSize } from './TopNavBar';

export const TopNavBarDocumentation: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');
  const variants: TopNavBarVariant[] = ['primary', 'neutral', 'transparent'];
  const sizes: TopNavBarSize[] = ['small', 'medium', 'large'];

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

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

  const NavItems = () => (
    <>
      <TopNavItem
        active={activeItem === 'home'}
        onClick={() => handleItemClick('home')}
      >
        Home
      </TopNavItem>
      <TopNavItem
        active={activeItem === 'products'}
        onClick={() => handleItemClick('products')}
      >
        Products
      </TopNavItem>
      <TopNavItem
        active={activeItem === 'services'}
        onClick={() => handleItemClick('services')}
      >
        Services
      </TopNavItem>
      <TopNavItem
        active={activeItem === 'about'}
        onClick={() => handleItemClick('about')}
      >
        About
      </TopNavItem>
      <TopNavItem
        active={activeItem === 'contact'}
        onClick={() => handleItemClick('contact')}
      >
        Contact
      </TopNavItem>
    </>
  );

  const Actions = () => (
    <div className="flex items-center space-x-2">
      <button type="button" className="px-3 py-1 bg-white text-primary-600 rounded-md text-sm font-medium border border-white hover:bg-opacity-90 transition-colors shadow-sm">
        Sign In
      </button>
      <button type="button" className="px-3 py-1 bg-white text-primary-600 rounded-md text-sm font-medium border border-white hover:bg-opacity-90 transition-colors shadow-sm">
        Sign Up
      </button>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 p-8">Top Navigation Bar Component</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 px-8">Overview</h2>
        <p className="mb-8 px-8">
          The Top Navigation Bar component provides a consistent navigation experience across the application.
          It supports various configurations including different variants, sizes, and responsive behavior.
        </p>

        <div className="mb-8">
          <TopNavBar
            logo={<Logo />}
            actions={<Actions />}
          >
            <NavItems />
          </TopNavBar>
        </div>
      </section>

      <section className="mb-12 px-8">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="mb-4">
          The Top Navigation Bar comes in three visual variants: primary, neutral, and transparent.
        </p>

        <div className="space-y-8 mt-8">
          {variants.map(variant => (
            <div key={variant} className="mb-8">
              <h3 className="text-lg font-medium mb-2 capitalize">{variant}</h3>
              <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                <TopNavBar
                  logo={<Logo />}
                  variant={variant}
                >
                  <NavItems />
                </TopNavBar>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 px-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="mb-4">
          The Top Navigation Bar is available in three sizes: small, medium, and large.
        </p>

        <div className="space-y-8 mt-8">
          {sizes.map(size => (
            <div key={size} className="mb-8">
              <h3 className="text-lg font-medium mb-2 capitalize">{size}</h3>
              <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                <TopNavBar
                  logo={<Logo />}
                  size={size}
                >
                  <NavItems />
                </TopNavBar>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 px-8">
        <h2 className="text-2xl font-semibold mb-4">With Actions</h2>
        <p className="mb-4">
          The Top Navigation Bar can include action buttons on the right side.
        </p>

        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden mt-8">
          <TopNavBar
            logo={<Logo />}
            actions={<Actions />}
          >
            <NavItems />
          </TopNavBar>
        </div>
      </section>

      <section className="mb-12 px-8">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <p className="mb-4">
          Navigation items can include icons for better visual recognition.
        </p>

        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden mt-8">
          <TopNavBar logo={<Logo />}>
            <TopNavItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              }
              active
            >
              Home
            </TopNavItem>
            <TopNavItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              }
            >
              Users
            </TopNavItem>
            <TopNavItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              }
            >
              Help
            </TopNavItem>
            <TopNavItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              }
            >
              Settings
            </TopNavItem>
          </TopNavBar>
        </div>
      </section>

      <section className="mb-12 px-8">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <p className="mb-4">
          Navigation items can be in different states, such as active or disabled.
        </p>

        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden mt-8">
          <TopNavBar logo={<Logo />}>
            <TopNavItem active>Active</TopNavItem>
            <TopNavItem>Normal</TopNavItem>
            <TopNavItem disabled>Disabled</TopNavItem>
          </TopNavBar>
        </div>
      </section>

      <section className="mb-12 px-8">
        <h2 className="text-2xl font-semibold mb-4">Responsive Behavior</h2>
        <p className="mb-4">
          The Top Navigation Bar is fully responsive and adapts to different screen sizes.
          On mobile devices, it collapses into a hamburger menu.
        </p>

        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden mt-8">
          <TopNavBar
            logo={<Logo />}
            actions={<Actions />}
          >
            <NavItems />
          </TopNavBar>
        </div>
        <p className="mt-4 text-sm text-neutral-500">
          Resize your browser window to see the responsive behavior.
        </p>
      </section>

      <section className="mb-12 px-8">
        <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Accessibility Considerations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>The navigation bar uses semantic HTML elements for proper structure</li>
            <li>Mobile menu toggle button has appropriate ARIA attributes</li>
            <li>Active state is visually distinct and programmatically indicated</li>
            <li>Keyboard navigation is fully supported</li>
            <li>Focus states are clearly visible</li>
            <li>Color contrast meets WCAG AA standards</li>
          </ul>
        </div>
      </section>

      <section className="mb-12 px-8">
        <h2 className="text-2xl font-semibold mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 text-success-600 dark:text-success-400">Do's</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use consistent navigation items across pages</li>
              <li>Keep navigation labels clear and concise</li>
              <li>Use icons to enhance recognition when appropriate</li>
              <li>Clearly indicate the active/current page</li>
              <li>Group related navigation items together</li>
              <li>Consider using sticky navigation for long pages</li>
            </ul>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 text-error-600 dark:text-error-400">Don'ts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Don't include too many navigation items</li>
              <li>Don't use vague or similar labels that could confuse users</li>
              <li>Don't hide important navigation items in dropdown menus</li>
              <li>Don't use different navigation patterns across the application</li>
              <li>Don't use navigation items for actions (use buttons instead)</li>
              <li>Don't change the order of navigation items between pages</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-8 pb-12">
        <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
        <div className="overflow-x-auto">
          <h3 className="text-xl font-medium mb-4">TopNavBar Props</h3>
          <table className="min-w-full border-collapse mb-8">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-800">
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Prop</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Type</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Default</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">logo</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The logo or brand element to display</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">children</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The navigation items to display</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">actions</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Optional actions to display on the right side</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">variant</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'primary' | 'neutral' | 'transparent'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'primary'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The visual style variant of the navigation bar</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">size</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'small' | 'medium' | 'large'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">'medium'</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The size of the navigation bar</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">sticky</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">boolean</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">false</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Whether the navigation bar is sticky (fixed to the top)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">className</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">string</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">''</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Additional CSS class names</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">mobileMenu</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">boolean</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">true</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Whether to show a mobile menu button on small screens</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-medium mb-4">TopNavItem Props</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-800">
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Prop</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Type</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Default</th>
                <th className="py-3 px-4 text-left border border-neutral-200 dark:border-neutral-700">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">children</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">The content of the navigation item</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">active</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">boolean</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">false</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Whether the item is currently active</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">disabled</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">boolean</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">false</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Whether the item is disabled</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">icon</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">ReactNode</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Optional icon to display before the item content</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">onClick</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">{'() => void'}</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Callback fired when the item is clicked</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">href</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">string</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">-</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">URL for the item if it's a link</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">className</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">string</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">''</td>
                <td className="py-3 px-4 border border-neutral-200 dark:border-neutral-700">Additional CSS class names</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
