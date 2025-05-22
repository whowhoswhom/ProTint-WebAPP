import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import anime from 'animejs';

const PARTICLE_COUNT = 24;
const PARTICLE_COLORS = ['#60a5fa', '#fbbf24', '#34d399', '#f472b6'];

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

const CAR_BASE = {
  x: 80,
  y: 180,
  w: 340,
  h: 80,
  r: 24,
};

const WHEEL = {
  r: 28,
  y: 260,
  leftX: 130,
  rightX: 350,
};

const CarAnimation = forwardRef((props, ref) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationRef = useRef(null);
  const carState = useRef({
    tintBack: 0,
    tintSides: 0,
    wheelsFront: 0,
    lift: 0,
    wheelRotation: 0,
    carYOffset: 0,
  });
  const currentStep = useRef('');
  const carAnim = useRef({});

  // Expose updateLayers method for scrollTriggers
  useImperativeHandle(ref, () => ({
    updateLayers: (step) => {
      if (currentStep.current === step) return;
      currentStep.current = step;
      if (step === 'tint-back') {
        anime({
          targets: carState.current,
          tintBack: 1,
          duration: 800,
          easing: 'easeOutQuad',
          update: redraw,
        });
      } else if (step === 'tint-sides') {
        anime({
          targets: carState.current,
          tintSides: 1,
          duration: 800,
          easing: 'easeOutQuad',
          update: redraw,
        });
      } else if (step === 'wheels-front') {
        anime({
          targets: carState.current,
          wheelsFront: 1,
          wheelRotation: 360,
          duration: 1200,
          easing: 'easeOutExpo',
          update: redraw,
        });
      } else if (step === 'lift') {
        anime({
          targets: carState.current,
          lift: 1,
          carYOffset: -40,
          duration: 1000,
          easing: 'easeOutBack',
          update: redraw,
        });
      }
    },
  }));

  // Redraw function
  function redraw() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let dpr = window.devicePixelRatio || 1;
    let width = canvas.parentElement.offsetWidth;
    let height = canvas.parentElement.offsetHeight;
    ctx.clearRect(0, 0, width, height);

    // Draw particles (background)
    particles.current.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();
    });

    // Car Y offset for lift
    ctx.save();
    ctx.translate(0, carState.current.carYOffset || 0);

    // Draw car base (simple rounded rectangle)
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(CAR_BASE.x + CAR_BASE.r, CAR_BASE.y);
    ctx.lineTo(CAR_BASE.x + CAR_BASE.w - CAR_BASE.r, CAR_BASE.y);
    ctx.quadraticCurveTo(CAR_BASE.x + CAR_BASE.w, CAR_BASE.y, CAR_BASE.x + CAR_BASE.w, CAR_BASE.y + CAR_BASE.r);
    ctx.lineTo(CAR_BASE.x + CAR_BASE.w, CAR_BASE.y + CAR_BASE.h - CAR_BASE.r);
    ctx.quadraticCurveTo(CAR_BASE.x + CAR_BASE.w, CAR_BASE.y + CAR_BASE.h, CAR_BASE.x + CAR_BASE.w - CAR_BASE.r, CAR_BASE.y + CAR_BASE.h);
    ctx.lineTo(CAR_BASE.x + CAR_BASE.r, CAR_BASE.y + CAR_BASE.h);
    ctx.quadraticCurveTo(CAR_BASE.x, CAR_BASE.y + CAR_BASE.h, CAR_BASE.x, CAR_BASE.y + CAR_BASE.h - CAR_BASE.r);
    ctx.lineTo(CAR_BASE.x, CAR_BASE.y + CAR_BASE.r);
    ctx.quadraticCurveTo(CAR_BASE.x, CAR_BASE.y, CAR_BASE.x + CAR_BASE.r, CAR_BASE.y);
    ctx.closePath();
    ctx.fillStyle = '#222b3a';
    ctx.shadowColor = '#222b3a';
    ctx.shadowBlur = 16;
    ctx.fill();
    ctx.restore();

    // Rear window (tint-back)
    if (carState.current.tintBack > 0) {
      ctx.save();
      ctx.globalAlpha = 0.6 * carState.current.tintBack;
      ctx.fillStyle = '#111827';
      ctx.fillRect(CAR_BASE.x + 60, CAR_BASE.y + 16, 80, 32);
      ctx.restore();
    }
    // Side windows (tint-sides)
    if (carState.current.tintSides > 0) {
      ctx.save();
      ctx.globalAlpha = 0.4 * carState.current.tintSides;
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(CAR_BASE.x + 150, CAR_BASE.y + 16, 70, 32);
      ctx.fillRect(CAR_BASE.x + 240, CAR_BASE.y + 16, 70, 32);
      ctx.restore();
    }
    // Wheels (wheels-front)
    if (carState.current.wheelsFront > 0) {
      ctx.save();
      ctx.globalAlpha = carState.current.wheelsFront;
      // Left wheel
      ctx.save();
      ctx.translate(WHEEL.leftX, WHEEL.y);
      ctx.rotate((carState.current.wheelRotation * Math.PI) / 180);
      ctx.beginPath();
      ctx.arc(0, 0, WHEEL.r, 0, 2 * Math.PI);
      ctx.fillStyle = '#374151';
      ctx.shadowColor = '#1e293b';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
      // Right wheel
      ctx.save();
      ctx.translate(WHEEL.rightX, WHEEL.y);
      ctx.rotate((carState.current.wheelRotation * Math.PI) / 180);
      ctx.beginPath();
      ctx.arc(0, 0, WHEEL.r, 0, 2 * Math.PI);
      ctx.fillStyle = '#374151';
      ctx.shadowColor = '#1e293b';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }
    ctx.restore(); // car Y offset
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let dpr = window.devicePixelRatio || 1;
    let width = canvas.parentElement.offsetWidth;
    let height = canvas.parentElement.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // Initialize particles
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      r: randomBetween(8, 18),
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      alpha: randomBetween(0.5, 1),
    }));

    // Animate particles
    animationRef.current = anime({
      targets: particles.current,
      x: () => randomBetween(0, width),
      y: () => randomBetween(0, height),
      alpha: () => randomBetween(0.5, 1),
      easing: 'easeInOutSine',
      duration: 4000,
      direction: 'alternate',
      loop: true,
      update: redraw,
    });

    redraw();

    // Handle resize
    const handleResize = () => {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      redraw();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) animationRef.current.pause();
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-label="Animated car preview placeholder"
    />
  );
});

export default CarAnimation; 