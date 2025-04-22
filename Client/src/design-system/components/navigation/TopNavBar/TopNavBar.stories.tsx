import type { Meta, StoryObj } from '@storybook/react';
import { TopNavBar } from './TopNavBar';

const meta: Meta<typeof TopNavBar> = {
  title: 'Navigation/TopNavBar',
  component: TopNavBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# TopNavBar Component

The TopNavBar component provides a navigation header for your application.

## Features

- Multiple variants: primary, secondary, neutral
- Different sizes: small, medium, large
- Sticky option
- Mobile menu support
- Customizable logo and actions

## Accessibility

- Proper ARIA attributes
- Keyboard navigation support
- Sufficient color contrast
- Mobile-friendly design
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'neutral'],
      description: 'The visual style variant of the navigation bar',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the navigation bar',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    sticky: {
      control: 'boolean',
      description: 'Whether the navigation bar is sticky (fixed to the top)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    mobileMenu: {
      control: 'boolean',
      description: 'Whether to show a mobile menu button on small screens',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
    logo: {
      description: 'The logo or brand element to display',
    },
    children: {
      description: 'The navigation items to display',
    },
    actions: {
      description: 'Optional actions to display on the right side',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopNavBar>;

const Logo = () => (
  <div className="flex items-center">
    <span className="text-xl font-bold">Uzence</span>
  </div>
);

const NavItems = () => (
  <>
    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10">Home</a>
    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10">Products</a>
    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10">Services</a>
    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10">About</a>
    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10">Contact</a>
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

export const Default: Story = {
  args: {
    logo: <Logo />,
    children: <NavItems />,
    actions: <Actions />,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Primary Variant</h3>
        <TopNavBar
          logo={<Logo />}
          variant="primary"
        >
          <NavItems />
        </TopNavBar>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Neutral Variant</h3>
        <TopNavBar
          logo={<Logo />}
          variant="neutral"
        >
          <NavItems />
        </TopNavBar>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Transparent Variant</h3>
        <TopNavBar
          logo={<Logo />}
          variant="transparent"
        >
          <NavItems />
        </TopNavBar>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Small Size</h3>
        <TopNavBar
          logo={<Logo />}
          size="small"
          variant="primary"
        >
          <NavItems />
        </TopNavBar>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Medium Size</h3>
        <TopNavBar
          logo={<Logo />}
          size="medium"
          variant="primary"
        >
          <NavItems />
        </TopNavBar>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Large Size</h3>
        <TopNavBar
          logo={<Logo />}
          size="large"
          variant="primary"
        >
          <NavItems />
        </TopNavBar>
      </div>
    </div>
  ),
};

export const WithActions: Story = {
  args: {
    logo: <Logo />,
    children: <NavItems />,
    actions: <Actions />,
    variant: 'primary',
  },
};

export const Sticky: Story = {
  args: {
    logo: <Logo />,
    children: <NavItems />,
    actions: <Actions />,
    variant: 'primary',
    sticky: true,
  },
};

export const WithoutMobileMenu: Story = {
  args: {
    logo: <Logo />,
    children: <NavItems />,
    actions: <Actions />,
    variant: 'primary',
    mobileMenu: false,
  },
};
