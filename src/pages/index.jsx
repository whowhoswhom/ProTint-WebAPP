import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import CarAnimation from '../components/CarAnimation';
import VehicleForm from '../components/VehicleForm';
import ServiceCard from '../components/ServiceCard';
import { setupScrollTriggers } from '../lib/scrollTriggers';

const steps = [
  { step: 'tint-back', label: 'Tint Back Window' },
  { step: 'tint-sides', label: 'Tint Side Windows' },
  { step: 'wheels-front', label: 'Wheels Front' },
  { step: 'lift', label: 'Lift Kit' },
];

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

export default function HomePage() {
  const carRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const accentRef = useRef(null);

  useEffect(() => {
    if (!carRef.current) return;
    const cleanup = setupScrollTriggers(carRef.current);
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
    gsap.fromTo(
      servicesRef.current?.children ?? [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        },
      }
    );
    return cleanup;
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Landing Hero */}
      <section
        ref={heroRef}
        className="relative w-full flex flex-col items-center justify-center text-center gap-6 py-24 min-h-screen overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div
            ref={accentRef}
            className="absolute -top-1/4 left-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 opacity-40 blur-3xl -translate-x-1/2"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          ProTint Louisville
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
          Customize your ride with premium services and professional installers.
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
          Customize My Ride
        </button>
      </section>

      {/* Animation + Form */}
      <section className="w-full flex flex-col md:flex-row justify-center items-center gap-8 py-16">
        <div className="flex-1 flex justify-center items-center w-full max-w-3xl h-[400px]">
          <CarAnimation ref={carRef} />
        </div>
        <div className="flex justify-center items-center w-full md:w-auto px-4">
          <VehicleForm />
        </div>
      </section>
      {/* Scroll Markers */}
      {steps.map(({ step, label }) => (
        <div
          key={step}
          className="step-marker flex items-center justify-center w-full max-w-2xl bg-neutral-900 rounded-xl shadow-lg my-24 min-h-[60vh] border border-neutral-700"
          data-step={step}
        >
          <span className="text-2xl font-semibold text-blue-400">{label}</span>
        </div>
      ))}
      {/* Available Services Section */}
      <section ref={servicesRef} className="w-full max-w-6xl px-4 py-20">
        <h2 className="text-4xl font-extrabold text-white mb-12 text-center">Available Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
} 