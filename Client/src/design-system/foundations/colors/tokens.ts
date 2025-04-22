/**
 * Color Tokens for Uzence Design System
 * 
 * This file defines all color tokens used throughout the application.
 * - Primary, Secondary, Tertiary Colors
 * - Neutral Colors (greys, whites, backgrounds, borders)
 * - Semantic Colors (Success, Info, Warning, Error)
 * - Surface & Background Layers
 */

export const colors = {
  // Primary Colors
  primary: {
    50: '#e6f1ff',
    100: '#cce3ff',
    200: '#99c7ff',
    300: '#66abff',
    400: '#338fff',
    500: '#0073ff', // Base primary color
    600: '#005cd9',
    700: '#0044b3',
    800: '#002d8c',
    900: '#001766',
  },

  // Secondary Colors
  secondary: {
    50: '#f0f4ff',
    100: '#e0e9ff',
    200: '#c2d3ff',
    300: '#a3bdff',
    400: '#85a7ff',
    500: '#6691ff', // Base secondary color
    600: '#5274cc',
    700: '#3d5799',
    800: '#293b66',
    900: '#141e33',
  },

  // Tertiary Colors
  tertiary: {
    50: '#f5f0ff',
    100: '#ebe0ff',
    200: '#d6c2ff',
    300: '#c2a3ff',
    400: '#ad85ff',
    500: '#9966ff', // Base tertiary color
    600: '#7a52cc',
    700: '#5c3d99',
    800: '#3d2966',
    900: '#1f1433',
  },

  // Neutral Colors
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280', // Base neutral color
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },

  // Semantic Colors
  success: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981', // Base success color
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },

  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Base info color
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b', // Base warning color
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444', // Base error color
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  // Surface & Background Layers
  surface: {
    background: '#ffffff',
    foreground: '#f9fafb',
    card: '#ffffff',
    cardHover: '#f3f4f6',
    cardActive: '#e5e7eb',
    border: '#e5e7eb',
    borderHover: '#d1d5db',
    divider: '#e5e7eb',
  },

  // Text Colors
  text: {
    primary: '#111827',
    secondary: '#4b5563',
    tertiary: '#6b7280',
    disabled: '#9ca3af',
    inverse: '#ffffff',
  },
};

// Dark mode colors
export const darkColors = {
  // Primary Colors (adjusted for dark mode)
  primary: {
    50: '#001766',
    100: '#002d8c',
    200: '#0044b3',
    300: '#005cd9',
    400: '#0073ff',
    500: '#338fff', // Base primary color in dark mode
    600: '#66abff',
    700: '#99c7ff',
    800: '#cce3ff',
    900: '#e6f1ff',
  },

  // Secondary Colors (adjusted for dark mode)
  secondary: {
    50: '#141e33',
    100: '#293b66',
    200: '#3d5799',
    300: '#5274cc',
    400: '#6691ff',
    500: '#85a7ff', // Base secondary color in dark mode
    600: '#a3bdff',
    700: '#c2d3ff',
    800: '#e0e9ff',
    900: '#f0f4ff',
  },

  // Tertiary Colors (adjusted for dark mode)
  tertiary: {
    50: '#1f1433',
    100: '#3d2966',
    200: '#5c3d99',
    300: '#7a52cc',
    400: '#9966ff',
    500: '#ad85ff', // Base tertiary color in dark mode
    600: '#c2a3ff',
    700: '#d6c2ff',
    800: '#ebe0ff',
    900: '#f5f0ff',
  },

  // Neutral Colors (adjusted for dark mode)
  neutral: {
    950: '#f9fafb',
    900: '#f3f4f6',
    800: '#e5e7eb',
    700: '#d1d5db',
    600: '#9ca3af',
    500: '#6b7280', // Base neutral color
    400: '#4b5563',
    300: '#374151',
    200: '#1f2937',
    100: '#111827',
    50: '#030712',
  },

  // Semantic Colors (adjusted for dark mode)
  success: {
    50: '#064e3b',
    100: '#065f46',
    200: '#047857',
    300: '#059669',
    400: '#10b981',
    500: '#34d399', // Base success color in dark mode
    600: '#6ee7b7',
    700: '#a7f3d0',
    800: '#d1fae5',
    900: '#ecfdf5',
  },

  info: {
    50: '#1e3a8a',
    100: '#1e40af',
    200: '#1d4ed8',
    300: '#2563eb',
    400: '#3b82f6',
    500: '#60a5fa', // Base info color in dark mode
    600: '#93c5fd',
    700: '#bfdbfe',
    800: '#dbeafe',
    900: '#eff6ff',
  },

  warning: {
    50: '#78350f',
    100: '#92400e',
    200: '#b45309',
    300: '#d97706',
    400: '#f59e0b',
    500: '#fbbf24', // Base warning color in dark mode
    600: '#fcd34d',
    700: '#fde68a',
    800: '#fef3c7',
    900: '#fffbeb',
  },

  error: {
    50: '#7f1d1d',
    100: '#991b1b',
    200: '#b91c1c',
    300: '#dc2626',
    400: '#ef4444',
    500: '#f87171', // Base error color in dark mode
    600: '#fca5a5',
    700: '#fecaca',
    800: '#fee2e2',
    900: '#fef2f2',
  },

  // Surface & Background Layers (adjusted for dark mode)
  surface: {
    background: '#111827',
    foreground: '#1f2937',
    card: '#1f2937',
    cardHover: '#374151',
    cardActive: '#4b5563',
    border: '#374151',
    borderHover: '#4b5563',
    divider: '#374151',
  },

  // Text Colors (adjusted for dark mode)
  text: {
    primary: '#f9fafb',
    secondary: '#e5e7eb',
    tertiary: '#d1d5db',
    disabled: '#6b7280',
    inverse: '#111827',
  },
};
