import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

/**
 * Sets up GSAP ScrollTrigger to watch all .step-marker elements.
 * Calls ref.updateLayers(step) when a marker enters the viewport.
 * Returns a cleanup function to kill all triggers.
 * @param {object} ref - React ref to CarAnimation (should have updateLayers)
 */
export function setupScrollTriggers(ref) {
  const markers = document.querySelectorAll('.step-marker');
  if (!markers.length) return () => {};

  const triggers = Array.from(markers).map(marker => {
    const step = marker.getAttribute('data-step') || 'unknown';
    return ScrollTrigger.create({
      trigger: marker,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        if (ref && typeof ref.updateLayers === 'function') {
          ref.updateLayers(step);
        }
      },
      onEnterBack: () => {
        if (ref && typeof ref.updateLayers === 'function') {
          ref.updateLayers(step);
        }
      },
      // Optionally, you can add markers: true for debugging
    });
  });

  // Cleanup function
  return () => {
    triggers.forEach(trigger => trigger.kill());
  };
} 