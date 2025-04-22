# Uzence Design System

A comprehensive design system for enterprise applications with pure black dark mode, built with React, TypeScript, and TailwindCSS, documented with Storybook.

## Live Demo

The design system is deployed to Vercel and available at:

[https://storybook-harshrajjj.vercel.app](https://storybook-harshrajjj.vercel.app)

## Project Structure

This repository contains:

- A React application with Storybook in the Client directory
- A build script that builds Storybook and prepares it for deployment
- Configuration for Vercel deployment

## Deployment

This project is configured for easy deployment to Vercel:

1. Fork or clone this repository
2. Connect your Vercel account to your GitHub repository
3. Use the following deployment settings:
   - Framework Preset: Select **Other**
   - Root Directory: `./` (root of the project)
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click Deploy

The build process will:
1. Install dependencies in the Client directory
2. Build Storybook
3. Create a redirect from the root to the Storybook
4. Copy all Storybook files to the dist/storybook directory

## License

MIT
