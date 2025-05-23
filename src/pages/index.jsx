import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CarAnimation from '../components/CarAnimation';
import VehicleForm from '../components/VehicleForm';
import ServiceCard from '../components/ServiceCard';
import HeroCar from '../components/HeroCar';
import ModalPrompt from '../components/ModalPrompt';

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
  const heroRef = useRef(null);
  const svgRef = useRef(null);
  const servicesRef = useRef(null);
  const accentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
    );
    if (accentRef.current) {
      gsap.to(accentRef.current, {
        xPercent: 10,
        duration: 6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
    gsap.utils
      .toArray(servicesRef.current?.children ?? [])
      .forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        );
      });
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Landing Hero */}
      <section
        ref={heroRef}
        className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-12 px-8 py-20 min-h-screen overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div
            ref={accentRef}
            className="absolute -top-1/4 left-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 opacity-40 blur-3xl -translate-x-1/2"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left max-w-xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            ProTint Louisville
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-md mb-8">
            A fast and versatile web app to preview, customize, and book automotive services. Powered by GSAP, AnimeJS, and a modern stack.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Customize My Ride
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
      </section>

      {/* Animation */}
      <section className="w-full py-20">
        <CarAnimation />
      </section>

      {/* Vehicle Form */}
      <section className="w-full flex justify-center items-center py-16 px-4">
        <VehicleForm />
      </section>
      {/* Available Services Section */}
      <section ref={servicesRef} className="w-full max-w-6xl px-4 py-20">
        <h2 className="text-4xl font-extrabold text-white mb-12 text-center">Available Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-gray-400">
        &copy; {new Date().getFullYear()} ProTint Louisville
      </footer>
    </div>
  );
};

export default HomePage;
