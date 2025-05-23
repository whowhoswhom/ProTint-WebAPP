import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function CarAnimation() {
  const bodyRef = useRef(null);
  const frontWheelRef = useRef(null);
  const rearWheelRef = useRef(null);
  const windowsRef = useRef(null);
  const headlightsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quick fade-in of the whole container for a subtle flicker on load
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power1.out' }
      );
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: true,
          pin: true,
        },
      });

      tl
        .from(bodyRef.current, { opacity: 0, y: 50, duration: 0.6 })
        .from(windowsRef.current, { opacity: 0, duration: 0.5 }, '+=0.1')
        .from(
          rearWheelRef.current,
          { x: -200, opacity: 0, duration: 0.6 },
          '-=0.2'
        )
        .from(frontWheelRef.current, { x: 200, opacity: 0, duration: 0.6 }, '<')
        .to(bodyRef.current, { y: -30, duration: 0.5 })
        .from(headlightsRef.current, { opacity: 0, duration: 0.2, repeat: 1, yoyo: true }, '-=0.2');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center min-h-[60vh] w-full bg-neutral-900 rounded-lg"
    >
      <svg
        viewBox="0 0 800 300"
        style={{ width: '90vw', maxWidth: 800, height: 'auto', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rear Wheel */}
        <g ref={rearWheelRef} id="rear-wheel">
          <ellipse cx="170" cy="240" rx="48" ry="48" fill="#222" stroke="#444" strokeWidth="8" />
          <circle cx="170" cy="240" r="18" fill="#444" />
        </g>
        {/* Front Wheel */}
        <g ref={frontWheelRef} id="front-wheel">
          <ellipse cx="630" cy="240" rx="48" ry="48" fill="#222" stroke="#444" strokeWidth="8" />
          <circle cx="630" cy="240" r="18" fill="#444" />
        </g>
        {/* Car Body */}
        <g ref={bodyRef} id="car-body">
          <rect x="120" y="120" width="560" height="80" rx="32" fill="#e5e7eb" stroke="#222" strokeWidth="6" />
          <rect x="180" y="100" width="440" height="60" rx="24" fill="#fff" stroke="#222" strokeWidth="4" />
          {/* Hood */}
          <rect x="120" y="120" width="120" height="40" rx="12" fill="#222" opacity="0.7" />
          {/* Spoiler */}
          <rect x="650" y="100" width="60" height="12" rx="4" fill="#222" />
        </g>
        {/* Windows */}
        <g ref={windowsRef} id="windows">
          <rect x="260" y="110" width="180" height="40" rx="10" fill="#111" opacity="0.6" />
          <rect x="460" y="110" width="120" height="40" rx="10" fill="#111" opacity="0.6" />
        </g>
        {/* Headlights */}
        <g ref={headlightsRef} id="headlights">
          <ellipse cx="120" cy="150" rx="12" ry="6" fill="#fffbe6" opacity="0.8" />
          <ellipse cx="680" cy="150" rx="12" ry="6" fill="#fffbe6" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
