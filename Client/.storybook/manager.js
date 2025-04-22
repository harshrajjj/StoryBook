import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: 'Uzence Design System',
    brandUrl: 'https://github.com/harshrajjj/uzence-design-system',
    brandTarget: '_blank',
    colorPrimary: '#6366f1', // Primary color from your system
    colorSecondary: '#14b8a6', // Secondary color from your system
    appBg: '#000000', // Pure black background
    appContentBg: '#000000', // Pure black content background
    barBg: '#000000', // Pure black sidebar background
    barTextColor: '#ffffff', // White text
    textColor: '#ffffff', // White text
    textInverseColor: '#000000', // Black text for inverse elements
    appBorderColor: '#374151', // Border color
    appBorderRadius: 8, // Border radius
  },
});
