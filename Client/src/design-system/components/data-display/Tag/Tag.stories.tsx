import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import '../../../index.css'; // Import CSS

const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: `
# Tag Component

Tags are used to label, categorize, or organize items using keywords that describe them.

## Features

- Multiple variants: filled, outlined, subtle
- Different sizes: small, medium, large
- Various color options
- Optional icon support
- Dismissible option

## Accessibility

- Proper contrast ratios for all variants and colors
- Keyboard navigation support
- Appropriate ARIA attributes
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'subtle'],
      description: 'The visual style variant of the tag',
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error', 'neutral'],
      description: 'The color of the tag',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the tag',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    removable: {
      control: 'boolean',
      description: 'Whether the tag can be removed',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tag is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'The content of the tag',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
    onRemove: {
      action: 'removed',
      description: 'Function called when the tag is removed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Tag',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tag variant="filled">Filled</Tag>
      <Tag variant="outlined">Outlined</Tag>
      <Tag variant="subtle">Subtle</Tag>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tag color="primary">Primary</Tag>
      <Tag color="secondary">Secondary</Tag>
      <Tag color="tertiary">Tertiary</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="error">Error</Tag>
      <Tag color="info">Info</Tag>
      <Tag color="neutral">Neutral</Tag>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Tag size="small">Small</Tag>
      <Tag size="medium">Medium</Tag>
      <Tag size="large">Large</Tag>
    </div>
  ),
};

export const Removable: Story = {
  args: {
    children: 'Removable Tag',
    removable: true,
    onRemove: () => console.log('Tag removed'),
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tag
        icon={<span className="mr-1">🔥</span>}
        color="warning"
      >
        Hot
      </Tag>
      <Tag
        icon={<span className="mr-1">✅</span>}
        color="success"
      >
        Done
      </Tag>
      <Tag
        icon={<span className="mr-1">⚠️</span>}
        color="error"
      >
        Alert
      </Tag>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Tag',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Filled Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Tag variant="filled" color="primary">Primary</Tag>
          <Tag variant="filled" color="secondary">Secondary</Tag>
          <Tag variant="filled" color="tertiary">Tertiary</Tag>
          <Tag variant="filled" color="success">Success</Tag>
          <Tag variant="filled" color="warning">Warning</Tag>
          <Tag variant="filled" color="error">Error</Tag>
          <Tag variant="filled" color="info">Info</Tag>
          <Tag variant="filled" color="neutral">Neutral</Tag>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Outlined Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Tag variant="outlined" color="primary">Primary</Tag>
          <Tag variant="outlined" color="secondary">Secondary</Tag>
          <Tag variant="outlined" color="tertiary">Tertiary</Tag>
          <Tag variant="outlined" color="success">Success</Tag>
          <Tag variant="outlined" color="warning">Warning</Tag>
          <Tag variant="outlined" color="error">Error</Tag>
          <Tag variant="outlined" color="info">Info</Tag>
          <Tag variant="outlined" color="neutral">Neutral</Tag>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Subtle Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Tag variant="subtle" color="primary">Primary</Tag>
          <Tag variant="subtle" color="secondary">Secondary</Tag>
          <Tag variant="subtle" color="tertiary">Tertiary</Tag>
          <Tag variant="subtle" color="success">Success</Tag>
          <Tag variant="subtle" color="warning">Warning</Tag>
          <Tag variant="subtle" color="error">Error</Tag>
          <Tag variant="subtle" color="info">Info</Tag>
          <Tag variant="subtle" color="neutral">Neutral</Tag>
        </div>
      </div>
    </div>
  ),
};
