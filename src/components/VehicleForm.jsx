import React, { useState } from 'react';

const initialState = {
  year: '',
  make: '',
  model: '',
  color: '',
};

export default function VehicleForm() {
  const [vehicleInfo, setVehicleInfo] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(vehicleInfo);
  };

  return (
  <form
    onSubmit={handleSubmit}
    className="bg-white/5 backdrop-blur-lg border border-white/10 text-gray-100 rounded-2xl shadow-xl p-6 flex flex-col gap-4 w-full max-w-sm"
  >
      <h2 className="text-lg font-bold mb-2 text-center">Vehicle Info</h2>
      <label className="flex flex-col text-sm font-medium">
        Year
        <input
          type="number"
          name="year"
          value={vehicleInfo.year}
          onChange={handleChange}
          className="mt-1 px-3 py-2 rounded-lg bg-gray-800/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff4ecd] transition-colors"
          min="1900"
          max={new Date().getFullYear() + 1}
          placeholder="e.g. 2022"
          required
        />
      </label>
      <label className="flex flex-col text-sm font-medium">
        Make
        <input
          type="text"
          name="make"
          value={vehicleInfo.make}
          onChange={handleChange}
          className="mt-1 px-3 py-2 rounded-lg bg-gray-800/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff4ecd] transition-colors"
          placeholder="e.g. Toyota"
          required
        />
      </label>
      <label className="flex flex-col text-sm font-medium">
        Model
        <input
          type="text"
          name="model"
          value={vehicleInfo.model}
          onChange={handleChange}
          className="mt-1 px-3 py-2 rounded-lg bg-gray-800/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff4ecd] transition-colors"
          placeholder="e.g. Camry"
          required
        />
      </label>
      <label className="flex flex-col text-sm font-medium">
        Color
        <input
          type="text"
          name="color"
          value={vehicleInfo.color}
          onChange={handleChange}
          className="mt-1 px-3 py-2 rounded-lg bg-gray-800/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff4ecd] transition-colors"
          placeholder="e.g. Black"
          required
        />
      </label>
      <button
        type="submit"
        className="mt-4 font-semibold py-2 rounded-lg text-black transition-colors"
        style={{ background: 'linear-gradient(90deg,#ff4ecd,#08fdd8,#00c6ff)' }}
      >
        See Services
      </button>
    </form>
  );
} 