import React from 'react';

// Simple icon placeholder based on type
const typeColors = {
  tint: 'bg-[#08fdd8]',
  wheels: 'bg-[#ff4ecd]',
  lift: 'bg-[#00c6ff]',
  audio: 'bg-pink-400',
  default: 'bg-gray-500',
};

function IconPlaceholder({ type }) {
  const color = typeColors[type] || typeColors.default;
  return (
    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${color} bg-opacity-80 mb-3 transition-all`}></div>
  );
}

export default function ServiceCard({ type = 'tint', name = 'Service Name', description = 'Service description goes here.', price = '$199' }) {
  return (
    <div
      className="group bg-neutral-800 text-gray-100 rounded-xl shadow-xl p-6 flex flex-col items-center border border-neutral-700 transition-all duration-200 hover:scale-105 hover:border-[#ff4ecd] hover:shadow-[#ff4ecd]/40 focus-within:scale-105 focus-within:border-[#ff4ecd] focus-within:shadow-[#ff4ecd]/40 cursor-pointer"
      tabIndex={0}
    >
      <IconPlaceholder type={type} />
      <h3 className="text-lg font-bold mb-1 text-center">{name}</h3>
      <p className="text-gray-300 text-sm mb-3 text-center">{description}</p>
      <div className="mt-auto text-[#08fdd8] font-semibold text-lg">{price}</div>
    </div>
  );
} 