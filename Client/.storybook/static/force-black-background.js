// Force BLACK background on all elements in dark mode
(function() {
  // Function to apply black background
  function forceBlackBackground() {
    // Check if dark mode is active
    const isDarkMode = document.documentElement.classList.contains('dark') ||
                      document.documentElement.classList.contains('dark-mode') ||
                      document.body.classList.contains('dark') ||
                      document.body.classList.contains('dark-mode');

    if (isDarkMode) {
      // Apply to document
      document.documentElement.style.backgroundColor = '#000000';
      document.documentElement.style.background = '#000000';
      document.body.style.backgroundColor = '#000000';
      document.body.style.background = '#000000';

      // Apply to all elements
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        if (!el.classList.contains('w-16') && !el.classList.contains('h-16')) {
          el.style.backgroundColor = '#000000';
          el.style.background = '#000000';
        }
      });

      // Apply to all iframes
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        iframe.style.backgroundColor = '#000000';
        iframe.style.background = '#000000';

        try {
          if (iframe.contentDocument) {
            iframe.contentDocument.documentElement.style.backgroundColor = '#000000';
            iframe.contentDocument.documentElement.style.background = '#000000';
            iframe.contentDocument.body.style.backgroundColor = '#000000';
            iframe.contentDocument.body.style.background = '#000000';

            // Apply to all elements in iframe
            const iframeElements = iframe.contentDocument.querySelectorAll('*');
            iframeElements.forEach(el => {
              if (!el.classList.contains('w-16') && !el.classList.contains('h-16')) {
                el.style.backgroundColor = '#000000';
                el.style.background = '#000000';
              }
            });
          }
        } catch (e) {
          // Ignore cross-origin errors
        }
      });

      // Force black on specific Storybook elements
      const storyElements = [
        '.sb-show-main',
        '.docs-story',
        '#storybook-root',
        '.sb-main-padded',
        '.sb-preview-content',
        '.innerZoomElementWrapper',
        '.os-content',
        '.os-viewport',
        '.os-padding'
      ];

      storyElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          el.style.backgroundColor = '#000000';
          el.style.background = '#000000';
        });
      });
    }
  }

  // Apply immediately
  forceBlackBackground();

  // Apply every 500ms
  setInterval(forceBlackBackground, 500);

  // Apply on load
  window.addEventListener('load', forceBlackBackground);

  // Apply on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', forceBlackBackground);
})();
