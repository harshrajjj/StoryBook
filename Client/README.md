# Uzence Design System

![Uzence Design System](https://via.placeholder.com/800x400?text=Uzence+Design+System)

A comprehensive design system built with React, TypeScript, and TailwindCSS, documented with Storybook. This design system provides a collection of reusable components, guided by clear standards, that can be assembled to build enterprise applications.

## 🚀 Features

### Color System
- Token-based color system with light and dark theme support
- Primary, Secondary, Tertiary color palettes
- Neutral colors for backgrounds, text, and borders
- Semantic colors (success, error, warning, info)
- WCAG-compliant contrast ratios

### Data Display Components
- **Tags/Badges**: Label, categorize, or organize items
  - Multiple variants: solid, outlined, soft
  - Different sizes and colors
  - Dismissible and clickable options

- **Tooltips**: Display informative text on hover
  - Multiple placements: top, right, bottom, left
  - Different variants: light, dark, primary
  - Rich content support

### Navigation Components
- **Top Navigation Bar**: Header navigation for applications
  - Multiple variants and sizes
  - Mobile-responsive with hamburger menu
  - Customizable logo and actions

- **Tabs**: Organize content into separate views
  - Multiple variants: filled, outlined, underlined
  - Horizontal and vertical orientations
  - Keyboard navigation support

## 🛠️ Tech Stack

- **React**: UI component library
- **TypeScript**: Type-safe JavaScript
- **TailwindCSS**: Utility-first CSS framework
- **Storybook**: Component documentation and testing
- **Vite**: Fast build tool and development server

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/uzence-design-system.git

# Navigate to the project directory
cd uzence-design-system

# Install dependencies
npm install

# Start the development server
npm run dev

# Start Storybook
npm run storybook
```

## 📚 Documentation

The design system is fully documented using Storybook. To view the documentation:

```bash
npm run storybook
```

This will start the Storybook server and open it in your default browser at [http://localhost:6006](http://localhost:6006).

### Documentation Structure

Each component in the design system is documented with:

- Component description and features
- Props/API reference
- Usage examples
- Variants and states
- Accessibility notes
- Do's and Don'ts

## 🌙 Dark Mode Support

All components support both light and dark modes. The design system uses CSS variables and TailwindCSS's dark mode feature to provide a seamless experience in both themes.

## ♿ Accessibility

Accessibility is a core principle of this design system. All components are built with accessibility in mind:

- WCAG 2.1 AA compliant color contrast
- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## 🧪 Testing

The design system includes tests for components using Storybook's test addon:

```bash
npm run test-storybook
```

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
