import type { Meta, StoryObj } from '@storybook/react';
import { ColorPalette } from './ColorPalette';

const meta: Meta<typeof ColorPalette> = {
  title: 'Foundations/Color System',
  component: ColorPalette,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const LightMode: Story = {
  args: {
    isDarkMode: false,
  },
};

export const DarkMode: Story = {
  args: {
    isDarkMode: true,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
      ],
    },
    docs: {
      canvas: {
        backgroundColor: '#000000',
      },
    },
    theme: 'dark',
  },
};
