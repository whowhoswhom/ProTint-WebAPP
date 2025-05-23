import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CarAnimation from '../components/CarAnimation';
import VehicleForm from '../components/VehicleForm';
import ServiceCard from '../components/ServiceCard';
import HeroCar from '../components/HeroCar';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const sampleServices = [
  {
    type: 'tint',
    name: 'Window Tinting',
    description: 'Premium UV-blocking tint for all windows.',
    price: '$199',
  },
  {
    type: 'wheels',
    name: 'Wheel Upgrade',
    description: 'Upgrade to custom alloy wheels for style and performance.',
    price: '$899',
  },
  {
    type: 'lift',
    name: 'Lift Kit Installation',
    description: 'Raise your vehicle for off-road capability and presence.',
    price: '$1,299',
  },
  {
    type: 'audio',
    name: 'Audio System',
    description: 'High-fidelity audio system installation.',
    price: '$499',
  },
];

const HomePage = () => {
  const svgRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Animate SVG glow
    if (svgRef.current) {
      anime({
        targets: svgRef.current,
        opacity: [0.8, 1],
        easing: 'easeInOutSine',
        duration: 2000,
        direction: 'alternate',
        loop: true,
      });
    }
    // Animate text entrance
    gsap.utils.toArray('.section-text').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] text-white font-inter flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Main grid layout */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mt-40 mb-32 gap-12 px-4">
        {/* Left/Top: Title and Subtext */}
        <div className="flex-1 section-text">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            All-in-one <br className="hidden md:block" />
            automotive <span className="text-[#a1a1a1]">visualizer</span>.
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-md mb-8">
            A fast and versatile web app to preview, customize, and book automotive services. Powered by GSAP, AnimeJS, and a modern stack.
          </p>
          <button className="border border-white text-white px-6 py-3 rounded-full font-semibold transition-colors hover:bg-white hover:text-[#0d0d0d]">
            Learn More
          </button>
        </div>
        {/* Center: Animated Car SVG */}
        <div className="flex-1 flex items-center justify-center section-text">
          <svg
            ref={svgRef}
            id="hellcat-outline"
            width="700"
            height="250"
            viewBox="0 0 700 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_16px_rgba(255,255,255,0.3)]"
          >
            {/* Replace with actual /public/assets/hellcat.svg content */}
            <g>
              <path d="M 30 200 Q 100 100 200 120 Q 300 140 400 100 Q 500 60 670 200" stroke="#fff" strokeWidth="2" fill="none" />
              <ellipse cx="120" cy="200" rx="40" ry="40" stroke="#fff" strokeWidth="2" fill="none" />
              <ellipse cx="580" cy="200" rx="40" ry="40" stroke="#fff" strokeWidth="2" fill="none" />
              {/* ...add the rest of the Hellcat outline SVG here... */}
            </g>
          </svg>
        </div>
      </div>
      {/* Example scroll sections */}
      <div className="relative z-20 w-full max-w-4xl flex flex-col gap-32 mt-20">
        <section className="section-text">
          <h2 className="text-3xl font-bold mb-2">Scroll-based Customization</h2>
          <p className="text-gray-400">Tint, wheels, and lift kit layers animate as you scroll. The car outline remains the visual anchor.</p>
        </section>
        <section className="section-text">
          <h2 className="text-3xl font-bold mb-2">Minimal, Modern, Responsive</h2>
          <p className="text-gray-400">No clutter. No distractions. Just a clean, immersive experience on any device.</p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
