/**
 * Sets up IntersectionObserver to watch all .step-marker elements.
 * Calls ref.updateLayers(step) when a marker enters the viewport.
 * Returns a cleanup function to disconnect the observer.
 * @param {object} ref - React ref to CarAnimation (should have updateLayers)
 */
export function setupScrollTriggers(ref) {
  const markers = document.querySelectorAll('.step-marker');
  if (!markers.length) return () => {};

  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const step = entry.target.getAttribute('data-step') || 'unknown';
          if (ref && typeof ref.updateLayers === 'function') {
            ref.updateLayers(step);
          }
        }
      });
    },
    {
      threshold: 0.5, // Marker is considered active when 50% visible
    }
  );

  markers.forEach(marker => observer.observe(marker));

  // Cleanup function
  return () => {
    observer.disconnect();
  };
} 