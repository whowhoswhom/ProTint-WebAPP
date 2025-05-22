import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import CarAnimation from '../components/CarAnimation';
import VehicleForm from '../components/VehicleForm';
import ServiceCard from '../components/ServiceCard';
import HeroCar from '../components/HeroCar';
import ModalPrompt from '../components/ModalPrompt';


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
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const accentRef = useRef(null);
  const ctaRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
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

    let removeHover;
    if (ctaRef.current) {
      const hoverIn = () =>
        gsap.to(ctaRef.current, {
          boxShadow: '0 0 20px #ff4ecd',
          scale: 1.05,
          duration: 0.3,
        });
      const hoverOut = () =>
        gsap.to(ctaRef.current, { boxShadow: 'none', scale: 1, duration: 0.3 });
      ctaRef.current.addEventListener('mouseenter', hoverIn);
      ctaRef.current.addEventListener('mouseleave', hoverOut);
      removeHover = () => {
        ctaRef.current.removeEventListener('mouseenter', hoverIn);
        ctaRef.current.removeEventListener('mouseleave', hoverOut);
      };
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

    const t = setTimeout(() => setShowModal(true), 20000);
    return () => {
      clearTimeout(t);
      removeHover?.();
    };
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
            className="absolute -top-1/4 left-1/2 w-[120%] h-[120%] opacity-40 blur-3xl -translate-x-1/2"
            style={{ background: 'linear-gradient(45deg,#ff4ecd,#08fdd8,#00c6ff)' }}
          />
        </div>
        <div className="relative z-10 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left max-w-xl">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#ff4ecd] via-[#08fdd8] to-[#00c6ff] bg-clip-text text-transparent drop-shadow-lg">
            ProTint Louisville
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-prose">
            Customize your ride with premium services and professional installers.
          </p>
          <button
            ref={ctaRef}
            className="font-semibold px-8 py-3 rounded-lg text-black"
            style={{ background: 'linear-gradient(90deg,#ff4ecd,#08fdd8,#00c6ff)' }}
          >
            Customize My Ride
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center w-full max-w-xl">
          <HeroCar />
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
      <ModalPrompt show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
