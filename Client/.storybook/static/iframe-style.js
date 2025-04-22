// Force BLACK background on Storybook iframe
(function() {
  // Apply immediately
  function forceBlackBackground() {
    // Get the iframe
    const iframe = document.getElementById('storybook-preview-iframe');
    if (iframe) {
      // Set iframe background to black
      iframe.style.backgroundColor = '#000000';
      iframe.style.background = '#000000';
      
      try {
        // Set iframe content background to black
        if (iframe.contentDocument) {
          // Set html and body to black
          iframe.contentDocument.documentElement.style.backgroundColor = '#000000';
          iframe.contentDocument.documentElement.style.background = '#000000';
          iframe.contentDocument.body.style.backgroundColor = '#000000';
          iframe.contentDocument.body.style.background = '#000000';
          
          // Add dark mode classes
          iframe.contentDocument.documentElement.classList.add('dark');
          iframe.contentDocument.documentElement.classList.add('dark-mode');
          iframe.contentDocument.body.classList.add('dark');
          iframe.contentDocument.body.classList.add('dark-mode');
          
          // Set all elements to black
          const elements = iframe.contentDocument.querySelectorAll('*');
          elements.forEach(el => {
            if (!el.classList.contains('w-16') && !el.classList.contains('h-16')) {
              el.style.backgroundColor = '#000000';
              el.style.background = '#000000';
            }
          });
        }
      } catch (e) {
        // Ignore cross-origin errors
      }
    }
  }
  
  // Run immediately
  forceBlackBackground();
  
  // Run every 100ms
  setInterval(forceBlackBackground, 100);
  
  // Run on load
  window.addEventListener('load', forceBlackBackground);
  
  // Run on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', forceBlackBackground);
})();
