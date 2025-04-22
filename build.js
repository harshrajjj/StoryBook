const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Storybook build process...');

try {
  // Create dist directory
  console.log('Creating dist directory...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }
  fs.mkdirSync('dist', { recursive: true });

  // Navigate to the Client directory
  console.log('Changing to Client directory...');
  process.chdir(path.join(process.cwd(), 'Client'));
  console.log('Current directory:', process.cwd());

  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Build Storybook
  console.log('Building Storybook...');
  execSync('npm run build-storybook', { stdio: 'inherit' });

  // Go back to the root directory
  process.chdir(path.join(process.cwd(), '..'));
  console.log('Current directory (root):', process.cwd());

  // Create a simple index.html that redirects to Storybook
  console.log('Creating index.html...');
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="0;url=./storybook/index.html">
  <title>Uzence Design System</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #1a1a1a;
      color: white;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    a {
      color: #0070f3;
      text-decoration: none;
    }
  </style>
  <script>
    window.location.href = "./storybook/index.html";
  </script>
</head>
<body>
  <h1>Uzence Design System</h1>
  <p>Redirecting to <a href="./storybook/index.html">Storybook</a>...</p>
</body>
</html>`;

  fs.writeFileSync(path.join(process.cwd(), 'dist/index.html'), indexHtml);
  
  // Create a 404.html file that also redirects to Storybook
  fs.writeFileSync(path.join(process.cwd(), 'dist/404.html'), indexHtml);
  
  // Copy Storybook files to dist/storybook
  console.log('Copying Storybook files to dist/storybook...');
  const storybookDest = path.join(process.cwd(), 'dist/storybook');
  if (!fs.existsSync(storybookDest)) {
    fs.mkdirSync(storybookDest, { recursive: true });
  }
  
  const copyDir = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
       }
    }
  };
  
  copyDir(path.join(process.cwd(), 'Client/storybook-static'), storybookDest);
  console.log('Files copied successfully to dist/storybook');

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
