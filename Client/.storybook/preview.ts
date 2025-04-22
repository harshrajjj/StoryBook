import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/index.css'; // Import global styles
import '../src/design-system/index.css'; // Import design system styles
import { ThemeDecorator } from './ThemeDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
    layout: 'padded',
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  decorators: [
    ThemeDecorator,
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark dark-mode',
      },
      defaultTheme: 'dark',
    }),
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },
};

export default preview;