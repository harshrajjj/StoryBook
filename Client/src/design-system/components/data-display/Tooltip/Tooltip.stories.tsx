import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import './Tooltip.css';
import '../../../index.css';

const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `
# Tooltip Component

Tooltips display informative text when users hover over, focus on, or tap an element.

## Features

- Multiple placements: top, right, bottom, left
- Different variants: light, dark, primary
- Various sizes: small, medium, large
- Rich content support
- Customizable arrow
- Accessibility support

## Accessibility

- Tooltips are accessible via keyboard focus
- Proper ARIA attributes
- Sufficient color contrast
- Appropriate delays to prevent accidental triggering
`,
      },
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'The content to display in the tooltip',
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The placement of the tooltip relative to the trigger element',
      table: {
        defaultValue: { summary: 'top' },
      },
    },
    variant: {
      control: 'select',
      options: ['light', 'dark', 'primary'],
      description: 'The visual style variant of the tooltip',
      table: {
        defaultValue: { summary: 'dark' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the tooltip',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    arrow: {
      control: 'boolean',
      description: 'Whether to show an arrow pointing to the trigger element',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tooltip is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: 'The element that triggers the tooltip',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <button type="button" className="px-4 py-2 bg-gray-800 text-white rounded-md">Hover me</button>,
  },
  render: (args) => (
    <div className="p-16 flex justify-center">
      <Tooltip {...args} />
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="flex flex-wrap justify-center gap-8 p-16">
      <Tooltip
        content="Top tooltip"
        placement="top"
        variant="primary"
      >
        <button type="button" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-bold border-2 border-black">
          Top
        </button>
      </Tooltip>

      <Tooltip
        content="Right tooltip"
        placement="right"
        variant="primary"
      >
        <button type="button" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-bold border-2 border-black">
          Right
        </button>
      </Tooltip>

      <Tooltip
        content="Bottom tooltip"
        placement="bottom"
        variant="primary"
      >
        <button type="button" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-bold border-2 border-black">
          Bottom
        </button>
      </Tooltip>

      <Tooltip
        content="Left tooltip"
        placement="left"
        variant="primary"
      >
        <button type="button" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-bold border-2 border-black">
          Left
        </button>
      </Tooltip>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      <Tooltip
        content="Light variant"
        variant="light"
      >
        <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-bold border-2 border-black">
          Light
        </button>
      </Tooltip>

      <Tooltip
        content="Dark variant"
        variant="dark"
      >
        <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-bold border-2 border-black">
          Dark
        </button>
      </Tooltip>

      <Tooltip
        content="Primary variant"
        variant="primary"
      >
        <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-bold border-2 border-black">
          Primary
        </button>
      </Tooltip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      <Tooltip
        content="Small size tooltip"
        size="small"
        variant="primary"
      >
        <button type="button" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-bold border-2 border-black">
          Small
        </button>
      </Tooltip>

      <Tooltip
        content="Medium size tooltip"
        size="medium"
        variant="primary"
      >
        <button type="button" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-bold border-2 border-black">
          Medium
        </button>
      </Tooltip>

      <Tooltip
        content="Large size tooltip"
        size="large"
        variant="primary"
      >
        <button type="button" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-bold border-2 border-black">
          Large
        </button>
      </Tooltip>
    </div>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <div className="flex justify-center p-8">
      <Tooltip
        content="Product Features: Interactive UI, Real-time Updates, Mobile Responsive"
        variant="light"
        size="large"
      >
        <button type="button" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-bold border-2 border-black">
          Product Features
        </button>
      </Tooltip>
    </div>
  ),
};

export const WithoutArrow: Story = {
  render: () => (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      <Tooltip
        content="This tooltip has an arrow"
        arrow={true}
        variant="primary"
      >
        <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-bold border-2 border-black">
          With Arrow
        </button>
      </Tooltip>

      <Tooltip
        content="This tooltip has no arrow"
        arrow={false}
        variant="primary"
      >
        <button type="button" className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors font-bold border-2 border-black">
          No Arrow
        </button>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
    children: <button type="button" className="px-4 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed">Disabled</button>,
  },
};
