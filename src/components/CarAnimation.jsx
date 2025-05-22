import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CarAnimation = forwardRef((props, ref) => {
  const bodyRef = useRef(null);
  const frontWheelRef = useRef(null);
  const rearWheelRef = useRef(null);
  const windowsRef = useRef(null);
  const headlightsRef = useRef(null);
  const containerRef = useRef(null);
  const timeline = useRef(null);
  
  useImperativeHandle(ref, () => ({
    updateLayers: (step) => {
      if (!timeline.current) return;
      const stepMap = {
        'wheels': 0.25,
        'body': 0.5,
        'windows': 0.75,
        'headlights': 1.0,
      };
      if (stepMap[step] !== undefined) {
        timeline.current.tweenTo(timeline.current.duration() * stepMap[step]);
      }
    },
  }));

  useEffect(() => {
    // GSAP timeline for car build
    timeline.current = gsap.timeline({ paused: true })
      .fromTo(frontWheelRef.current, { x: '-100px', opacity: 0 }, { x: '0px', opacity: 1, duration: 0.5, ease: 'power2.out' })
      .fromTo(rearWheelRef.current, { x: '100px', opacity: 0 }, { x: '0px', opacity: 1, duration: 0.5, ease: 'power2.out' }, '<')
      .fromTo(bodyRef.current, { y: 0 }, { y: -30, duration: 0.6, ease: 'power2.out' })
      .fromTo(windowsRef.current, { opacity: 0 }, { opacity: 0.7, duration: 0.4, ease: 'power2.out' })
      .fromTo(headlightsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2, yoyo: true, repeat: 1, ease: 'power1.inOut' });

    // Pinning and scroll sync
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: '+=1000',
      pin: true,
      scrub: true,
      animation: timeline.current,
    });

    return () => {
      trigger.kill();
      timeline.current && timeline.current.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center min-h-[60vh] w-full bg-neutral-800 rounded-lg"
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
          <rect x="260" y="110" width="180" height="40" rx="10" fill="#b6c4d6" opacity="0.7" />
          <rect x="460" y="110" width="120" height="40" rx="10" fill="#b6c4d6" opacity="0.7" />
        </g>
        {/* Headlights */}
        <g ref={headlightsRef} id="headlights">
          <ellipse cx="120" cy="150" rx="12" ry="6" fill="#fffbe6" opacity="0.8" />
          <ellipse cx="680" cy="150" rx="12" ry="6" fill="#fffbe6" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
});

export default CarAnimation; 