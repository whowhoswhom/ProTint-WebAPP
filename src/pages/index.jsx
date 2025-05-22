import React, { useRef, useEffect } from 'react';
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

  useEffect(() => {
    if (!carRef.current) return;
    const cleanup = setupScrollTriggers(carRef.current);
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Hero Section: CarAnimation + VehicleForm */}
      <section
        className="w-full flex flex-col md:flex-row justify-center items-center gap-8 pt-12 min-h-screen mb-16"
        style={{ boxSizing: 'border-box' }}
      >
        <div className="flex-1 flex justify-center items-center w-full max-w-3xl h-[400px]">
          <CarAnimation ref={carRef} />
        </div>
        <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto">
          <VehicleForm />
        </div>
      </section>
      {/* Scroll Markers */}
      {steps.map(({ step, label }) => (
        <div
          key={step}
          className="step-marker flex items-center justify-center w-full max-w-2xl bg-white rounded-lg shadow-md my-24 min-h-[60vh] border-2 border-blue-200"
          data-step={step}
        >
          <span className="text-2xl font-semibold text-blue-700">{label}</span>
        </div>
      ))}
      {/* Available Services Section */}
      <section className="w-full max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Available Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sampleServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
} 