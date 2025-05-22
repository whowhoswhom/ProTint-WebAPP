import React from 'react';

export default function HeroCar() {
  return (
    <div className="w-full flex justify-center items-center">
      <svg
        viewBox="0 0 800 300"
        className="w-full max-w-lg h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="rear-wheel">
          <ellipse cx="170" cy="240" rx="48" ry="48" fill="#222" stroke="#444" strokeWidth="8" />
          <circle cx="170" cy="240" r="18" fill="#444" />
        </g>
        <g id="front-wheel">
          <ellipse cx="630" cy="240" rx="48" ry="48" fill="#222" stroke="#444" strokeWidth="8" />
          <circle cx="630" cy="240" r="18" fill="#444" />
        </g>
        <g id="car-body">
          <rect x="120" y="120" width="560" height="80" rx="32" fill="#e5e7eb" stroke="#222" strokeWidth="6" />
          <rect x="180" y="100" width="440" height="60" rx="24" fill="#fff" stroke="#222" strokeWidth="4" />
          <rect x="120" y="120" width="120" height="40" rx="12" fill="#222" opacity="0.7" />
          <rect x="650" y="100" width="60" height="12" rx="4" fill="#222" />
        </g>
        <g id="windows">
          <rect x="260" y="110" width="180" height="40" rx="10" fill="#b6c4d6" opacity="0.7" />
          <rect x="460" y="110" width="120" height="40" rx="10" fill="#b6c4d6" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
