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
      className="bg-gray-900 text-gray-100 rounded-xl shadow-lg p-6 flex flex-col gap-4 w-72 min-w-[240px]"
    >
      <h2 className="text-lg font-bold mb-2 text-center">Vehicle Info</h2>
      <label className="flex flex-col text-sm font-medium">
        Year
        <input
          type="number"
          name="year"
          value={vehicleInfo.year}
          onChange={handleChange}
          className="mt-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="mt-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="mt-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="mt-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. Black"
          required
        />
      </label>
      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors"
      >
        See Services
      </button>
    </form>
  );
} 